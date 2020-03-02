import { CourseService } from './course.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRouter: ActivatedRoute, private courseService : CourseService){}

  ngOnInit():void{
    this.courseService.retrieveById(+this.activatedRouter.snapshot.paramMap.get('id')).subscribe({
      next: course => {
        this.course =  course;
      },
      error: err => console.log('Error: ', err)

    })

  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Save: ', course),
      error: err => console.log('error: ', err)


    })
  }

}
