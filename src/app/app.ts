import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('Paris').subscribe({
      next: (data) => console.log('Données reçues :', data),
      error: (err) => console.error('Erreur :', err)
    });
  }
}
