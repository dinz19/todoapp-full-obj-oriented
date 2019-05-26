import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';


const routes: Routes = 
[
  {
    path : 'tasks/:id',
    component : CompletedComponent
  }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
