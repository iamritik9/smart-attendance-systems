import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courses = [
    { name: 'Machine Learning', faculty: 'Dr. Sharma' },
    { name: 'Data Structures', faculty: 'Prof. Verma' },
  ];
}
