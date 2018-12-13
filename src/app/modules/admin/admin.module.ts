import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../auth.guard';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard],
})
export class AdminModule { 
  constructor() {
    console.log("AdminModule loaded");
  }
}
