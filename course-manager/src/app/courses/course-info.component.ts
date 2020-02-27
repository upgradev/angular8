import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId: number;

  constructor(private activatedRouter: ActivatedRoute){}

  ngOnInit():void{
    this.courseId =  +this.activatedRouter.snapshot.paramMap.get('id');

  }

}
