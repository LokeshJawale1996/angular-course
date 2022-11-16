import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
 
 @Input()
 course:Course | undefined;

 @Input()
 cardIndex:number | undefined;

 @Output()
 courseSelected=new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  onCourseViewd(){
    console.log('card component-Button  clicked...')
this.courseSelected.emit(this.course);
  }
  isImageAvailable(){
    return this.course && this.course.iconUrl;
  }

}
