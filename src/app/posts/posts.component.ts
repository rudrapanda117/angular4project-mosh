import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import {
  PostService
} from './post.service';
import {
  Component,
  OnInit
} from '@angular/core';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    };
    input.value = '';
    console.log('post', post);
    this.postService.create(post)
      .subscribe(
        newPost => {
          post.id = newPost.id;
          this.posts.splice(0, 0, post);
          console.log(post);
        },
        (error: AppError) => {
          if (error instanceof BadInput ) {
            console.log('An unexpected error occured.', error);
          } else {
            throw error;
          }

        });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {

    this.postService.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
         (error: AppError) => {
           if (error instanceof NotFoundError) {
             console.log('This post is already deleted', error);
             alert('This post is already deleted');
           } else {
              throw error;
           }
        });
    //this.http.put(this.url, JSON.stringify(post));
  }


}
