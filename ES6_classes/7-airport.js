/* eslint-disable */
export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    // Redéfinition de toString() pour retourner le code
    toString() {
        return `[object ${this._code}]`;
    }
}
