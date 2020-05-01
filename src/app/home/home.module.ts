import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { HomeRoutingModule } from './home-routing.module';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [ WorkComponent ]
})
export class HomeModule { }
