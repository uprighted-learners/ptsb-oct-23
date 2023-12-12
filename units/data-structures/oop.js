/*
    ? Object Oriented Programming (OOP)

    ? APIE

    * Abstraction
        * obfuscation of implementation details
    * Polymorphism
        * ability of using same constructor for different object instances
    * Inheritance
        * sharing of methods and properties
    * Encapsulation
        * dealing with scope
*/

// ? Abstraction

// let process = require("process")
// process.stdout.write("Example of NO abstraction")
console.log('Example of abstraction');

// ? Polymorphism

class Human {
  constructor(name) {
    this.name = name;
    this.species = 'Human';
  }

  eat() {
    return `${this.name} likes good food`;
  }
}

const brandon = new Human('Brandon');
const julia = new Human('Julia');

// ? Inheritance

class Teacher extends Human {
  constructor(name) {
    super(name);
    this.profession = 'Teacher';
  }
}

const paul = new Teacher('Paul');
console.log(paul.eat());

// ? Encapsulation

function maxsHouse() {
  const maxsInheritance = '1976 Porsche 911';
  console.log(maxsInheritance);
}
maxsHouse();

// console.log(brandonsInheritance) // ReferenceError -> encapsulated within a function
