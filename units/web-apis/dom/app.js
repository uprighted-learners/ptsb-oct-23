/*
    ? Document Object Model (DOM)
    * an object comprising the structure and content of an .html file

    ? Basic Structure:
    * Document
        * HTML
            * Head
                * Meta tags
                * Link tags
                * Title tag
                * ...and all of its content (text, attributes, comments)
            * Body
                * Nav
                * Header
                * h1's, img's, aside's, div's, and so on...
                * ...and all of their attributes and values
*/

// ? Displays entire document object
console.log(document);

/*
    ? Window vs Document vs Navigator vs History Objects
    * document -> outlines the file rendered
    * window -> handles browser-specific functions
    * navigator -> handles language and geolocation
    * history -> handles browser session history
*/

console.log(navigator.language);
console.log(history.state);
console.log(window.fullScreen);

// ? Creating our first element using DOM

// * 1. use .createElement method on a document object & pass your element argument of choice
let h1 = document.createElement('h1');
console.log(h1);

// * 2. modify .textContent property to change rendered text value
h1.textContent = 'Ralf is my dog, he sheds a lot';
h1.style.color = 'red';

// * 3. append the element we created & modified (child) to its parent element
document.body.appendChild(h1);

console.log(document.getElementsByTagName('li'));

/*
    ? Accessing elements using DOM
    * Elements can be accessed several different ways. Most common are:
    * getElementById()
    * getElementsByClassName() [HTMLCollection]
    * getElementsByTagName() [HTMLCollection]
    * querySelector()
    * querySelectorAll() [NodeList]
*/

/*
    ? getElementById()
    * returns the first instance of an id element
*/
document.getElementById('listTitle');

//

/*
    ? getElementsByClassName()
    * returns an HTML Collection of class instances
    * array-like object (cannot use array methods)
    * allows access to index, length, etc.
    * can be looped through
*/
document.getElementsByClassName('listItem');

//

// Accessing an instance of class list
// listItem[0].style.color = "rebeccapurple"

// ulToDo.style.color = "blue"
//
/*
    ? .getElementsByTagName()
    * just like above but for elements
*/

document.getElementByTagName('li');

/*
    ? .querySelector()
    * return the first instance of an element
    * access using tag name, id, and class names
    * MUST SPECIFY whether it's a tag, ., or #
    * ex: "nav" for element; ".nav" for class; "#nav" for id
*/

//

/*
    ? .querySelectorAll()
    * returns a NodeList of all instances of a class, id, or element(s)
    * allows the use of array methods to iterate over
*/

//

/*
    ! Challenge
    * Add a list item
    * Remove the 2nd item from the list
    * Change the add item button styles using the ID and text size 42px (use JS)
    * Extra Credit: Remove inline styles on add item, add a class, and style it in the separate CSS file
*/

// ! Add your answer here

/*
    ? HTMLCollection vs NodeList

    * HTMLCollection returns a list that is live
    * Live lists DO show newly created elements even after their lookup

    * NodeList returns a static list of elements
    * NodeLists DO NOT show newly created elements
*/

//

// ? Last element isn't red because NodeList is static
// for (i of nodeList) {
//     i.style.color = "red"
// }

// ? All elements are red because HTMLCollection is live
//
