import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from './../github-followers.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
   followers: any[];
  constructor(private route: ActivatedRoute,private service: GithubFollowersService) { }

  ngOnInit(): void {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe((combined)=>{
        let id = combined[0].get('id');
        let page =combined[1].get('page');
        // this.service.getAll.({id: id,page: page})
      this.service.getAll()
      .subscribe(followers => this.followers = followers)
      })

    // this.route.queryParamMap
    // .subscribe(param =>{
    // });
    // let id = this.route.snapshot.queryParamMap.get('id')
    // let page = this.route.snapshot.paramMap.get('page')

  }

}
