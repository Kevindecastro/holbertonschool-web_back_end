/* eslint-disable */
// Importation des fonctions signUpUser et uploadPhoto
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Définition de la fonction handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // On crée les deux promesses signUpUser et uploadPhoto
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // On utilise Promise.allSettled() pour attendre que les deux promesses soient résolues ou rejetées
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then(results => {
      // On retourne un tableau d'objets avec les résultats des promesses
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}
