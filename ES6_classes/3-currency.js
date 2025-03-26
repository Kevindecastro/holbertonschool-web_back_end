/* eslint-disable */
export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    // Getter pour code
    get code() {
        return this._code;
    }

    // Setter pour code
    set code(newCode) {
        this._code = newCode;
    }

    // Getter pour name
    get name() {
        return this._name;
    }

    // Setter pour name
    set name(newName) {
        this._name = newName;
    }

    // Affichage complet de la monnaie
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
