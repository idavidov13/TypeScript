//////////////
//LSP THEORY//
//////////////
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ====== Client Code
function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(8);

area(rectangle); // 120
area(square); // 64

///////////////////
//LSP APPLICATION//
///////////////////

// Payment Processor
// Credit Card
// Debit Card
// PayPal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount $${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount $${amount}`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal Payments - Amount $${amount}`);
  }
}

class BitcoinProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Bitcoin Payments - Amount $${amount}`);
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let payPalProcessor = new PayPalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 50);
executePayment(payPalProcessor, 150);
