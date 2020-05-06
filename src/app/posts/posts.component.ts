import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './../post.service';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: any[];

  constructor(private service: PostService ) {

  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response =>{
        this.posts = response.json();
      });
  }
  createPost(input: HTMLInputElement){
    let post: any = { title: input.value}
    input.value = ''
    this.service.createPost(post)
      .subscribe((response) =>{
        post['id'] = response.json().id
        this.posts.splice(0,0,post);
      }),
      (error: AppError) => {
        if(error instanceof AppError){
          alert("This post is already created")

        }
        else{
         throw error;
        }

      }
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe((response) =>{
        console.log(response.json());
      })

  }
  deletePost(post){
    this.service.deletePost(post)
      .subscribe((response)=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      }),
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert("This post has already been deleted")
        else throw  error;
      }
  }

}
