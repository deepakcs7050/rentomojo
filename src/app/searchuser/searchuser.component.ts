import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss']
})
export class SearchuserComponent implements OnInit {
data:any;
  settings = {
   
      actions: {
      add: false,
      edit: false,
      delete: false
      },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  constructor( private service:ServiceService) { }

  ngOnInit(): void {
    this.userList();
  }

  userList(){
    this.service.getUser().subscribe(data =>{
    this.data = data
    })
  }
}
