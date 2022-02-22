import { Component, OnInit } from '@angular/core';
import { TileComponent } from 'src/app/tile.component';
import { ListConfig } from 'src/app/list/list.config';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, TileComponent {
  public config!: ListConfig;

  constructor() { }

  ngOnInit(): void {
  }


}
