import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './../post.service';

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
      (error: Response) => {
        if(error.status == 400){
          //this.form.setErrors(error.json())

        }
        else{
          alert("Unexpected error occurs")
          console.log(error);
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
      (error: Response) => {
        if(error.status == 404)
          alert("This post has already been deleted")
        else
          alert("Unexpected error occur");
          console.log(error)
      }
  }

}
