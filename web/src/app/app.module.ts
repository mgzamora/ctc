import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from './services/room.service';
import { HomeService } from './services/home.service';
import { HomeListComponent } from './components/home-list/home-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'homes', component: HomeListComponent },
  { path: 'home/:id', component: HomeListComponent },
  { path: '',
    redirectTo: '/homes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [
    RoomService, 
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
