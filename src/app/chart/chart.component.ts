import { Component, Input, OnInit } from '@angular/core';
import { TileComponent } from 'src/app/tile.component';
import { ChartConfig } from 'src/app/chart/chart.config';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, TileComponent {
  public config!: ChartConfig;

  constructor() { }

  ngOnInit(): void {
  }


}
