// 3. Vending Machine

// Your task is to create a repository that stores drinks by creating the classes described below.

// Drink

// You need to create a class Drink with the following properties:

// · name – string

// · price - number

// · volume - number

// The class constructor should receive name, price and volume.

// Override the toString() method in the following format: "Name: {name}, Price: ${price}, Volume: {volume} ml"
// VendingMachine

// Create a class VendingMachine that has drinks (an array that stores the Drink entities). All entities inside the repository have the same properties. The VendingMachine class should have the following properties:

// · buttonCapacity - number

// · drinks – Drink[]

// · getCount - returns the number of drinks, available in the vending machine

// The class constructor should receive buttonCapacity, also it should initialize the drinks as an empty collection.

// Implement the following features:

// · Method addDrink(drink: Drink) – adds an entity to the collection of Drinks, if the capacity allows it.

// · Method removeDrink(name: string) – removes a drink by the given name, if such exists, and returns true if it is removed, otherwise – false

// · Method getLongest() – returns the Drink as string in the format of the overriden toString() method with the biggest value of volume property

// · Method getCheapest()– returns the Drink as string in the format of the overriden toString() method with the lowest value of price property

// · Method buyDrink(name: string) – returns a string in the format of the overriden toString() method

// · Method report() – returns a string in the following format:

// o "Drinks available: {Drink1} {Drink2} (…)"

// Constraints

// · The names of the drinks will be always unique.

// · You will always have drinks added before receiving methods, manipulating the drinks in the VendingMachine.

import { Drink } from "./Drink";
import { VendingMachine } from "./VendingMachine";

function main() {
  //Initialize the repository (VendingMachine)
  const vendingMachine = new VendingMachine(6);

  //Initialize Entity (Drink)
  const tea = new Drink("Tea", 1.5, 300);
  const coffee = new Drink("Coffee", 2.0, 120);
  const hotChocolate = new Drink("Hot Chocolate", 2.5, 200);
  const latte = new Drink("Latte", 3.5, 220);
  const cappuccino = new Drink("Cappuccino", 2.8, 180);
  const mocha = new Drink("Mocha", 2.1, 150);
  const herbalTea = new Drink("Herbal Tea", 1.75, 300);

  //Get Count
  console.log(vendingMachine.getCount());
  //0

  //Add Drinks
  vendingMachine.addDrink(tea);
  vendingMachine.addDrink(coffee);
  vendingMachine.addDrink(hotChocolate);
  vendingMachine.addDrink(latte);
  vendingMachine.addDrink(cappuccino);
  vendingMachine.addDrink(mocha);

  //Try to add drinks when the capacity is full
  vendingMachine.addDrink(herbalTea);

  //Get Count
  console.log(vendingMachine.getCount());
  //6

  //Remove Drink
  console.log(vendingMachine.removeDrink("Herbal Tea"));
  //false
  console.log(vendingMachine.removeDrink("Tea"));
  //true

  //Get Longest Drink
  console.log(vendingMachine.getLongest());
  //Name: Latte, Price: $3.5, Volume: 220 ml

  //Get Cheapest Drink
  console.log(vendingMachine.getCheapest());
  //Name: Coffee, Price: $2.0, Volume: 120 ml

  //Buy a specific Drink
  console.log(vendingMachine.buyDrink("Cappuccino"));
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml

  //Drinks Report
  console.log(vendingMachine.report());
  //Drinks available:
  //Name: Coffee, Price: $2.0, Volume: 120 ml
  //Name: Hot Chocolate, Price: $2.5, Volume: 200 ml
  //Name: Latte, Price: $3.5, Volume: 220 ml
  //Name: Cappuccino, Price: $2.8, Volume: 180 ml
  //Name: Mocha, Price: $2.1, Volume: 150 ml
}
main();
