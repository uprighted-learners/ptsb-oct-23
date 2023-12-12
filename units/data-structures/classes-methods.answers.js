// & Challenge 1
// What is the relation between the Dog class, type as "pet", and the new jesse instance?
// ! Answer: Dogs (in this example) are ALWAYS a pet and does not need to be changed. It is a static value for all Dogs and their instances.

// & Challenge #2
// Research private fields with Javascript classes
// Create a private field named type with a value of pet
// Create a new instance of Dog and change the private field value to something new
// What do you think happens when you run the code?
// What reasons might we want private properties?

// ! Answer
// !Your answer
const Dog = class {
  #type = 'pet';
  constructor() {}
};

const spot = new Dog();
spot.type = 'earth'; // Sets a new property that we dont want
spot.#type = 'earth'; // Returns error
