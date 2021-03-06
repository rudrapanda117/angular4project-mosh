import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected = false;
  @Output('change') changeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.changeEvent.emit({newValue: this.isSelected });
  }

}


export interface IFavoriteChangedEventArgs {
  newValue: boolean;
}
