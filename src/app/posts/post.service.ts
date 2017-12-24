import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PostService extends DataService {
  //private url = 'https://ajsonplaceholder.typicode.com/posts';
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }


}


