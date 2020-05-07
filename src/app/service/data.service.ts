import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class DataService {
  constructor(private url: string,private http: Http) { }

  getAll(){
   return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }
  create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
    .map(response => response.json())
    .catch((error: AppError) =>{
         if(error instanceof BadInput){
           // this.form.setErrors(error.originalError)
         // return Observable.throw(new BadInput(error.json()));
      }
      return Observable.throw(new AppError(error));
    })
  }
  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }
  delete(resource){
    return this.http.delete(this.url + '/' + resource.id)
    .map(response => response.json())
    .catch(this.handleError);

  }
  private handleError(error: Response)
  {
    if(error.status == 404){
      return Observable.throw(new NotFoundError())
    }
    return Observable.throw(new AppError());

  }
}
