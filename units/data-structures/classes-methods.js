/*
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class BankAccount {
  constructor(name, ssn, balance) {
    this.bank = 'Chase';
    this.name = name;
    this.ssn = ssn;
    this.balance = balance;
  }

  // not everybody should not be able to do this
  generateAccountNumber() {
    return 100;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  // not everybody should be able to do it
  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}

const johnsBankAccount = new BankAccount('John', 12312312, 50000);
console.log(johnsBankAccount);
johnsBankAccount.withdraw(49999);
console.log(johnsBankAccount.balance);

/*
    ? Class Inheritance
    * extends a parent class with a child class
*/
// Extending is taking an original base class template and then expanding it with more capabilities
// Imagine our Bank class from above, there is likely many types of accounts (ie. big, medium, small)
// A smaller account may only have the ability to be used to say waive an overdraft fee
class MinorBankAccount extends BankAccount {
  constructor(name, ssn, balance, isMinor) {
    // allows us to access properties and methods of a parent class
    super(name, ssn, balance);
    this.isMinor = isMinor;
  }

  waiveOverdraft() {
    this.balance += 35;
  }
}

const bentley = new MinorAccount('Bentley', 111111111, 50, true);
console.log(bentley);
bentley.waiveOverdraft();
console.log(bentley);

/*
    ? Static Fields
    * typically properties that do not need to change as you create instances
    * do not require instantiation with a new operator
    * create an instance of our class through its method
*/
// Since a dog is always a pet we don't need to change it for each new Dog instance we create
// Notice that this isn't using a key/value with a colon
// Static fields must be the first thing in a class if they need to be declared
// Remember that classes are not objects but templates for them
// In a class this is how it expects the template to be designed vs what an object expects
class Dog {
  bio;
  type = 'pet';

  getType() {
    const typeObject = { type: this.type };
    return typeObject;
  }
}

// You can only use strings, numbers, falsy values (null, undefined), or nothing (see line #140)
// Objects with no value when assigning are undefined
const jesse = new Dog();
console.log(jesse);
console.log(jesse.bio); // Quick challenge - what does this return?
console.log(jesse.type);
console.log(jesse.getType());

jesse.bio = '13/10 she is a great doggo, bork bork - @wereatedogs';
console.log(jesse.bio);

/////////////////////////

// & Challenge 1
// What is the relation between the Dog class, type as "pet", and the new jesse instance?
// ! Answer: Your answer here

/////////////////////////

/*
  ? Private Fields
  * Syntax: ???
*/

// & Challenge #2
// Research private fields with Javascript classes
// Create a private field named type with a value of pet
// Create a new instance of Dog and change the private field value to something new
// What do you think happens when you run the code?
// What reasons might we want private properties?

// ! Answer
// !Your answer

/*
  ? Private Methods
*/
// Private methods are similar to private fields but give us the ability to protect a function
// Both private fields and methods can be called by the parent class
class Shape {
  // Static fields
  type;
  width = 5;
  height = 5;

  // Private field
  #secretBaseSize = 10;

  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  // Misc lesson
  // enableSecrets is an argument for this function like we've done before
  // You can set default values doing the below ensuring we never allow secrets available from the start
  // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
  getDimensions(enableSecrets = false) {
    if (!enableSecrets) {
      console.log('this is not the true size!');
      console.log(this.width + this.height);
    } else {
      console.log(
        'i can call #getTrueDimensions for you! true size below'
      );
      // I'm the circle below and can call this private method inside of my class
      const trueDimensions = this.#getTrueDimensions();
      console.log(trueDimensions);
    }
  }

  // Only the class can call on this private method and private field
  // It isn't uncommon to see underscore (_) used to prefix private methods to denote they are private, see additional note at bottom of this example
  // History - OOP static languages like Java made this very popular
  #getTrueDimensions() {
    return this.width + this.height + this.#secretBaseSize;
  }
}

const circle = new Shape('circle', 10, 10);
console.log(circle.#secretBaseSize);
circle.getTrueDimensions(); // Returns undefined
circle.#getTrueDimensions(); // Error

circle.getDimensions();
circle.getDimensions(true);

// Underscore (_) prefix for private methods
// Imagine I changed #getTrueDimensions to be #_getTrueDimensions
// Outside of this class, even though it still errors if called, this can be more clear denote easily its private incase you miss using the # symbol
class Shape {
  #getDimensions() {}
}

const circle = new Circle();
circle.getDimensions();

// VERSUS //
class Shape {
  #_getDimensions() {
    /* function code */
  }

  getDimensions() {
    // Oh hey, I see an underscore, this is private, I'm missing the # symbol
    this._getDimensions();
  }
}

const circle = new Circle();
// Oh hey, I see an underscore, this is private, I'm missing the # symbol
circle._getDimensions();

//
// ? Homework
// Cake Factory - https://replit.com/team/ptsb-oct-2023/cake-factory
//
