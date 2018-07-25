import { Component } from '@angular/core';
import {RoomService, Room} from './services/room.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Room[];

  title = 'app';

  constructor(private roomService: RoomService,
              private http: HttpClient) {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getAllRooms().subscribe((data) => {this.rooms = data; console.log(this.rooms); } );
  }

}
