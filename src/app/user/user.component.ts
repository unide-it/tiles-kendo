import { Component, OnInit } from '@angular/core';
import { TileComponent } from 'src/app/tile.component';
import { ListConfig } from 'src/app/user/list.config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, TileComponent {
  public config!: ListConfig;

  constructor() { }

  ngOnInit(): void {
  }


}
