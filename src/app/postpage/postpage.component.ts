import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';
import {ActivatedRoute} from '@angular/router'
import { Button } from 'protractor';
@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.scss']
})
export class PostpageComponent implements OnInit {
  postData:any;
  userID:any
  loading =true;

  constructor(private service:ServiceService, private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(data =>
        this.userID =  data.id
      )
  }

  
  ngOnInit(): void {
    this.userList(this.userID)
  }

  userList(id){
    this.service.getPostUser(id).subscribe(data =>{
      this.loading =false;
    this.postData = data
    })
  }

}
