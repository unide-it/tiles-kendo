import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionName, DropdownModel } from 'src/app/shared/tile-header/dropdown.model';

@Component({
  selector: 'app-tile-header',
  templateUrl: './tile-header.component.html',
  styleUrls: ['./tile-header.component.scss'],
})
export class TileHeaderComponent implements OnInit {

  public buttonsData: DropdownModel[] = [{
    text: 'Remove',
    actionName: ActionName.REMOVE,
  }]

  @Input()
  public title: string | undefined;

  @Input()
  public data: DropdownModel[] = [];

  @Output()
  public moreButtonItemClicked: EventEmitter<DropdownModel> = new EventEmitter<DropdownModel>();

  ngOnInit(): void {
    this.buttonsData = this.buttonsData.concat(this.data);
  }

  public onItemClick(event: any): void {
    this.moreButtonItemClicked.emit(event);
  }
}
