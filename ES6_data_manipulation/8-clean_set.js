/* eslint-disable */
// 8. Fonction extrayant les valeurs d’un Set commençant par une chaîne donnée
export default function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string')
      return '';

    return Array.from(set)
        .filter(
            value => typeof value === 'string' && value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');
  }
 