import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AboutRoutingModule,
  aboutRoutingComponents,
} from './about.routing.module';

@NgModule({
  declarations: [aboutRoutingComponents],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
