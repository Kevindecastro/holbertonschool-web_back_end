const fs = require('node:fs');

/**
 * Lit un fichier CSV contenant une liste d'étudiants et affiche :
 * - Le nombre total d'étudiants
 * - Le nombre d'étudiants par filière
 * - La liste des prénoms d'étudiants par filière
 *
 * @param {string} path - Chemin vers le fichier CSV
 */
function countStudents(path) {
  try {
    // Lecture synchronisée du fichier et suppression des lignes vides
    const data = fs.readFileSync(path, 'utf8')
    .split('\n')
    .filter(line => line.trim() !== '');
    
    // Extraction des lignes de données
    const NUMBER_OF_STUDENTS = data.slice(1)
    .map(line => line.split(','))
    .filter(cols => cols.length >= 4);
    
    // Affichage du nombre total d'étudiants
    console.log(`Number of students: ${NUMBER_OF_STUDENTS.length}`);
    
    // Création d'un objet pour regrouper les étudiants par filière
    const fields = {};
    for (const [LIST_OF_FIRSTNAMES, , , FIELD] of NUMBER_OF_STUDENTS) {
        if (!fields[FIELD]) fields[FIELD] = [];
        fields[FIELD].push(LIST_OF_FIRSTNAMES);
    }
    // Affichage du nombre d'étudiants et de la liste des prénoms pour chaque filière
    for (const FIELD in fields) {
      console.log(`Number of students in ${FIELD}: ${fields[FIELD].length}. List: ${fields[FIELD].join(', ')}`);
    }

  } catch (err) {
    // Gestion des erreurs si le fichier ne peut pas être lu
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
