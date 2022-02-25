import { Component, EventEmitter, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TileComponent } from 'src/app/tiles/tile.component';
import { ChartConfig } from 'src/app/tiles/chart/chart.config';
import { ActionName, DropdownModel } from 'src/app/shared/tile-header/dropdown.model';
import { TileDirective } from 'src/app/shared/directives/tile.directive';
import { ChartTileDirective } from 'src/app/tiles/chart/chart-tile.directive';
import { ChartWithSmileComponent } from 'src/app/tiles/chart/chart-with-smile/chart-with-smile.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, TileComponent {
  public config!: ChartConfig;
  public moreButtonItemClicked: EventEmitter<DropdownModel> = new EventEmitter<DropdownModel>();
  public dataButtons: DropdownModel[] = [
    {
      text: 'Remove',
      actionName: ActionName.REMOVE,
    },
    {
      text: 'Change with smiles',
      actionName: ActionName.SMILES,
    },
  ];

  @ViewChild(ChartTileDirective, {static: true, read: ChartTileDirective})
  public chartTileDirectives!: ChartTileDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onMoreButtonClick(event: DropdownModel): void {
    switch (event.actionName) {
      case ActionName.REMOVE:
        event.tileId = this.config.id;
        this.moreButtonItemClicked.emit(event);
        break;
      case ActionName.SMILES:
        this.chartTileDirectives.viewContainerRef.createComponent<ChartWithSmileComponent>(ChartWithSmileComponent)
        break;
    }

  }

}
