import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseObjectComponent } from './course-object/course-object.component';
import { PlayerComponent } from './shared/player/player.component';



  const routes: Routes = [
    { path: '',redirectTo: '/shared/player',pathMatch: 'full'},
    
    { path: 'course', 
    component: CourseComponent ,
    },
    { path: 'course-object', 
    component: CourseObjectComponent ,
    },
    { path: 'shared/player', 
    component: PlayerComponent ,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
