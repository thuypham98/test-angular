import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from "../shared/shared.module";

import { CustomerComponent } from "./customer.component";
import { HomeModule } from "../home/home.module";
import { CallCenterComponent } from './dialog/call-center/call-center.component';
@NgModule({
  declarations: [ CustomerComponent, CallCenterComponent ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    
  ]
})
export class CustomerModule { }
