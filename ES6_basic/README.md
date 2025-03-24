# ES6 Basics

## Description

Pour ce projet, nous attendons de vous que vous vous familiarisiez avec les concepts suivants :

**Logiciel Linter**

### Ressources

Lisez ou regardez :

- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
- Déclarations et instructions
- Fonctions fléchées
- Paramètres par défaut
- Paramètre rest
- Javascript ES6 — Itérables et Itérateurs

### Objectifs d'apprentissage

À la fin de ce projet, vous devez être capable d'expliquer à quelqu'un, sans l'aide de Google :

- Ce qu'est ES6
- Les nouvelles fonctionnalités introduites dans ES6
- La différence entre une constante et une variable
- Les variables à portée de bloc
- Les fonctions fléchées et les paramètres par défaut des fonctions
- Les paramètres de fonction rest et spread
- La syntaxe des chaînes de caractères dans ES6
- La création et les propriétés des objets dans ES6
- Les itérateurs et les boucles `for-of`

## Prérequis

### Général

- Tous vos fichiers seront interprétés/compilés sous Ubuntu 20.04 LTS avec Node.js 20.x.x et npm 9.x.x
- Éditeurs autorisés : vi, vim, emacs, Visual Studio Code
- Tous vos fichiers doivent se terminer par une nouvelle ligne
- Un fichier `README.md` est obligatoire à la racine du dossier du projet
- Votre code doit utiliser l'extension `.js`
- Votre code sera testé avec le framework de test Jest
- Votre code sera analysé avec le linter ESLint et des règles spécifiques que nous fournirons
- Toutes vos fonctions doivent être exportées

### Configuration

1. **Installer NodeJS 20.x.x**  
   Dans votre répertoire personnel :
   ```bash
   curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   $ nodejs -v  # v20.15.1
   $ npm -v     # 10.7.0
   ```

2. **Installer Jest, Babel et ESLint**  
   Dans votre répertoire de projet :
   ```bash
   npm install --save-dev jest
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   npm install --save-dev eslint
   npm install --save-dev @babel/node@^7.8.0
   ```

### Fichiers de configuration

Créez les 3 fichiers suivants (avec le contenu fourni) dans le répertoire de votre projet :

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

N'oubliez pas de lancer la commande `npm install` dans le terminal de votre répertoire de projet pour installer toutes les dépendances nécessaires.  
Ne poussez pas le dossier `node_modules` sur votre dépôt.

## Tâches

### 0. Const ou let ? (obligatoire)
Modifiez la fonction `taskFirst` pour instancier les variables avec `const` et `taskNext` pour instancier les variables avec `let`.

### 1. Portée de bloc (obligatoire)
Modifiez la fonction `taskBlock` pour que les variables ne soient pas écrasées à l'intérieur du bloc conditionnel.

### 2. Fonctions fléchées (obligatoire)
Réécrivez la fonction standard pour utiliser la syntaxe des fonctions fléchées d'ES6.

### 3. Paramètres par défaut (obligatoire)
Condensez l'intérieur de la fonction en une seule ligne sans changer le nom de chaque fonction/variable.

### 4. Syntaxe de paramètre rest pour les fonctions (obligatoire)
Modifiez la fonction pour qu'elle retourne le nombre d'arguments passés à la fonction en utilisant la syntaxe de paramètre rest.

### 5. Les merveilles de la syntaxe spread (obligatoire)
Utilisez la syntaxe spread pour concaténer deux tableaux et chaque caractère d'une chaîne.

### 6. Profitez des littéraux de gabarit (obligatoire)
Réécrivez la fonction `getSanFranciscoDescription` pour utiliser un littéral de gabarit afin de substituer les variables que vous avez définies.

### 7. Raccourci pour la valeur des propriétés d'objet (obligatoire)
Modifiez l'objet `budget` pour utiliser la syntaxe de raccourci pour la valeur des propriétés.

### 8. Pas besoin de créer des objets vides avant d'ajouter des propriétés (obligatoire)
Réécrivez la fonction `getBudgetForCurrentYear` pour utiliser les noms de propriétés calculées dans l'objet `budget`.

### 9. Méthodes d'ES6 pour les propriétés (obligatoire)
Réécrivez la fonction `getFullBudgetObject` pour utiliser les propriétés de méthode ES6 dans l'objet `fullBudget`.

### 10. Boucles For...of (obligatoire)
Réécrivez la fonction `appendToEachArrayValue` pour utiliser l'opérateur `for...of` d'ES6.

### 11. Itérateur (obligatoire)
Écrivez une fonction `createEmployeesObject` qui reçoit deux arguments : `departmentName` (chaîne) et `employees` (tableau de chaînes).

### 12. Créons un objet de rapport (obligatoire)
Écrivez une fonction `createReportObject` qui reçoit en argument `employeesList`, le retour de la fonction `createEmployeesObject`.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Kevindecastro/holbertonschool-web_back_end.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd ES6_basic
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer les tests

Pour tester votre code, utilisez la commande suivante :
```bash
npm run dev <nom_du_fichier>.js
```

## Auteurs

Kevin De Castro : Étudiant à la Holberton School

## License

Ce projet est sous la licence MIT.

---
