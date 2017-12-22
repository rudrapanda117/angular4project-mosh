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
    <!-- event bubling -->
    <div (click)="onSecondDivClicked()">
    <div (click)="onDivClicked($event);">
    <button class="btn btn-primary" [style.backgroundColor]="isActive? 'blue' : 'red' " (click)="onSave($event)">Save</button>
    </div>
    </div>

    <!-- event filtering -->
    <input (keyup)="onKeyUp($event)"/>

    <input (keyup.enter)="onKeyUpEnter()"/>

    <!-- template variable -->
    <input (keyup.enter)="onKeyUpEnterValue($event)"/>

    <input #templateVariable (keyup.enter)="onKeyUpEnterTemplateVariable(templateVariable.value)"/>

    `
})
export class CoursesComponent {
  propertyBinding = ' Displaying image by Property Binding';
  stringInterPolation = 'Displaying image by String Interpolation';
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  colspan = 2;
  isActive = true;
  onSave($event) {
    console.log('button was clicked', $event);
  }

  onDivClicked($event) {
    // $event.stopPropagation();
    console.log('First Div clicked');
  }

  onSecondDivClicked() {
    console.log('Second Div clicked');
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
    }

  }

  onKeyUpEnter() {

      console.log('Enter was pressed');


  }

  onKeyUpEnterValue($event) {

    console.log('Enter was pressed', $event.target.value);


}

onKeyUpEnterTemplateVariable(value) {

    console.log('Enter was pressed', value);


}

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

}
