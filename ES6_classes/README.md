# ES6 Classes

## Description

Le projet **ES6 Classes** consiste à comprendre et à mettre en œuvre des concepts avancés des classes en JavaScript, tels que l'héritage, les méthodes statiques, les getters et setters, ainsi que la gestion des métaprogrammes avec des symboles. À travers une série de tâches, vous apprendrez à implémenter des classes, à utiliser des méthodes et à comprendre les bonnes pratiques pour manipuler des classes en JavaScript moderne.

## Objectifs d'apprentissage

À la fin de ce projet, vous serez en mesure de :

- Définir une classe en JavaScript.
- Ajouter des méthodes à une classe.
- Ajouter des méthodes statiques à une classe.
- Étendre une classe à partir d'une autre.
- Comprendre et utiliser les métaprogrammes et les symboles.

## Prérequis

Avant de commencer ce projet, assurez-vous de comprendre les concepts suivants :

- Classes en JavaScript
- Héritage en JavaScript
- Getters et setters
- Méthodes statiques et d'instance
- Métaprogrammes et symboles

## Installation

### Prérequis techniques

- Ubuntu 20.04 LTS
- Node.js version 20.x.x et npm version 9.x.x
- Éditeurs autorisés : `vi`, `vim`, `emacs`, ou Visual Studio Code

### Étapes d'installation

1. Installez Node.js 20.x.x :
   ```bash
   curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Vérifiez les versions de Node.js et npm :
   ```bash
   nodejs -v
   npm -v
   ```

3. Installez les dépendances du projet :
   ```bash
   npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint
   ```

4. Assurez-vous que le fichier `package.json` est bien configuré et exécutez `npm install`.

## Structure du projet

Le projet se compose des fichiers suivants :

- **0-classroom.js** : Classe `ClassRoom`.
- **1-make_classrooms.js** : Fonction pour créer des objets `ClassRoom`.
- **2-hbtn_course.js** : Classe `HolbertonCourse` avec getters et setters.
- **3-currency.js** : Classe `Currency` avec méthode `displayFullCurrency`.
- **4-pricing.js** : Classe `Pricing` avec méthode `convertPrice`.
- **5-building.js** : Classe abstraite `Building`.
- **6-sky_high.js** : Classe `SkyHighBuilding` héritée de `Building`.
- **7-airport.js** : Classe `Airport` avec méthode `toString`.
- **8-hbtn_class.js** : Classe `HolbertonClass` avec cast vers `Number` et `String`.
- **9-hoisting.js** : Correction d'un problème de hoisting.
- **10-car.js** : Classe `Car` avec méthode `cloneCar`.

## Tests

Le projet utilise **Jest** pour les tests. Vous pouvez exécuter les tests avec la commande suivante :

```bash
npm run test
```

Pour exécuter tous les tests et vérifier le lint, utilisez :

```bash
npm run full-test
```

## Auteurs

Kevin De Castro : Étudiant à la Holberton School

## License

Ce projet est sous la licence MIT.
