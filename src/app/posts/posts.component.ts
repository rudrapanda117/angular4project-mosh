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
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        console.log('An unexpected error occured.', error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    };
    input.value = '';
    console.log('post', post);
    this.postService.createPost(post)
      .subscribe(
        (response) => {
          post.id = response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        },
        (error: Response) => {
          if (error.status === 400 ) {
            //
          } else {
            console.log('An unexpected error occured.', error);
          }

        });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log('An unexpected error occured.', error);
        });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {

    this.postService.deletePost(post.id)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
         (error: Response) => {
           if (error.status === 404) {
             alert('This post is already deleted');

           } else {
            alert('An unexpected error occured.');
            console.log('An unexpected error occured.', error);
           }
        });
    //this.http.put(this.url, JSON.stringify(post));
  }


}
