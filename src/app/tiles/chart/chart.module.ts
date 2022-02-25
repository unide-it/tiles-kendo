import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from 'src/app/tiles/chart/chart.component';
import { TileHeaderModule } from 'src/app/shared/tile-header/tile-header.module';
import { LayoutModule, TileLayoutModule } from '@progress/kendo-angular-layout';
import { ButtonModule, ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartWithSmileComponent } from './chart-with-smile/chart-with-smile.component';
import { ChartTileDirective } from './chart-tile.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IconsModule } from '@progress/kendo-angular-icons';


@NgModule({
  declarations: [ChartComponent, ChartWithSmileComponent, ChartTileDirective],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DialogsModule,
    InputsModule,
    FormsModule,
    DropDownsModule,
    IconsModule,
    TileHeaderModule,
  ],
  exports: [ChartComponent],
})
export class ChartModule {
}