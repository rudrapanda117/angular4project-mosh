import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
     return this.http.post(this.url, JSON.stringify(post))
     .catch((error: Response) => {
       if (error.status === 400) {
          return Observable.throw(new BadInput(error.json));
        } else {
          return Observable.throw(new AppError(error.json()));
        }
     });
  }

  updatePost(post) {
     return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(postID) {
    return this.http.delete(this.url + '/' + postID)
    .catch((error: Response) => {
      if (error.status === 404) {
        Observable.throw(new NotFoundError(error));
      }else {
        return Observable.throw(new AppError(error));
      }
    });
  }
}


