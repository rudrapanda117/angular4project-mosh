import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url;
  constructor(private http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  ngOnInit() {}

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value};
    input.value = '';
    console.log('post', post);
    this.http.post(this.url, JSON.stringify(post))
    .subscribe((response) => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(response => {
      console.log(response.json());
    });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
    //this.http.put(this.url, JSON.stringify(post));
  }


}
