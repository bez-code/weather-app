import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = 'c64d7bd83177022f0fb8389f136b1c9d';

  getWeather(city: string): Observable<Weather> {
    const option = new HttpParams()
      .set('unit', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params: option })
  }

}
