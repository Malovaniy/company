import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EazimateRoutingModule } from './eazimate.routing.module';
import { SharedMaterialModule } from 'src/app/shared-module/shared/shared.module';
import { LayoutComponent } from './container/layout/layout.component';
import { CustomSwitcherComponent } from './components/custom-switcher/custom-switcher.component';
import { EaziDashboardComponent } from './components/eazi-dashboard/eazi-dashboard.component';
import { AddEstimateDialogComponent } from './dialogs/add-estimate-dialog/add-estimate-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    LayoutComponent,
    EaziDashboardComponent,
    AddEstimateDialogComponent,
    CustomSwitcherComponent
  ],
  imports: [
    CommonModule,
    EazimateRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    SharedMaterialModule
  ]
})
export class EazimateModule { }
