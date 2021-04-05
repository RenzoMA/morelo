import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
