import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostpageComponent } from './postpage/postpage.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: '',
    component: UserComponent
  },
  {
    path:'post/:id',
    component:PostpageComponent
  },
  {
    path:'postpageDetails/:id',
    component:PostdetailsComponent
  },
  {
    path:'search',
    component:SearchuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
