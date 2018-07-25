import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Room {
  address: string;
  owner: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:8000/api/rooms');
  }

  getRoom(owner: string): Observable<Room> {
    return this.http.get<Room>('http://localhost:8000/api/rooms/' + owner);
  }

  insertRoom(room: Room): Observable<Room> {
    return this.http.post<Room>('http://localhost:8000/api/rooms/', room);
  }

  updateRoom(room: Room): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/rooms/' + room.owner, room);
  }

  deleteRoom(owner: string) {
    return this.http.delete('http://localhost:8000/api/rooms/' + owner);
  }
}
