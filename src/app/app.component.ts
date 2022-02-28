import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TileDirective } from 'src/app/shared/directives/tile.directive';
import { TileItem } from 'src/app/_models/tile-item';
import { TileComponent } from 'src/app/tiles/tile.component';
import { ChartComponent } from 'src/app/tiles/chart/chart.component';
import { ListComponent } from 'src/app/tiles/list/list.component';
import { ListConfig } from 'src/app/tiles/list/list.config';
import { ChartConfig } from 'src/app/tiles/chart/chart.config';
import { StorageService } from 'src/app/_services/storage.service';
import { ActionName } from 'src/app/shared/tile-header/dropdown.model';

const GROUPS = 'groups';
const TILES_CHART = 'tiles_chart';
const TILES_LIST = 'tiles_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  public tiles: Array<TileItem<any>> = [];
  public currentIndex: number = 0;
  public groupDialog: boolean = false;
  public groups: Array<string> = [];
  public newGroupName: string = '';

  @ViewChildren(TileDirective, {read: TileDirective})
  public tileDirectives!: QueryList<TileDirective>;

  constructor(private storage: StorageService) {
  }

  public ngOnInit(): void {
    this.groups = this.storage.getFromStorage(GROUPS)?.split(',') || [];
  }

  public ngAfterViewInit(): void {
    this.tileDirectives.changes.subscribe((value: QueryList<TileDirective>) => {
      const directives: TileDirective[] = value.toArray();
      const tileItem = this.tiles[this.currentIndex];
      const componentRef = directives[this.currentIndex]
        .viewContainerRef
        .createComponent<TileComponent>(tileItem.component);
      componentRef.instance.config = tileItem.data;
      componentRef.changeDetectorRef.detectChanges();
      componentRef.instance.moreButtonItemClicked.subscribe((value) => {
        if (value.actionName === ActionName.REMOVE) {
          const index: number = this.tiles.findIndex((tile) => tile.data.id === value.tileId);
          this.tiles.splice(index, 1)
        }
      });
    });
  }

  public addList(): void {
    const conf: ListConfig = {
      title: 'sdfg',
      button3: true,
      col: this.getCol(this.tiles.length),
      id: Math.random().toString(36).slice(-6),
    };
    const tileItem: TileItem<ListConfig> = new TileItem<ListConfig>(ListComponent, conf);
    this.tiles.push(tileItem);
    this.storage.addToItem(TILES_LIST, JSON.stringify(conf));
    this.currentIndex = this.tiles.length - 1;
  }

  public addChart(): void {
    const conf = {
      button2: true,
      col: this.getCol(this.tiles.length),
      id: Math.random().toString(36).slice(-6),
    };
    const tileItem: TileItem<ChartConfig> = new TileItem(ChartComponent, conf);
    this.tiles.push(tileItem);
    this.storage.addToItem(TILES_CHART, JSON.stringify(conf));
    this.currentIndex = this.tiles.length - 1;
  }

  public getCol(i: number): number {
    return (i % 2) + 1;
  }

  public save(): void {
    this.groups.push(this.newGroupName);
    this.newGroupName = '';
    this.groupDialog = false;
    this.storage.saveToStorage(GROUPS, this.groups.toString());
  }
}
