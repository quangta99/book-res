import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';

import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import { HomeComponent } from './component/home/home.component';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    TabViewModule,
    CarouselModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
