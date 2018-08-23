import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Home {
  address: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>('http://localhost:8000/api/home');
  }
}
