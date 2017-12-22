import {
  CoursesService
} from './courses.service';
import {
  Component
} from '@angular/core';



@Component({
  selector: 'app-courses',
  template: `
    <!-- two way binding -->
    <input [value]="email" (keyup.enter)="email = $event.target.value; ontwbEnter()" />

    <input [(ngModel)]="email" (keyup.enter)="ontwbEnter()" />

    `
})
export class CoursesComponent {

  email = 'a@b.com';


ontwbEnter() {
    console.log('email value', this.email);
}

  constructor(private coursesService: CoursesService) {

  }

}
