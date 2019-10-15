import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
      responsive: true,
    };
    public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData: ChartDataSets[] = [
  { data: [60,100,3216,165,15,126545,2.1,65, 21433, 13.24, 324.123], label: 'Series A' },
  { data: [321,321654.65465,3546.32,46.4,5654.8,4,54.65], label: 'Series B' }
];
  public radarChartType: ChartType = 'radar';
  constructor() { }
  ngOnInit() {}

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
}
