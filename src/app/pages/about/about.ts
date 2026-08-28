import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About { 
  
  projectName = 'Weather App';

  description =
    'Weather App est une application développée avec Angular permettant de rechercher la météo actuelle d’une ville grâce à l’API OpenWeather.';

  members = [
    {
      name: 'Rania ZERAMDINI',
      role: 'Recherche et formulaire'
    },
    {
      name: 'Nolan LEFEBVRE',
      role: 'API et Services'
    },
    {
      name: 'Thomas RIVOIRE ',
      role: 'Affichage des données météo'
    },
    {
      name: 'Warda MOUZDA',
      role: 'Développement de la page About'
    }
  ];

  technologies = [
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'OpenWeather API',
    'Postman',
    'Git & GitHub'
  ];
}

