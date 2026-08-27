import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  private apiKey = environment.API_KEY;

  getWeather(city: string): Observable<Weather> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&lang=fr&units=metric`)
      .pipe(
        map(res => ({
          city: res.name,
          country: res.sys.country,
          temperature: res.main.temp,
          feelsLike: res.main.feels_like,
          description: res.weather[0].description,
          humidity: res.main.humidity,
          windSpeed: res.wind.speed,
          icon: res.weather[0].icon
        }))
      );
  }

   getForecast(city: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&lang=fr&units=metric`
    );
  }
}