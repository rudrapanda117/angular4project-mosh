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
 tweet = {
   likesCount: 10,
  isLiked: true
 };
}
