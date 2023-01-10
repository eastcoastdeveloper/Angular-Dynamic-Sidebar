import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SidebarModel } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  result: SidebarModel[] = [];
  expandAll: boolean = false;

  constructor(private _http: HttpClient) {
    this._http.get<SidebarModel[]>('assets/sidebar.json').subscribe((res) => {
      this.result = res;
    });
  }

  ddToggle(i: number) {
    this.result[i].menu = !this.result[i].menu;
  }

  toggleAll() {
    this.expandAll = !this.expandAll;
    for (var i = 0; i < this.result.length; i++) {
      this.result[i].menu = this.expandAll;
    }
  }
}
