// 8. Fonction extrayant les valeurs d’un Set commençant par une chaîne donnée
export default function cleanSet(set, startString) {
    return [...set]
        .filter(value => value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');
}
