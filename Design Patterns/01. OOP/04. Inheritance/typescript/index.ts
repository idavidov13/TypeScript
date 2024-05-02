//////////////////////
//INHERITANCE THEORY//
//////////////////////

class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "dog") {
    super(name);
  }
}

let myDog = new Dog("Max");
myDog.move(5);

///////////////////////////
//INHERITANCE APPLICATION//
///////////////////////////

// The base class Product which defines common properties for all products
class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`
    );
  }
}

// A derived class Book which extends the Product base class
class Book extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
    // Calls the constructor of the base class
  }

  display(): void {
    super.display();
    // Calls the display method from the base class
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

// A derived class Electronic which extends the Product base class
class Electronic extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
    // Calls the constructor of the base class
  }

  display(): void {
    super.display(); // Calls the display method from the base class
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

let book = new Book("1", 19.99, "A great book", "John Doe", "My Great Book");
book.display();

let electronic = new Electronic(
  "2",
  299.99,
  "A great laptop",
  "Dell",
  "XPS 15"
);
electronic.display();