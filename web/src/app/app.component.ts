import { Component } from '@angular/core';
import {HomeService, Home} from './services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Home[];

  title = 'app';

  constructor(private homeService: HomeService,
              private http: HttpClient) {
    this.getRooms();
  }

  getRooms() {
    this.homeService.getHomes().subscribe((data) => {this.rooms = data; console.log(this.rooms); } );
  }

}
