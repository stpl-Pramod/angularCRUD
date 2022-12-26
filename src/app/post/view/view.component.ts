import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  postData: any;
  singleData: any;
  constructor(public apiService: PostServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.viewIndexData();
  }
  viewIndexData() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.apiService.find().subscribe((data:any)=>{
      this.postData = data.responseData.responseData;
      this.singleData = this.postData.filter((d1:any) => d1.mediaId == this.id);
    });
    // this.route.paramMap.subscribe((param:any)=>{
    //   console.log(+param.get('id'));
    //   this.pid = +param.get('id');
    //   this.apiService.find(this.pid-1).subscribe(res=>{
    //     console.log(res);
    //   })
    // })
  }
}
