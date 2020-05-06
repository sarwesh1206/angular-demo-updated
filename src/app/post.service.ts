import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';
import { BadInput } from './common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(){
   return this.http.get(this.url)
  }
  createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
    .catch((error: AppError) =>{
         if(error instanceof BadInput){
           // this.form.setErrors(error.originalError)
         // return Observable.throw(new BadInput(error.json()));
      }
      return Observable.throw(new AppError(error));
    })
  }
  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  }
  deletePost(post){
    return this.http.delete(this.url + '/' + 500)
      .catch((error: Response) =>{
        if(error.status == 404){
          return Observable.throw(new NotFoundError())
        }
        return Observable.throw(new AppError(error));
      })

  }
}
