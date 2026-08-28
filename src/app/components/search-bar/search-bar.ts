import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  nomVille: string = '';
  erreurVille: string = '';
  chargement: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}
  
  rechercher() {
    if (!this.nomVille || this.nomVille.trim() === '') {
      this.erreurVille = 'Veuillez saisir une ville.';
      return;
    }
    this.erreurVille = '';

    this.router.navigate(['/weather', this.nomVille.trim()]);
  }

  localiser(): void {
    this.chargement = true;
    this.erreurVille = '';

    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        this.http.get<any>(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        ).subscribe({
          next: data => {
            const ville = data.address.city || data.address.town || data.address.village;
            this.nomVille = ville;
            this.chargement = false;
            this.router.navigate(['/weather', this.nomVille.trim()]);
          },
          error: () => {
            this.chargement = false;
            this.erreurVille = "Impossible de récupérer la ville.";
          }
        });
      },
      () => {
        this.chargement = false;
        this.erreurVille = "Impossible d'accéder à votre position.";
      }
    );
  }
}