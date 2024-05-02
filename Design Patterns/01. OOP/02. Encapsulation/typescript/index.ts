//////////////////////
//ABSTRACTION THEORY//
//////////////////////

//Bank Account
//Depositing
//Withdrawing
//Balance - Hidden/Encapsulated

class BankAccount {
  private _balance: number;

  constructor(initialbalance: number) {
    this._balance = initialbalance;
  }

  //Getter to get balance of the bank account
  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Deposit Amount");
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Withdrawal Amount");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient Funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance:", myAccount.balance);

//////////////////////////////
//ENCAPSULATION IMPLEMENTATION//
//////////////////////////////

const now = new Date();
console.log("Current date and time:", now.toString());

const specificDate = new Date("2023-05-01T00:00:00");
console.log("Specific date:", specificDate.toString());

console.log("Current year:", now.getFullYear());
console.log("Current month (0-based):", now.getMonth());
console.log("Current date:", now.getDate());

now.setFullYear(2024);
console.log("Modified date:", now.toString());
