import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dataList:any;
  loading =true;
  constructor( private service:ServiceService) { }

  ngOnInit(): void {
    this.userList();
  }


  userList(){
    this.service.getUser().subscribe(data =>{
      this.loading= false
    this.dataList = data
    })
  }

}
