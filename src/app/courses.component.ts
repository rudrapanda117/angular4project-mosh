import {
  CoursesService
} from './courses.service';
import {
  Component
} from '@angular/core';



@Component({
  selector: 'app-courses',
  template: `
            {{ text | summary:10:'1212121212' }}
    `
})
export class CoursesComponent {

  text = `
 lOajbdjf iugfhds gdfidhsuf duhfud fiudiufsd fdsiuf diufdusfiuyew hasdufsdiufiusd fdf uyhfueyf iuaiufd uaguf8duf ufduf dfudfud
 `;

  constructor(private coursesService: CoursesService) {

  }

}
