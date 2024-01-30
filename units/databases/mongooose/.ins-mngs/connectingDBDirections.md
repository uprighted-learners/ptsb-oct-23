# Connecting Our Server and Database

We need to start by first spinning up/creating a new Express server!

## Express

- Need a `package.json` file
  - run `npm init` or `npm init -y`
- Install Dependencies:
  - Express: `npm i express`
  - Mongoose: `npm i mongoose`
    - package that connects to MongoDB
    - [mongoose NPM Docs](https://www.npmjs.com/package/mongoose)
  - dotenv: `npm i dotenv`
  - DevDependency for nodemon: `npm install --save-dev nodemon`
    - (if not globally installed)
  - **NOTE**:
    - We can install multiple dependencies at once
    - ex: `npm i express mongoose dotenv`
- Entry point within `package.json`
  - `index.js` or `app.js`
- `.gitignore`
  - ignore files/folders that shouldn't be in a repo (/node_modules).

<br>

## .env

- Next create an .env file
- Contains constants that are specific for our environment
- Stores items that we don't want published
  - passwords, port numbers / deployment routes, keys
- Should be added to `.gitignore`
- Should have a sample version to communicate with team(for your dev team to reference).
  - `example.env`
- .env only holds text and renders it's values as strings

<br>

## app.js

- We need to create our boilerplate connection in app.js/index.js

```js
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const log = console.log;

app.listen(PORT, () => log(`Movie Server on Port: ${PORT}`));
```

<br>

## Mongo & Mongoose

- Need to connect to our database
  - Using **MongoDBCompass**, start compass to make sure it's running
  - Running address from Compass is what we make our .env value
  - This is a **stateful connection**
  - Once code is in app.js, run `nodemon` command in the terminal per usual

```js
const mongoose = require("mongoose");
const MONGO = process.env.MONGODB;

mongoose.connect(`${MONGO}/moviedb`);

const db = mongoose.connection;

db.once("open", () => log(`Connected: ${MONGO}`));
```

<br>

# Models

- Define what our database collection will look like.
  - A schema for each object being created.
  - `mongoose` establishes our schema.
  - In the root directory we will create a models folder hold all the models/schemas

Example of a users.model.js:

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // columns for our document
  firstName: {
    type: String, // What datatype this is expecting.
    required: true, // default is false.
  },
});

module.exports = mongoose.model("User", UserSchema);
```

- The models are reference used by our controllers so we have "directions" or a format for how we want the data to look/be built.

<br>

## Controllers

- Just like before with server construction, in the root directory we will create a controllers folder, here we build out our endpoints/routes with their CRUD methods.
- The only two new additions to working with the database:

  - We will require in the model associated with the endpoints.
    - Ex: ` const User = require('../models/users.model');`
  - Our CRUD method callback functions will need to use Async/Await
    - This is required by MongoDB

- Tip: Always first test and run the method with Postman and a simple console.log before referencing and saving to the database.
  - This can save you a ton of time and headaches if it's a route/endpoint issue versus a db error/issue.

```js
const router = require("express").Router();
const User = require("../models/users.model");

router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
    });
    const newUser = await user.save();
    res.status(200).json({
      user: newUser,
      message: "Success! User Created!",
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

module.exports = router;
```

<br>

## Refresh / Reload MongoDBCompass
