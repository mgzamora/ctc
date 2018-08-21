import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './services/room.service';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RoomService, 
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
