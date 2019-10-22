import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseObjectComponent } from './course-object/course-object.component';
import { PlayerComponent } from './shared/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseObjectComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
