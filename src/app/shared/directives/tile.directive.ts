import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTile]'
})
export class TileDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
