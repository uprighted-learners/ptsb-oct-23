// Connects our .env file to our project
require("dotenv").config();
const express = require("express");
const app = express();
// Points to our environment file and puts the value of PORT from that variable into this PORT variable.
const PORT = process.env.PORT;
const log = console.log;

// -------------------- Controllers: ----------------------
const users = require("./controllers/user.controller");
const movies = require("./controllers/movie.controller");

// --------------------- Middleware: ----------------------
const validateSession = require("./middleware/validate-session");
// Adding cors() to handle the preflight request for us (something Postman did for us), this is part of our server middleware required and called in the app.js
const cors = require('cors');


// Require in the mongoose middleware, pulled/used from node_modules
const mongoose = require("mongoose");
// Create variable for our connection address variable from the .env
const MONGO = process.env.MONGODB;

/* 
Use middleware handled/made by mongoose: 
    - Helps us connect to our DB and create objects in it
    - Establishes connection route to the DB with our .env var (This is a stateful connection).
    - We establish/create our connection with the middleware/mongoose method: .connect()
    - Allows us to define the Collection we are targeting.

    * Doesn't display until there is a document within the collection.
*/
mongoose.connect(`${MONGO}/moviedb`);

// Create a variable that is an event listener to check if connected
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => log(`Connected: ${MONGO}`));

// Added to allow us to accept JSON data from the body of our client.
app.use(express.json());
// Allowing the app to use cors
app.use(cors());

// --------------------- Routes to Controllers -----------------------
// http://localhost:4000/user
app.use("/user", users);

// One way to implement validate session, directly in app.js:
// All routes below will require validation(logged in user w/ valid token) when used this way.
// app.use(validateSession);

// http://localhost:4000/movies
app.use("/movies", movies);

app.listen(PORT, () => log(`Movie Server on Port: ${PORT}`));
