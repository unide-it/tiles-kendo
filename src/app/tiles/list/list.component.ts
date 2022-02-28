import { Component, EventEmitter, OnInit } from '@angular/core';
import { TileComponent } from 'src/app/tiles/tile.component';
import { ListConfig } from 'src/app/tiles/list/list.config';
import { DropdownModel } from 'src/app/shared/tile-header/dropdown.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, TileComponent {
  public config!: ListConfig;
  public moreButtonItemClicked: EventEmitter<DropdownModel> = new EventEmitter<DropdownModel>();

  constructor() { }

  ngOnInit(): void {
  }

  public onMoreButtonClick(event: DropdownModel): void {
    event.tileId = this.config.id;
    this.moreButtonItemClicked.emit(event);
  }


}
