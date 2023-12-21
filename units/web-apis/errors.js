// ? Errors & Try/Catch
// Errors (aka something broke or functioned improperly) happens frequently in development. Generally we can leverage Javascript to produce code that manages potential errors and exposes them to us. Errors are another type of object.
// Similar to classes we can instantiate an error class creating an error object which can take a variety of arguments.
// Errors are also known primarily as exceptions.

// ! Note: When writing during the code-along or running this file, you will need to comment more lines out because errors will stop the application from running further.

// ? Arguments
// Error Docs on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
// & new Error()
// & new Error(message)
// new Error(message, options)
// new Error(message, fileName)
// new Error(message, fileName, lineNumber)

// Throwing errors using different arguments
// const error = new Error();
// console.log(error);

// Use it in a function
// const errorTwo = new Error('what the heck did i do');
// console.log(errorTwo);

// Challenge - throw an error when the function gets a pet that they dont have
// Message - You entered a pet you don't have!
// const getPets = (name) => {
// const pets = ['Spot', 'Ginny', 'Steve', 'X'];

// const matchedPets = pets.filter((pet) => pet === name);

// console.log(matchedPets);

// if (matchedPets.length === 0) {
//   throw new Error("You entered a pet you don't have!");
// }

// console.log(`I have this pet named: ${pets[0]}`);
// return pets;
//   throw new Error("You entered a pet you don't have!");
// };

// getPets('Dan');

// ? Try/Catch
// This can be found across many languages as a sort of "bubble" to "try" some code and if it errors, it will catch it.
// It will allow you to manage errors and possibly prevent your application from crashing.

// Updating the previous function example with a try/catch
function getPets() {
  try {
    // get some data example
    fetch('https://google.com');
    throw new Error('There was an issue getting your pets');
  } catch (err) {
    console.log(err);
    // retry getting the pet data because it errored
    fetch('https://google.com');
  }
}

getPets();

// Errors without throwing using try/catch
// In this example I tried to access a non-existant variable. Since the Javascript errors, even though I didn't throw, the error is passed down to the catch and can be looked at.
//

// You can also abstract your code into different areas and make the errors available all the same
//

// Works!
//

// As of later versions of Javascript, you can omit the arguments parenthesis if you'd like but it is not the best practice.
try {
  // run some code
} catch {
  // handle the error
}

// You will typically have an error handling tool that provides an API calling errors. The tool will then send recorded errors that allow you to setup alerts/data visualizations to see what's going on as your application runs. Imagine if you had 100 errors per second happening. It's good to throw them but we should be alerted about it so we can actively do something to fix it.
// Error handling is essential in good software design.

// Resources:
// Throw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// Errors Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error (
// ^ There are additional error types that can be more specific and useeful, see the left hand nav under "Related pages"
