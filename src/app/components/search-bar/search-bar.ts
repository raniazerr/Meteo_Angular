import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  nomVille: string = '';
  erreurVille: string = '';

  constructor(private router: Router) {}
  
  rechercher() {
    if (!this.nomVille || this.nomVille.trim() === '') {
      this.erreurVille = 'Veuillez saisir une ville.';
      return;
    }
    this.erreurVille = '';

    this.router.navigate(['/weather', this.nomVille.trim()]);
  }
}