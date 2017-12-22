import {
  CoursesService
} from './courses.service';
import {
  Component
} from '@angular/core';



@Component({
  selector: 'app-courses',
  template: `
    <h2> {{ title }} </h2>
    <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <h2 >{{ stringInterPolation }}</h2>
    <img src="{{ imageUrl }}"/>
    <h2 [textContent]="propertyBinding"></h2>
    <img [src]="imageUrl" />

    <table>
        <tr>
            <td [attr.colspan]="colSpan" ></td>
        </tr>
    </table>
    `
})
export class CoursesComponent {
  propertyBinding = ' Displaying image by Property Binding';
  stringInterPolation = 'Displaying image by String Interpolation';
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  colspan = 2;

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

}
