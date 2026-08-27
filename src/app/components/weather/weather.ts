import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather as WeatherModel } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {

  private route = inject(ActivatedRoute);
  private weatherService = inject(WeatherService);

  weather = signal<WeatherModel | null>(null);

  // Prévisions météo
  forecast = signal<any[]>([]);

  loading = signal(false);
  error = signal('');

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('city');

    if (!city) {
      this.error.set('Veuillez saisir une ville.');
      return;
    }

    this.loading.set(true);

    // Météo actuelle
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weather.set(data);
        this.loading.set(false);
      },

      error: (err) => {
        this.loading.set(false);

        if (err.status === 404) {
          this.error.set('Ville introuvable.');
        } else if (err.status === 429) {
          this.error.set(
            'Trop de requêtes, veuillez réessayer dans quelques instants.'
          );
        } else {
          this.error.set(
            'Impossible de récupérer les données météo.'
          );
        }
      }
    });

    // Pour la prévisions météo
    this.weatherService.getForecast(city).subscribe({
      next: (data) => {
        this.forecast.set(data.list);
      },

      error: (err) => {
        console.error(
          'Impossible de récupérer les prévisions météo.',
          err
        );
      }
    });
  }
}