import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component'
const routes: Routes = [
  {path:'radar', component:RadarChartComponent},
  {path:'pie', component:PieChartComponent},
  {path:'scatter', component: ScatterChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
