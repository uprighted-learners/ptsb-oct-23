const router = require("express").Router();
// We need to import our model so that we have access to the document schema (get directions on how to build the data)
const User = require("../models/user.model");
/* 
  Require in the bcrypt dependency by storing it in a variable.
  Bcrypt will be included in our controller --> add bcrypt in any file where we want encryption to take place.
*/
const bcrypt = require("bcrypt");
// Require in the jsonwebtoken dependency by storing it in a var per usual
const jwt = require("jsonwebtoken");
// Create a variable to hold the secret from our .env for the token
const SECRET = process.env.JWT;

// Create a function to show how our password is being used/encrypted (just a demo)
// const testingBcrypt = (password) => {
// Storing in the variable name encrypt the ability to use bcrypt's hashSync method to encrypt our "password"
//   let encrypt = bcrypt.hashSync(password, 13);
//   console.log("ENCRYPTED PASSWORD:", encrypt);
// };

// testingBcrypt("myPassword");
// testingBcrypt("myPassword");
// testingBcrypt("new_password123");

/* 
    ** IMPORTANT NOTE **
    It is required to use async/await with our callback functions per MongoDB.
        - It's a good idea regardless to do this simply because we are using request outside of our own workstation.

    We will build the rest of the endpoint/route with a request as response as we did in the last unit. Await/Async is the only new addition. 
*/

router.post("/signup", async (req, res) => {
  // res.send("Connected, hit signup endpoint!");

  try {
    // Creating a new object based off the Model Schema.
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      // password: req.body.password, // Should not store plain text passwords in the db
      // We want to pass in the password provided by the user, salt it 13 times, and add to db
      password: bcrypt.hashSync(req.body.password, 13),
    }); // using values from req.body to form our object.

    const newUser = await user.save(); // Writes to database. Returns a response - why it should be an "await".

    // Create a token using the sign method of jwt, (payload, message, exp)
    // The payload should be the user id, secret message should eventually be in .env
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: "1 day",
    });

    res.status(200).json({
      user: newUser,
      message: "Success! User Created!",
      token,
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

/* 
  --------------------------------------- LOGIN ENDPOINT -----------------------------------------
*/

// Login endpoints use the .post() method as well
// Endpoint: http://localhost:4000/user/login
/* 
  Request body: req.body
  {
    "email": "whoAmI@unknown.com",
    "password": "iAmJohnDoe"
  }
*/
router.post("/login", async (req, res) => {
  // res.send(req.body.email); // Used to test that endpoint is working

  try {
    //1. Capture data provided by user (request body), use obj destructuring (easy to grab key/values)
    const { email, password } = req.body;

    //2. Check database to see if email supplied exists
    // * .findOne() is a MongoDB method that accepts a query/filter as an argument. Returns an instance of a document(user JSON obj) that matches.
    // { email is key for what db is searching for : email = req.body.email from request}
    const user = await User.findOne({ email: email });
    console.log(user); // Check to see if .findOne is working, should see user in VSC terminal

    // Write an error to catch if no user matches, quick response if no user in DB
    if (!user) throw new Error("User not found.");

    //3. If email exists, consider if password matches (decrypt).
    // .compare() method from bcrypt take in 2 params (password from req.body, hashed password from DB)
    // Return a true or false value, compare(string, hashed) & return t/f
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch); // Check if .compare is working, will see in VSC terminal

    // Write an error to catch if password doesn't match, do not say if only password is wrong for security reasons
    if (!passwordMatch) throw new Error("Email or password does not match.");

    //4. After verified, provide a jwt token
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    //5. response status returned
    res.status(200).json({
      message: "Login successful!",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
});

module.exports = router;
