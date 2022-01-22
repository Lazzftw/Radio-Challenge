import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {  map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stations } from 'src/app/models/stations.module';
@Injectable({
  providedIn: 'root'
})
export class StationsListService {

  constructor(public http: HttpClient) { }

  getStationsList(): Observable<Stations[]>{
    return this.http.get<Stations>(environment.apiUrl)
      .pipe(
        map((data:any) => {
          return data.radios;
        })
      )
  }
}
