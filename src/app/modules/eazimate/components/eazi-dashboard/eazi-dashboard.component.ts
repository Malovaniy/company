import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEstimateDialogComponent } from '../../dialogs/add-estimate-dialog/add-estimate-dialog.component';
import { EazimateApiService } from '../../services/eazimate-api.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";  

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-eazi-dashboard',
  templateUrl: './eazi-dashboard.component.html',
  styleUrls: ['./eazi-dashboard.component.scss']
})
export class EaziDashboardComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: any;
  public chartOptionsSecond?: any;
  activeYear = 2021
  years = [2021, 2022, 2023]
  sammury: any = {}
  recaent: any = []
  constructor(
    private dialog: MatDialog,
    public api: EazimateApiService,
    private cdr: ChangeDetectorRef

  ) {
    this.chartOptionsSecond = {
      series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
      chart: {
      height: 350,
      type: 'bar',
      foreColor: '#8d8d8d',
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        show: true,
        style: {
          colors: '#8d8d8d',
          fontSize: '12px'
        },
      },
    },
    };
  }

  changeYear(year: number) {
    this.activeYear = year
    this.api?.getSammury(year).subscribe(e => {      
      this.sammury = e.data
      if (this.sammury) {          

          this.chartOptions = {
            series: [
              {
                name: 'Sent',
                data: this.sammury.chart?.sent
              },
              {
                name: 'Accepted',
                data: this.sammury.chart?.accepted
              },
              {
                name: 'Completed',
                data: this.sammury.chart?.completed
              }
            ],
            chart: {
              height: 300,
              foreColor: '#8d8d8d',
              type: 'area'
            },
            dataLabels: {
              
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              
            },
            xaxis: {
              type: 'datetime',
              labels: {
                show: true,
                style: {
                  colors: '#8d8d8d',
                  fontSize: '12px'
                },
              },
              categories: this.sammury.chart?.date
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              }, 
            },
          };    
      }
    })
  }
  getEstimate() {
    this.api.getAllRecaent().subscribe(e => {
      this.recaent = e
      this.cdr.detectChanges()
    })
  }

  ngOnInit(): void {
    this.getEstimate()
    this.changeYear(this.activeYear)

  }
  addEstimate() {
    let dialog = this.dialog.open(AddEstimateDialogComponent, {
      width: '50vw',
      data: this.recaent,
      panelClass: 'bg-color'
    })
    dialog.afterClosed().subscribe(e => {
      if(e){
        this.recaent.push(e)
      }
    })
  }

}
