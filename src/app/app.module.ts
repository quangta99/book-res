import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { NavbarComponent } from './share/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './share/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { BookComponent } from './component/book/book.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { UserComponent } from './component/user/user.component';

import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PasswordModule} from 'primeng/password';
import { RecoveryComponent } from './component/recovery/recovery.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    BookComponent,
    AboutUsComponent,
    UserComponent,
    RecoveryComponent
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
    MessageModule,
    MessagesModule,
    HttpClientModule,
    ProgressSpinnerModule,
    PasswordModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
