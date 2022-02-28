import { DropdownModel } from 'src/app/shared/tile-header/dropdown.model';
import { EventEmitter } from '@angular/core';

export interface TileComponent {
  config: any;
  moreButtonItemClicked: EventEmitter<DropdownModel>;
}
