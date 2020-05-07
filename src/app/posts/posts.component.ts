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
    this.service.getAll()
      .subscribe(posts =>this.posts = posts);
  }
  createPost(input: HTMLInputElement){
    let post: any = { title: input.value}
    input.value = ''
    this.posts.splice(0,0,post);

    this.service.create(post)
      .subscribe(
        newPost =>{
        post['id'] = newPost.id
      }),
      (error: AppError) => {
        this.posts.splice(0,1);// remove it from earlier commit

        if(error instanceof AppError){
          alert("This post is already created")

        }
        else{
         throw error;
        }

      }
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(updatePost =>{
        console.log(updatePost);
      })

  }
  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post)
      .subscribe(null,
      (error: AppError) => {
        this.posts.splice(index,0,post);
        if(error instanceof NotFoundError)
          alert("This post has already been deleted")
        else throw  error;
      })
  }

}
