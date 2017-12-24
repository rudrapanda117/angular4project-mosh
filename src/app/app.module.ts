import {
  GithubProfileService
} from './github-profile/github-profile.service';
import {
  NotFoundComponent
} from './not-found/not-found.component';
import {
  GithubProfileComponent
} from './github-profile/github-profile.component';
import {
  HomeComponent
} from './home/home.component';
import {
  NavbarComponent
} from './navbar/navbar.component';
import {
  AppErrorHandler
} from './common/app-error-handler';
import {
  ErrorHandler
} from '@angular/core';
import {
  PostService
} from './posts/post.service';
import {
  SignupFormComponent
} from './signup-form/signup-form.component';
import {
  SumamryPipe
} from './summary.pipe';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';
import {
  RouterModule
} from '@angular/router';


import {
  AppComponent
} from './app.component';
import {
  CoursesComponent
} from './courses.component';
import {
  CourseComponent
} from './course/course.component';
import {
  CoursesService
} from './courses.service';
import {
  AuthorsComponent
} from './authors/authors.component';
import {
  AuthorsService
} from './authors.service';
import {
  FavoriteComponent
} from './favorite/favorite.component';
import {
  BootstrapPanelComponent
} from './bootstrap-panel/bootstrap-panel.component';
import {
  LikeComponent
} from './like/like.component';
import {
  InputFormatDirective
} from './input-format.directive';
import {
  ZippyComponent
} from './zippy/zippy.component';
import {
  ContactFormComponent
} from './contact-form/contact-form.component';
import {
  PostsComponent
} from './posts/posts.component';
import {
  GithubFollowersComponent
} from './github-followers/github-followers.component';
import {
  GithubFollowersService
} from './github-followers/github-followers.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SumamryPipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }

    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    GithubProfileService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
