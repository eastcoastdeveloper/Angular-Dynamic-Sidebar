import { Component } from '@angular/core';
import * as data from './sidebar.json';
import { SidebarModel } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  data: any = data;
  result: SidebarModel[] = [];

  constructor() {
    for (let key in data.navitems) {
      if (data.navitems.hasOwnProperty(key)) {
        this.result.push(data.navitems[key]);
      }
    }

    /* Real World
    ** this._http.get<SidebarModel[]>("sidebar.json")
    ** .subscribe((res) => {
    **   this.result = res;
    ** });
    */
  }

  ddToggle(i:number) {
    this.result[i].menu = !this.result[i].menu;
    console.log(this.result[i].menu);
  }
}
