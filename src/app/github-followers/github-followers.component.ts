import {
  combineLatest
} from 'rxjs/operators';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  GithubFollowersService
} from './github-followers.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  log
} from 'util';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  public followers: any[];
  constructor(private service: GithubFollowersService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => {
        console.log('pathParams', params);
      });

    this.route.queryParamMap
      .subscribe(params => {
        console.log('query Params', params);
        let page = +params.get('page');
        let order = params.get('order');
        console.log('page: ', page, ' order : ', order);
      });

    Observable.combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .subscribe(combined => {
        let id = combined[0].get('id'); // pathparams
        let page = combined[1].get('page');
        let order = combined[1].get('order');

        console.log('Combined Observable:- ', 'id: ', id, 'page: ', page, ' order : ', order);
        
        // Fetch followers
        this.service.getAll()
          .subscribe(followers => this.followers = followers);

      });

  }

}
