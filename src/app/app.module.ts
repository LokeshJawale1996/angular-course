import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgForDemoComponent } from './directive/ng-for-demo/ng-for-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    NgForDemoComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
