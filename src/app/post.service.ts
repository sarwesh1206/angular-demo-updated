import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';
import { BadInput } from './common/bad-input';
import { DataService } from './data.service';
//  import { DataService } from './service/data.service';


 @Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
