import { CourseService } from "./course.service";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({

  templateUrl: "course-list.component.html"
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterBy: String;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      }, error: err => console.log('error: ', err)

    });

  }

  delete(id: number) : void{
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Delete with success');
        this.retrieveAll();
      },
      error: err => console.log('error: ', err)

    })
  }

  set filter(value: String) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }


}
