import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../home/home.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
