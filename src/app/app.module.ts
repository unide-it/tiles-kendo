import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartComponent } from './chart/chart.component';
import { ListComponent } from 'src/app/list/list.component';
import { TileDirective } from './tile.directive';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TileHeaderComponent } from './tile-header/tile-header.component';







@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ListComponent,
    TileDirective,
    TileHeaderComponent
  ],
	imports: [
		BrowserModule,
		LayoutModule,
		BrowserAnimationsModule,
		ButtonsModule,
		DialogsModule,
		InputsModule,
		FormsModule,
		DropDownsModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
