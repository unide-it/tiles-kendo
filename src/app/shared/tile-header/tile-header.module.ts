import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileHeaderComponent } from 'src/app/shared/tile-header/tile-header.component';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { TileLayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [
    TileHeaderComponent
  ],
  imports: [
    CommonModule,
    DropDownButtonModule,
    TileLayoutModule,
  ],
  exports: [
    TileHeaderComponent
  ]
})
export class TileHeaderModule { }
