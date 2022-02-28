import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileHeaderModule } from 'src/app/shared/tile-header/tile-header.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TileHeaderModule,
    DirectivesModule
  ],
})
export class SharedModule { }
