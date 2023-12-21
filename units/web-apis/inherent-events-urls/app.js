/*
    ? Forms
    * default behavior is to send a GET request to the action attr value
    * can be overriden using event.preventDefault()
    * name attr within html elements give data its properties

    ? URL's
    * Uniform Resource Locator
    * carries protocol, top domain, sub domain, route, and any queries
    * Query params are the data that comes from our form
    * Begin with ? symbol
    * Followed by key=value pair
    * Separated with & symbol
    * Example of our GET request
    * 127.0.0.1:4000/index.html?email=dan%40uprighted.com&pwd=password123
*/

// Break

let url = document.location.search;
let params = new URLSearchParams(url);
// console.log(url);
// console.log(params);

let email = params.get('email');
let pwd = params.get('pwd');
// console.log(email);
// console.log(pwd);

const loginBtn = document.getElementById('submit');
const outputStatus = document.getElementById('output');

if (params.size > 0) {
  document.getElementById('email').value = email;
  document.getElementById('pwd').value = pwd;
}

const db = [
  { email: 'brandon@gmail.com', pwd: 'password123' },
  { email: 'julia@gmail.com', pwd: 'ilikespain123' },
  { email: 'dan@uprighted.com', pwd: 'password123' },
];

loginBtn.addEventListener('click', (evt) => {
  // console.log('I was clicked!');
  // console.log(evt);
  // evt.preventDefault();
  // console.log(evt.target.form[0].value);
  // console.log(evt.target.form[1].value);
  //
  evt.preventDefault();
  let email = evt.target.form[0].value;
  let pwd = evt.target.form[1].value;
  // console.log(email, pwd);

  const foundUser = db.filter((user) => {
    // console.log(user);
    console.log(user.email, email);
    // console.log(user.pwd, pwd);
    if (user.email === email) {
      return user;
    }
  });

  console.log(foundUser);

  // update the output html with messages about the login
  // messages -
  // case 1: no user found
  // case 2: logged in
  // case 3: incorrect email or password
});
