import { Component, OnInit } from '@angular/core';
import {HomeService, Home} from '../../services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.less']
})
export class HomeListComponent {

  homes: Home[];

  constructor(private homeService: HomeService,
              private http: HttpClient) {
    this.getRooms();
  }

  getRooms() {
    this.homeService.getHomes().subscribe((data) => {this.homes = data; console.log(this.homes); } );
  }

}
