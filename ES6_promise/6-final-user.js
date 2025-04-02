// Importation des fonctions signUpUser et uploadPhoto
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Définition de la fonction handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Appel des deux fonctions et gestion des promesses avec allSettled
  return Promise.allSettled([
    signUpUser(firstName, lastName),  // Inscription de l'utilisateur
    uploadPhoto(fileName)             // Téléchargement de la photo
  ])
    .then(results => {
      // Retourne le tableau avec les objets {status, value}
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}
