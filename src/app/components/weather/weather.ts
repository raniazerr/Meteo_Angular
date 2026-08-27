import { Component, input } from '@angular/core';
import { Weather as WeatherModel } from '../../models/weather';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  weather = input<WeatherModel>();
}
