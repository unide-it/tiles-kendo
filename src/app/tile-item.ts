import { Type } from '@angular/core';

export class TileItem<T> {
  constructor(public component: Type<any>, public data?: T) {}
}
