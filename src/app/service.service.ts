import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerURL } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private userURL = apiServerURL + 'users';
  private postUserIDURL= apiServerURL+'posts?userId=';
  private postDetailsURL = apiServerURL +'posts/';
  private postDeleteURL =apiServerURL+'posts'
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.userURL)
  }

  getPostUser(userId){
    return this.http.get(this.postUserIDURL+userId)
  }

  getPostDetails(id){
    return this.http.get(this.postDetailsURL+id)
  }

  getCommentPost(id){
    return this.http.get(this.postDetailsURL+id+'/comments')
  }

  postDelete(id){
    return this.http.delete(this.postDeleteURL+'/'+id)
  }
  
}
