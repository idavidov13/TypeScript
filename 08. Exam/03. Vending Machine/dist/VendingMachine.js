"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            return true;
        }
        return false;
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        if (this.drinks.length === 0)
            return "";
        const longestDrink = this.drinks.reduce((prev, current) => prev.volume > current.volume ? prev : current);
        return longestDrink.toString();
    }
    getCheapest() {
        if (this.drinks.length === 0)
            return "";
        const cheapestDrink = this.drinks.reduce((prev, current) => prev.price < current.price ? prev : current);
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find((d) => d.name === name);
        return drink ? drink.toString() : "";
    }
    report() {
        return `Drinks available: ${this.drinks
            .map((drink) => drink.toString())
            .join(" ")}`;
    }
}
exports.VendingMachine = VendingMachine;
