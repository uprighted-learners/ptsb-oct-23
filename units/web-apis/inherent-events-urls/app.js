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
    * 127.0.0.1:4000/index.html?email=paul%40uprighted.com&pwd=dbLocal
*/

let url = document.location.search
console.log("URL String", url)
// Creates a Location object that sanitizes query parameters
let params = new URLSearchParams(url)
console.log(params)
// Utilize .get() method of the Location interface to access query values
let email = params.get("email")
let pwd = params.get("pwd")
console.log(email, pwd)

const btn = document.getElementById("submit")
const output = document.getElementById("output")

const db = [
    { email: "brandon@gmail.com", password: "password123" },
    { email: "julia@gmail.com", password: "ilikespain123" },
    { email: "paul@uprighted.com", password: "dbLocal" }
]

btn.addEventListener("click", evt => {
    evt.preventDefault()
    let email = evt.target.form[0].value
    let pwd = evt.target.form[1].value
    
    const foundUser = db.filter(entry => entry.email === email)
    
    if (foundUser.length === 0) {
        output.textContent = "No user found"
    } else {
        if (foundUser[0].password === pwd) {
            output.textContent = "Logged in"
        } else {
            output.textContent = "Incorrect password"
        }
    }

})

