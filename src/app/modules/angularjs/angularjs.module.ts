import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularJSRoutingModule,
  angularjsRoutingComponents,
} from './angularjs.routing.module';

@NgModule({
  declarations: [angularjsRoutingComponents],
  imports: [CommonModule, AngularJSRoutingModule],
})
export class AngularJSModule {}
