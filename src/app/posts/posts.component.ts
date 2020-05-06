import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: any[];
    private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) =>{
        this.posts = response.json();
      })
  }

  ngOnInit(): void {
  }
  createPost(input: HTMLInputElement){
    let post: any = { title: input.value}
    input.value = ''
    this.http.post(this.url,JSON.stringify(post))
      .subscribe((response) =>{
        post['id'] = response.json().id
        this.posts.splice(0,0,post);
      })
  }

  updatePost(post){
    this.http.patch(this.url + '/'+ post.id,JSON.stringify({isRead: true}))
      .subscribe((response) =>{
        console.log(response.json());
      })

  }
  deletePost(post){
    this.http.delete(this.url + '/'+ post.id,)
      .subscribe((response)=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      })
  }

}
