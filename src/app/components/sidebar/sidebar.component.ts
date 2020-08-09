import { Component, OnInit } from '@angular/core';
import * as data from './sidebar.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  data:any = data;
  result:any = [];

  constructor() {
    for(let key in data.navitems){
      if(data.navitems.hasOwnProperty(key)){
        this.result.push(data.navitems[key])
      }
    }
  }

  ngOnInit(){}

  ddToggle(i){
   this.result[i].menu = !this.result[i].menu;
   console.log(this.result[i].menu)
  }
}
