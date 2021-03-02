import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
  postDetails: any
  postId: any
  comments = false
  commentArray: any;

  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(data =>
      this.postId = data.id
    )
  }

  ngOnInit(): void {
    this.getPostDetails(this.postId)
  }

  getPostDetails(id) {
    this.service.getPostDetails(id).subscribe(data => {
      this.postDetails = data
      console.log(this.postDetails)
    })
  }

  getCommentDetails(id) {
    this.service.getCommentPost(id).subscribe(data => {
      this.comments = true;
      this.commentArray = data
    })
  }

  deleteComment(id) {
    var r = confirm("Are you sure want to delete!");
    if (r == true) {
      this.service.postDelete(id).subscribe(data => {
        this.router.navigate(["post", id]);

      })
    } else {
      console.log('ff')
    }

  }


}
