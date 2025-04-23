# Python Variable Annotations

![Python](https://img.shields.io/badge/python-3.9-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Ce projet explore les annotations de type en Python 3, leur syntaxe et leur utilisation pour améliorer la lisibilité du code et détecter des erreurs potentielles avec des outils comme `mypy`.

## Objectifs d'apprentissage

À la fin de ce projet, vous serez capable d'expliquer sans l'aide de Google :

- Les annotations de type en Python 3
- Comment utiliser les annotations pour spécifier les signatures de fonctions et les types de variables
- Le concept de "duck typing"
- Comment valider votre code avec `mypy`

## Prérequis

- Python 3.9
- `mypy` (pour la vérification des types)
- `pycodestyle` (version 2.5.* pour la vérification du style)

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/Kevindecastro/holbertonschool-web_back_end.git
cd python_variable_annotations
```

2. Installez mypy pour vérifier les annotations :
```bash
pip3 install mypy
```

## Structure des fichiers

```
python_variable_annotations/
├── 0-add.py
├── 1-concat.py
├── 2-floor.py
├── 3-to_str.py
├── 4-define_variables.py
├── 5-sum_list.py
├── 6-sum_mixed_list.py
├── 7-to_kv.py
├── 8-make_multiplier.py
├── 9-element_length.py
└── README.md
```

## Tâches et Solutions

### Tâche 0 : Addition basique
**Fichier**: `0-add.py`  
Fonction annotée qui additionne deux floats.

### Tâche 1 : Concaténation de chaînes
**Fichier**: `1-concat.py`  
Fonction annotée qui concatène deux chaînes.

### Tâche 2 : Fonction floor
**Fichier**: `2-floor.py`  
Fonction annotée qui retourne la partie entière inférieure d'un float.

### Tâche 3 : Conversion en chaîne
**Fichier**: `3-to_str.py`  
Fonction annotée qui convertit un float en chaîne.

### Tâche 4 : Définition de variables
**Fichier**: `4-define_variables.py`  
Variables annotées avec différents types primitifs.

### Tâche 5 : Liste de floats
**Fichier**: `5-sum_list.py`  
Fonction annotée qui somme une liste de floats.

### Tâche 6 : Liste mixte
**Fichier**: `6-sum_mixed_list.py`  
Fonction annotée qui somme une liste contenant des entiers et des floats.

### Tâche 7 : Tuple avec carré
**Fichier**: `7-to_kv.py`  
Fonction annotée qui retourne un tuple contenant une chaîne et le carré d'un nombre.

### Tâche 8 : Fonction multiplicateur
**Fichier**: `8-make_multiplier.py`  
Fonction annotée qui retourne une fonction multipliant par un facteur.

### Tâche 9 : Duck typing
**Fichier**: `9-element_length.py`  
Annotation d'une fonction avec des types complexes (Iterable, Sequence).

## Vérification

1. Style PEP8 :
```bash
pycodestyle *.py
```

2. Vérification des types :
```bash
mypy *.py
```

3. Exécution des tests :
```bash
chmod +x *-main.py
./*-main.py
```

## Auteur

[Kevin de castro](https://github.com/Kevindecastro)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
