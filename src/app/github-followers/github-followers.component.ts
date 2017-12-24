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

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
