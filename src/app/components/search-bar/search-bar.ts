import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  nomVille: string = '';
  date: string = '';
  erreurVille: string = '';

  dateMin: string = new Date().toISOString().split('T')[0];
  dateMax: string = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  rechercher() {
    if (!this.nomVille || this.nomVille.trim() === '') {
      this.erreurVille = 'Veuillez saisir une ville.';
      return;
    }
    this.erreurVille = '';

  }
}