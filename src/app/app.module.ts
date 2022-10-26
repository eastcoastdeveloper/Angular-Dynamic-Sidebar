import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutModule } from './modules/about/about.module';
import { AngularJSModule } from './modules/angularjs/angularjs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutModule,
    AngularJSModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
