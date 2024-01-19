// Destructuring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const user = {
  name: 'Dan',
  age: 34,
  location: 'Chicago',
}

console.log(user.name)
console.log(user.age)
console.log(user.location)
console.log(user.name)
console.log(user.age)
console.log(user.location)
console.log(user.name)
console.log(user.age)
console.log(user.location)

const { name, age, location } = user

console.log(name)
console.log(age)
console.log(location)
