import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  getCount(): number {
    return this.drinks.length;
  }

  addDrink(drink: Drink): boolean {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
      return true;
    }
    return false;
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((d) => d.name === name);
    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    if (this.drinks.length === 0) return "";
    const longestDrink = this.drinks.reduce((prev, current) =>
      prev.volume > current.volume ? prev : current
    );
    return longestDrink.toString();
  }

  getCheapest(): string {
    if (this.drinks.length === 0) return "";
    const cheapestDrink = this.drinks.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    return cheapestDrink.toString();
  }

  buyDrink(name: string): string {
    const drink = this.drinks.find((d) => d.name === name);
    return drink ? drink.toString() : "";
  }

  report(): string {
    return `Drinks available: ${this.drinks
      .map((drink) => drink.toString())
      .join(" ")}`;
  }
}
