import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvailableBikesService {

  constructor(private http : HttpClient) { }

  availableBikesUrl = 'http://localhost:8080/api/v1/availablebikes';

  getAvailableBikes():Observable<any[]> {
    return this.http.get<any[]>(this.availableBikesUrl);
  }
}
