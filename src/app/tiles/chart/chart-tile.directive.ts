import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChartTile]'
})
export class ChartTileDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
