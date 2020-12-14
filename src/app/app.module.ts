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
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './share/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { BookComponent } from './component/book/book.component';
import {GalleriaModule} from 'primeng/galleria';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';

import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/restaurant.reducer';
import { TestComponent } from './component/test/test.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    BookComponent,
    TestComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    GalleriaModule,
    CalendarModule,
    FormsModule,
    DialogModule,
    StoreModule.forRoot({
      restaurant: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
