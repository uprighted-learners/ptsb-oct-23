//
// & Lesson: Objects
// * Everything in Javascript's data types family is technically an object. This is specifically learning the object type.
//

//
// ? Basics:
// * - Container for values in an _almost_ JSON format
// * - Denoted by { }
// * - Not indexable and order is not guaranteed like arrays
//

//
// ? Data/Methods:
// * Stored as properties in key/value pairs and has objects has its' own set of built-in methods just like an array does.
// * Values can be any valid Javascript type including functions.
// * -- someObject.{myProperty}    |  Gives the value of myProperty in the object (more access ways below)
// * -- someObject.{someMethod}()  |  Access/run a method on the object
//

//
// ? Built-in methods and custom can be added, accessed, chained, and executed
// * -- someObject.hasOwnProperty()                   |  Built-in method, is executed
// * -- someObject.myCustomMethod()                   |  Custom, is executed
// * -- someObject.myCustomMethod                     |  Custom, is accessed
// * -- someObject.hasOwnProperty().myCustomMethod()  |  Chaining, is running multiple methods on the same object, the object is returned from each method to the next
//

//
// ? Docs:
// * Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// * JSON    - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
//

/////////////////////////

//
// & Part #1:
//

// ? Creating Object Literals
// Object created via object literal (more common)
const cars = {
  // Properties are in objects and a property is a key/value pair
  // key: value,
  make: 'BMW',
  model: 'M6',
  year: 2015,
};

console.log(cars);

// Object created via constructor, pass the object to it
// Key/value pairs are done the same way
const cars = new Object({
  // Properties are on objects and a property is a key/value pair
  // key: value,
  make: 'BMW',
  model: 'M6',
  year: 2015,
});

console.log(cars);

// Add/change properties to objects with dot and bracket notation styles
const cars = {
  make: 'BMW',
  model: 'M6',
};

// ? Accessing objects - dot notation (more common)
const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
};

// Use a period after an object to access a property
console.log(cars.make); // Get value of the make property
console.log(cars.features.airCondition); // Nested objects, get value of the airCondition property

console.log(cars.mileage); // Returns undefined because does not exist
console.log(cars.mileage.total); // Errors because total is being called on the mileage property that doesnt exist

// ? Accessing objects - bracket notation
// Use a bracket and pass a string to access a property
console.log(cars['make']); // Get value of the make property
console.log(cars['features']['airCondition']); // Nested objects, get value of the airCondition property

console.log(cars['mileage']); // Returns undefined because does not exist
console.log(cars['mileage']['total']); // Errors because total is being called on the mileage property that doesnt exist

// Are objects like arrays? Nope. They can't be access by indexes.
console.log(cars[0]); // Returns undefined

// But... if a key was 0, you could access it. It looks like an array and index.
// It's not. It's the key for that property.
const cars = {
  0: ['airCondition', 'steeringWheel'],
  1: ['heat', 'cold'],
};

console.log(cars[0]); // Returns airCondition/steeringWheel array
console.log(cars[1]); // Returns heat/cold array

// ? Add/Change/Delete properties
const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
};

// * Dot notation style (more common)
// Remember that adding or updating a property is similar to creating a variable and assigning a value to it no matter which style you use
// Add new property dot notation style - year
cars.year = 2015; // Add
console.log(cars);

// Update existing property dot notation style - year
cars.year = 2016; // Change
console.log(cars);

// * Bracket notation style (less common except special use cases)
// Add new property bracket notation style - color
cars['color'] = 'grey'; // Add
console.log(cars);

// Update existing property bracket notation style - color
cars['color'] = 'blue'; // Change
console.log(cars);

// This errors because it's referencing a non-existant color variable
cars[color] = 'blue'; // Error
cars['color'] = 'blue'; // Works, passed a string instead

// * Mixing notations
// Remember to focus on consistency unless there is a specific reason to have both, these both work though!
// The remainder of the lesson will be using dot notation (minus one portion)
console.log(cars.feature[airCondition]);
console.log(cars[features].airCondition);

// * Delete properties
// Writing a delete is not as similar of a syntax to many of the other Javascript features you've seen or will
// Pass a valid key to a property on the object starting with delete before it
delete cars.year;
delete cars.color;

delete cars.cat; // This will not doing anything but it also will not error or warn you

/////////////////////////

// & Challenge #1:
// - Create a new object with 3 properties, separately add a new property
// - Nest an array with 1 object in your object with 2 properties
// - Delete one of the properties in your array's nested object using dot notation and bracket for the other

// ! Answer
// ! Your answer here

/////////////////////////

// ? Looping over objects
const cars = {
  make: 'BMW',
  model: 'M6',
  features: {
    airCondition: true,
    steeringWheel: false,
  },
  wheels: [1, 2, 3, 4],
};

// * For/in loop
// Loop on the overall object
for (const property in cars) {
  console.log('Property key: ', property);
  console.log('Property value: ', cars[property]); // Pass in the property similar to how we pass index when looping arrays
  // What is happening during the loop: cars[make] and gets its' value, cars[model], cars[features], etc.
}

// Loop nested object in object
for (const feature in cars.features) {
  console.log('Property key: ', feature);
  console.log('Property value: ', cars.features[feature]); // Pass in the property similar to how we pass index when looping arrays
}

// Loop nested array in object (normal array methods work since it's an array, ex: filter, map, etc.)
cars.wheels.forEach(function (wheelNumber) {
  console.log(wheelNumber);
});

/////////////////////////

// & Challenge #2:
// - Create a new object with a nested object
// - Nest another object inside the first nested object named "party" with the property "dinner" set to true and "friends" set to 9
// - Loop over your lowest nested object and log the key/value for only "friends"
//
// Extra credit
// - There is hard to read, use variables to simplify the code for readability
// - Use a ternary if you have not already

// ! Answer:
// ! Your answer here

/////////////////////////

// & Challenge #3:
// * Imagine Netflix storing information in their database about a show and its' seasons/episodes.
//
// Requirements:
// - Add season 3 including an episode count and episode info property
// - Don't change initial netflix object, create your own
// - The data structure should match the previous seasons design
// - Access and log your new season, number of episodes, and episode info (as an array) using 3 separate logs.
// - Use dot notation.
//
// Extra credit:
// - Add a totalSeasons property with a dynamic count value if more seasons were added
// -- This will require looking ahead to the object-methods.js lesson or exploring MDN for a method that can help us
// -- Come back to the extra credit later if unable to solve yet

let netflix = {
  id: 9,
  likes: 932,
  name: 'The Good Place',
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: 'Pilot' },
        { episode: 2, episodeName: 'Flying' },
        { episode: 3, episodeName: 'Tahani Al-Jamil' },
        { episode: 4, episodeName: 'Jason Mendoza' },
        { episode: 5, episodeName: 'Category 55 Emergency' },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: 'Everything is Great' },
        { episode: 2, episodeName: 'Dance Dance Resolution' },
        { episode: 3, episodeName: 'Team Cockroach' },
        { episode: 4, episodeName: 'Existential Crisis' },
        { episode: 5, episodeName: 'The Trolley Problem' },
      ],
    },
  },
  isAvailable: true,
};

// ! Answer
// ! Your answer here

/////////////////////////

//
// * Homework
// * Menu Order      - https://replit.com/team/ptsb-oct-2023/menu-order
// * GPA Calculator  - https://replit.com/team/ptsb-oct-2023/gpa-calculator
// * Tag Search      - https://replit.com/team/ptsb-oct-2023/tag-search (optional)
//
