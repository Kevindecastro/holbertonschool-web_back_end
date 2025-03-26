/* eslint-disable */
export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // Convertir l'objet en un nombre (retourne la taille)
    valueOf() {
        return this._size;
    }

    // Convertir l'objet en une chaîne (retourne l'emplacement)
    toString() {
        return this._location;
    }
}
