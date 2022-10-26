import { HttpClient } from '@angular/common/http';
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

  constructor(private _http: HttpClient) {
    for (let key in data.navitems) {
      if (data.navitems.hasOwnProperty(key)) {
        this.result.push(data.navitems[key]);
      }
    }

    this._http.get<SidebarModel[]>('src/assets/sidebar.json').subscribe((res) => {
      this.result = res;
      console.log(this.result)
    });
  }

  ddToggle(i: number) {
    this.result[i].menu = !this.result[i].menu;
  }
}
