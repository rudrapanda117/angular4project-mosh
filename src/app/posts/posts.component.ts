import { PostService } from './post.service';
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

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value};
    input.value = '';
    console.log('post', post);
    this.postService.createPost(post)
    .subscribe((response) => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  updatePost(post) {
    this.postService.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
   this.postService.deletePost(post)
    .subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
    //this.http.put(this.url, JSON.stringify(post));
  }


}
