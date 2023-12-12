//
// & Lesson: Object Methods
//
// * Basics:
// * Functions that are built-in and can only be called on them (similar to how arrays have their own too)
// * Has access to the global scope and can reference itself using "this"
//

//
// & Part #2:
//

// ? Checking objects for a property
const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
  wheels: [1, 2, 3, 4],
};

if (cars.hasOwnProperty('features')) {
  console.log(
    'has features property and air condition is',
    cars.features.airCondition
  );
} else {
  console.log('no features property');
}

// Optional chaining is a shorthand property check that can be added along with the dot notation we learned in objects.js
// Place a question mark after a property or function and if its not there it returns undefined or null
// This prevents errors from throwing if a property that doesn't exist is attempted to be accessed
// Imagine a situation where a separate team changed something and now the data is not there, we can protect ourselves
console.log(cars.sunroof?.tinted); // Returns undefined
console.log(cars.sunroof?.tinted?.color); // Returns undefined
console.log(cars.sunroof?) // Invalid syntax ending on a question mark, returns error
console.log(cars.someCustomFunction?.()); // Checking for a function before running it, note the parentheses are after the ?., returns undefined

// ? More built-in object methods
// * Object.create()
// * Parameters: proto, propertiesObject
// Creates new object using an existing object as the prototype for the new one
const dog = {
  name: 'ralf',
  barks: true,
  sayName: function () {
    console.log(this.name);
  },
};

const pug = Object.create(dog);
pug.name = 'steve'; // Inherited properties can be overwritten
pug.sayName();

// Exists on pug but not dog object
pug.snorts = true;
console.log(dog.snorts); // Returns undefined
console.log(pug.snorts); // Returns true

// * Object.assign()
// * Parameters: target, source
// Creates a copy of all enumerable properties from one object to a new one
// Can combine with an empty object or one with properties already
const cars = { bmw: true }
const planes = { g4: true }
console.log(Object.assign(cars, planes)) // Returns { bmw: true, g4: true }

// If the target has matching keys with the incoming source those property's values will be updated
const vehicles = { bmw: true, g4: false }
const otherVehicles = { bmw: false, g4: true }
console.log(Object.assign(vehicles, otherVehicles)) // Returns { bmw: false, g4: true }

// * Object.keys()
// * Parameters: object
// Returns an array of strings for each property's key on the passed object
const cars = { bmw: true, cats: 3 }
console.log(Object.keys(cars))

// * Object.values()
// * Parameters: object
// Returns an array of the value for each property on the passed object
const cars = { bmw: true, cats: 3 }
console.log(Object.values(cars))

// ? Accessing objects using built-in methods to get arrays that you can run array methods on
// This is a common practice leveraging the arrays produced by methods like keys() or values()
// Traversing and using the values within an objects become much easier
const cars = { bmw: true, cats: 3 }
Object.keys(cars).forEach((key) => {
  console.log(key);
});

// ? Adding custom methods to objects
const car = {
  make: 'BMW',
  features: [],
  addFeature: function (feature, val) {
    console.log('adding new feature', feature, val)
    this.features[feature] = val
  },
};

console.log(car);
car.addFeature('heater', true);
car.addFeature('ac', false);

console.log(car);

// What happens if we tried calling car directly instead of using "this"? Why does this still work?
// The car const was defined in the global scope of this Javascript file therefore it can be called on
// But this is bad practice and can produce bugs or global pollution, use "this" to refer to the object when you are working inside of it
const car = {
  addFeature: function (feature, val) {
    car.features[feature] = val
  },
};

/////////////////////////

// & Challenge #1:
// - Build an object with an array of items and a method to remove items
// - Remove should look through the items list and remove the specific item
// - Log the original items list, remove one item, and log the list again with the change
//
// Extra credit
// - Throw an error log and stop the function from going further if an item is passed that is not in the list all

// ! Answer
// ! Your answer here

/////////////////////////

//
// & Part #3:
//

// ? Chaining object methods
// * Syntax: myObject.someFunction().someFunction2()
// Chaining is the ability to run methods one after another which is known as synchronous execution
// Imagine if you wanted to do a function like runProgram() but need to check if the program is ready first
const program = {
  isReady: false,
  getReadyStatus: function () {
    console.log(this.isReady);
  },
  runProgram: function () {
    console.log('running');
  },
};

// This throws an error of undefined properties on the object
// Why? The functions are on the object but getReadyStatus needs to make this instance of the object available for to the next function
program.getReadyStatus().runProgram();

// If we change each function to return this we can now chain them and run them in any order
const program = {
  isReady: false,
  getReadyStatus: function () {
    console.log(this.isReady);
    return this;
  },
  runProgram: function () {
    console.log('running');
    return this;
  },
};

program.getReadyStatus().runProgram(); // Returns false, running
program.runProgram().getReadyStatus(); // Returns running, false

/////////////////////////

// & Challenge #2:
// - Create an object with a boolean "status" property and a default value
// - Add a custom method to get the status that can be chained
// - Log the status boolean value when the method is called
// - Check the object property "status" exists and then call your custom get status method using chaining
//
// - Create a picture object with a status (default false)
// - Add two custom methods for getting the download status and another for changing it
// - Getting the status logs the current status and is chainable method
// - Changing the status logs it is changing and is chainable method
// - Check that the picture has the status property
// - If it has the property log that it does
// - Call your pictures custom methods and change the status to true + get the latest status using chaining

// ! Answer
// ! Your answer here

/////////////////////////

//
// * Homework
// * Menu Order      - https://replit.com/team/ptsb-oct-2023/menu-order
// * GPA Calculator  - https://replit.com/team/ptsb-oct-2023/gpa-calculator
// * Tag Search      - https://replit.com/team/ptsb-oct-2023/tag-search (optional)
//
