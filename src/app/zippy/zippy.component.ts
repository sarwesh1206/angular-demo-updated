import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
  @Input('title') title: string;
  expanded:boolean = false;
  isExpanded(){
    this.expanded = !this.expanded;
  }

}
