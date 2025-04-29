# Pagination

## 📚 Description

Ce projet a pour but d’implémenter différents types de pagination en Python pour une API REST. La pagination est essentielle pour gérer de grands ensembles de données efficacement et améliorer les performances et l’expérience utilisateur d’une application web.

Le fichier de données utilisé est `Popular_Baby_Names.csv`, contenant des prénoms populaires de bébés à New York.

---

## 🎯 Objectifs d'apprentissage

À la fin de ce projet, vous saurez :

- Paginer un dataset avec des paramètres simples `page` et `page_size`.
- Implémenter une pagination enrichie de métadonnées hypermedia (HATEOAS).
- Créer une pagination robuste aux suppressions d'éléments entre deux requêtes.

---

## 🧰 Technologies et Contraintes

- Environnement : Ubuntu 20.04 LTS
- Langage : Python 3.9
- Style de code : `pycodestyle` 2.5.*
- Tous les fichiers commencent par `#!/usr/bin/env python3` et se terminent par une ligne vide.
- Documentation requise pour tous les modules, fonctions et classes.
- Toutes les fonctions doivent être typées.

---

## 📁 Fichiers
```
| Fichier                         | Description |
|--------------------------------|-------------|
| `0-simple_helper_function.py`  | Fonction utilitaire `index_range` pour calculer la plage d’index d’une page. |
| `1-simple_pagination.py`       | Classe `Server` avec méthode `get_page` pour paginer les données. |
| `2-hypermedia_pagination.py`   | Ajout de la méthode `get_hyper` pour une pagination avec métadonnées (HATEOAS). |
| `3-hypermedia_del_pagination.py` | Implémente une pagination résiliente aux suppressions avec `get_hyper_index`. |
| `Popular_Baby_Names.csv`       | Fichier de données utilisé pour le projet. |
| `0-main.py` à `3-main.py`      | Fichiers de test pour chaque étape du projet. |
```
---

## 🧪 Exemples d’utilisation

### Exemple `get_page` :

```
server.get_page(1, 3)
# → Retourne les 3 premiers enregistrements
```
Exemple get_hyper :
```
server.get_hyper(2, 2)
# → {
#   'page_size': 2,
#   'page': 2,
#   'data': [...],
#   'next_page': 3,
#   'prev_page': 1,
#   'total_pages': 9709
# }
```
Exemple get_hyper_index (résilient aux suppressions) :
```
server.get_hyper_index(3, 2)
# → {
#   'index': 3,
#   'next_index': 5,
#   'page_size': 2,
#   'data': [...]
# }
```

✅ Bonnes pratiques
Vérifiez les types des arguments avec assert.

Traitez les cas limites (page hors bornes, suppression de données).

Factorisez votre code : réutilisez get_page dans get_hyper.

📌 Auteur
kevin de castro - Projet Holberton School - Web Back-end.
