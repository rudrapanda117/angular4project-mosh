import {
  Component
} from '@angular/core';
import { IFavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: IFavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs.newValue);
  }
}
