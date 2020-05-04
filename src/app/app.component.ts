import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses =[
    {id: "id1",
      name: "course1"
    },

    {id: "id2",
      name: "course2"
    }
  ]
  addButton(){
    this.courses.push({id:"id3",name:"course3"})
  }
  removeClick(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
}
