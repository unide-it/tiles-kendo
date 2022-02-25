import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileDirective } from 'src/app/shared/directives/tile.directive';



@NgModule({
  declarations: [TileDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TileDirective
  ]
})
export class DirectivesModule { }
