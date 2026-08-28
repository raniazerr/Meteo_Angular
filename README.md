# AngularMeteo

## Présentation

### Le projet

MétéoLive est un projet académique construit avec Angular. Il interroge l’API OpenWeatherMap pour afficher la météo d’une ville choisie par l’utilisateur, ainsi que les prévisions, ou bien la météo basée sur sa localisation actuelle.

### Les membres

Nous avons travaillé à quatre sur ce projet :

-   [Binti-Warda MOUZDA](https://github.com/bwmouzda-g)
-   [Rania Zeramdini](https://github.com/raniazerr)
-   [Nolan Lefebvre](https://github.com/NolanLefebvre)
-   [Thomas Rivoire](https://github.com/thomasr10)

### Les technologies

Pour ce projet nous avons utilisé les technologies suivantes : 

-   TypeScript
-   Angular
-   HTML / CSS
-   OpenWeather API
-   Postman

## Installation

### Cloner le dépôt GitHub

```bash
git clone https://github.com/raniazerr/Meteo_Angular.git
```

### Ouvrir le projet

```bash
cd Meteo_angular
```

```bash
code .
```

### Installer les dépendances

```bash
npm install
```
### Créer le dossier environments

```bash
ng g environments
```
Une fois le dossier créé, ajoutez votre clé API dans le dossier `/environment.development.ts` :

```
API_KEY: 'MON_API_KEY'
```

### Démarrer le serveur

```bash
ng serve --open
```

## Les fonctionnalités

## Fonctionnalités obligatoires

- ✅ Page d'accueil (`/home`) avec présentation de l'application et formulaire de recherche
- ✅ Formulaire de recherche (Reactive Forms) avec validation du champ ville obligatoire
- ✅ Routing Angular avec les routes `/home`, `/weather/:city` et `/about`
- ✅ Affichage des données météo (ville, pays, température, ressenti, description, humidité, vitesse du vent, icône)
- ✅ Intégration de l'API OpenWeather via un service Angular dédié (`weather.service.ts`)
- ✅ Gestion de l'état de l'application (ville, données météo, chargement, erreur)
- ✅ Découpage en composants (navigation, recherche, affichage météo, pages)
- ✅ Communication entre composants (`@Input`, `@Output`, services)
- ✅ Gestion des états de chargement et des erreurs (formulaire vide, ville introuvable, erreur API, erreur 429)

## Fonctionnalités supplémentaires

- 🌍 **Géolocalisation** — récupération automatique de la position de l'utilisateur pour afficher directement la météo de sa ville actuelle
- 📅 **Prévisions météo** — affichage des prévisions sur plusieurs jours via un second endpoint de l'API OpenWeather

## Architecture
```
src/app/
    ├── components/     → composants réutilisables (navbar, search, weather...)
    ├── models/         → interfaces / types TypeScript
    ├── pages/          → composants de pages (home, weather, about...)
    ├── services/       → services Angular (appels API, gestion d'état)
    ├── app.config.ts
    ├── app.routes.ts
    └── app.ts
```

## API

- **API utilisées ** : [OpenWeather](https://openweathermap.org/api) et [Nominatim](https://nominatim.openstreetmap.org)

- **Endpoint météo actuelle** : `GET https://api.openweathermap.org/data/2.5/weather?q={ville}&APPID={clé_api}`
- **Endpoint prévisions** : `GET https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&lang=fr&units=metric`
- **Données récupérées** : nom de la ville, pays, température, température ressentie, description météo, humidité, vitesse du vent, icône

- **Endpoint cordonnées d'une ville** : `GET https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
- **Données récupérées** : Longitude et Latitude de la ville


## Postman

Une collection Postman est fournie (`collection_postman`) et regroupe les requêtes suivantes :
- Current Weather (Paris, Lille, Tokyo)
- Forecast

Pour l'utiliser : importez le fichier de collection dans Postman, puis renseignez les variables d'environnement `{{base_url}}` et `{{api_key}}` avec votre propre clé OpenWeather.

## Difficultés rencontrées

**Gestion des conflits Git** — travaillant à quatre avec une branche `dev` et une branche par fonctionnalité, nous avons rencontré des conflits lors de la fusion de plusieurs branches développées en parallèle sur les mêmes fichiers. Cela nous a amenés à revoir notre organisation : passage par des pull requests systématiques avec relecture avant fusion, synchronisation plus fréquente avec `dev` pour limiter les divergences, et résolution manuelle des conflits en binôme lorsque nécessaire.

## Améliorations possibles

- Ajouter davantage de fonctionnalités (favoris, comparaison de villes, historique des recherches...)
- Retravailler et approfondir le style visuel de l'application (charte graphique plus poussée, animations, thème sombre plus abouti)