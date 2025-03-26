/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // Getter pour amount
    get amount() {
        return this._amount;
    }

    // Setter pour amount
    set amount(newAmount) {
        this._amount = newAmount;
    }

    // Getter pour currency
    get currency() {
        return this._currency;
    }

    // Setter pour currency
    set currency(newCurrency) {
        this._currency = newCurrency;
    }

    // Affichage complet du prix
    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    // Méthode statique pour la conversion du prix
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
