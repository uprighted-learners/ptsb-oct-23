const db = [
  { email: 'brandon@gmail.com', pwd: 'password123' },
  { email: 'julia@gmail.com', pwd: 'ilikespain123' },
  { email: 'dan@uprighted.com', pwd: 'password123' },
];

// Access/assign the current URL and the params array
let url = document.location.search;
let params = new URLSearchParams(url);
console.log(url);
console.log(params);

// Get the URL query parameters
let email = params.get('email');
let pwd = params.get('pwd');
console.log(email);
console.log(pwd);

const loginForm = document.getElementById('login-form');
const submitButton = document.getElementById('submit');
const output = document.getElementById('output');

// If query params, lets prefill the form to make it easier for the user
if (params.size > 0) {
  document.getElementById('email').value = email;
  document.getElementById('pwd').value = pwd;
}

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  let email = evt.target.form[0].value;
  let pwd = evt.target.form[1].value;
  console.log(email);
  console.log(pwd);

  const foundUser = db.filter((entry) => {
    return entry.email === email;
  });

  if (foundUser.length === 0) {
    output.textContent = 'No user found';
  } else {
    console.log(foundUser[0].pwd, pwd);
    if (foundUser[0].pwd === pwd) {
      output.textContent = 'Logged in';
    } else {
      output.textContent = 'Incorrect password';
    }
  }
});
