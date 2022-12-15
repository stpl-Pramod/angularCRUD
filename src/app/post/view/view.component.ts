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
  media: any;
  constructor(public apiService: PostServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.viewIndexData();
  }
  viewIndexData() {
    this.id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(res=>{
      console.log(res);
    })
    console.log(this.id);
    this.apiService.find(27).subscribe((data)=>{
      this.media = data;
      
      console.log(this.media);
    })
   
  }
}
