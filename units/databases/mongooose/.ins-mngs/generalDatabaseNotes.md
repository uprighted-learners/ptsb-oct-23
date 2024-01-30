# Traditional Databases

Database:

- A collection of data stored in tables or documents.

- Sorts data by creating a **primary key (ID)** for each record (of data)
  - Records: data with/in rows of the table

### Two Main Types of Databases:

Relational:

    - Very similar to a table structure (like Excel or Google Sheets)
    - Have a strict structure
    - Tables can be linked using keys
    - Ex: SQL, PostgresSql, MySQL

Non-Relational:

    - Has 5 Types of Structure: document data store, column-oriented database, key-value store, document store, and graph database
    - Flexible Structure
    - Uses a Primary Key (ID) to give individuality to each document
    - Data is stored as documents containing JSON object
    - Ex: MongoDB, Apache Cassandra, Couchbase

<br><br>

# MongoDB

- Is a **Document Data Store**
- This is the database system we will be using.

| Mongo Terms                     | Relational Equivalent |
| ------------------------------- | --------------------- |
| Database                        | Database              |
| Collections                     | Tables                |
| Documents (stores data as JSON) | Records (Row of data) |

<br>

## MongoDBCompass

A GUI(Graphical User Interface) for working with MongoDB

- How to create a new collection:

  1. Open MongoDBCompass.
  2. Click "New connection +" button (on your first use, a New Connection form will already be open.)
  3. Click the "Connect" button (usually is green).
  4. This will take you to a new view where we can create or view databases:

  - Click on the **"+"** button next to the "Databases" label.

  5. Add a name for the Database and the Collection, then press the green "Create Database" button.
  6. You should now be able to see your new DB in the left sidebar.

- How to create a new document(record of data) using Compass:

  7.  Click the "ADD DATA" dropdown and select "Insert document".
  8.  Add some JSON and click "Insert".

- Notice our new document has been added to the DB
- An ID has been automatically created for it. (It's a randomized key so that this document could be referenced individually.)
- We can create our records in this fashion, or upload a file to quickly populate a collection.

<br>

# MERN Stack

- M: Mongo, our database
- E: Express, our server
- R: React, our frontend
- N: Node, everything in between

<br>

# Security

Encryption:

- Plain text passwords stored within a database is highly insecure.
- Encryption helps us provide protection to both users and databases

## Bcrypt

- `npm i bcrypt`
- dependency that handles encryption of data.
  - most commonly - passwords
- Uses hashing and salting to hide the password/value so it's nearly impossible to decrypt (hack/solve encryption)

Hashing:

- Hashing produces a one-way randomized string based off the plain text string provided.
  - Uses a hashing algorithm to change plain text into a set of various characters.
  - Uses `salting` as an extra layer of encryption.

Salting:

- Process of including a randomized string included within the hashing prior to being set to the database.
- This makes it unpredictable as to what the hashed value becomes.
- With bcrypt we can determine how many iterations the hashed value should be salted.
  - Currently 10 to 13 iterations are common for security.

example code:

```js
bcrypt.hashSync("abc123", 10);
```

- first param = password
- second param = number of times the password will be salted.

<br>

## JWT

- JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user.
- Is a token that is considered to allow access during a specific amount of time.

example code:

```js
const token = jwt.sign({ id: user._id }, "secret message", {
  expiresIn: 60 * 60 * 24,
});
```

`sign(payload, message, options)`

3 arguments:

- payload
  - In the sample we are using an object that details the id of the user. Typically details of the user to verify it's them.
- encrypt/decrypt message
  - Passed in as a string in the sample
  - Typically stored as a `.env` variable.
- Options sets (expiration details)
  - represents/details seconds or a strings describing a time span for the token to be valid/when to expire
    - ex: `"2 days"` or `"10h"`

<br>

# CRUD Methods w/ MongoDB

Just as we had endpoints that allowed us to preform CRUD methods on data going to our JSON file, we will be building the same routes **but** to affect data stored in the DB.

Mongoose and MongoDB provides us with methods ( .example() ) to make affecting data in the database possible and simple:

### .save()

- Allows us to take our model's new instance and store it in the database
- Most often used with our POST endpoint to create a data document in the DB.
- Saves the document(the object we just constructed with req.body) by inserting a new document into the database.
- [Mongoose Docs: .save()](https://mongoosejs.com/docs/api/document.html#document_Document-save)

### .findOne()

- Method used on a collection, ex: Movie.findOne()
- Used most often with GET endpoints for getting one item.
- Returns one document the satisfies the specified query criteria from the collection.
- It has 3 optional parameters, with the first being `query` which specifies how/what filtering to use for selection.
- When called with no parameters, it will return a single document from the collection.
- [MongoDB Docs: .findOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/)

### .find()

- Method used on a collection, ex: Movie.find()
- Used most often with GET endpoints for get all or get by type.
- Returns a cursor (a pointer to the result/documents so we can retrieve the documents) to the selected documents in a collection.
- Has 3 optional parameters, with the first being `query` which specifies how/what filtering to use for selection.
- When called with no parameters, returns all documents from a collection.
- [MongoDB Docs: .find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)

### .findOneAndUpdate()

- Method used on a collection, ex: Movie.findOneAndUpdate()
- Used most often with PUT or PATCH endpoints for updating documents in the DB.
- Updates a single document based on the filter and sort criteria.
- We care about using **these 3 parameters** (has many optional ones):
  - a filter query
  - an updated object
  - an object detailing a boolean value as to whether we want the updated document returned right away (allows us to view the updated document)
  - Ex: `const returnOption = {new: true};`
- [MongoDB Docs: .findOneAndUpdate()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/)

### .deleteOne()

- Method used on a collection, ex. Movie.deleteOne()
- Used with DELETE endpoint to delete documents in the DB.
- Removes a single document from a collection.
- Requires it's first parameter `filter` (has many optional ones):
  - Requires a query as its argument to specify the deletion criteria
- This will return back an object that holds a few values that we can assess:

  - Based off the key: deletedCount.
  - This provides back a numeric value as to how many records were deleted. (We can check this condition to create a conditional: If zero = false / otherwise provide a 200.)

- [MongoDB Docs: .deleteOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/)

<br>

> <br>
>
> ## PUT vs PATCH
>
> MongoDB handles using both PUT and PATCH very effectively.
>
> ### PUT
>
> - Considers the complete document being updated.
> - Used when needing to modify the document completely.
> - Can be used to update just one field within the document BUT can cause issues.
> - In short: PUT can work when updating one field (or key) within a document but may not be 100%. Used mainly to alter the whole document.
>
> ### PATCH
>
> - Considers individual fields within the Document.
> - Suggested to use when updating just a portion of the document instead of the entire data within it.
> - In short: PATCH isn't meant to alter the complete document but individual values within it.
>
> <br>
> <br>

<br>

# Adding Middleware to the Server

Middleware is essentially a function that accesses our request, response, and moves on to other aspects of our code(with the next functionality).

- Middleware can be customized to your project's needs.
- Middleware functions have 3 parameters in it's call stack: (request, response, next)
- In the Movie_MongoDB server we will use the middleware to build a way to validate a users session and tie movies added to their user id called: validate session.

## Validate Session

Validate Session is a middleware process that helps us (the sever/devs) verify if a user should be allowed to make various actions(CRUD) within the database.

- We can tie data together using the different documents Object ID (\_id key in DB) as a source/way to connect things so they belong to one another:

> | User Doc ID | Name       | Phone       | Email       |
> | ----------- | ---------- | ----------- | ----------- |
> | A           | Joe Schmoe | 555-555-555 | joe@me.com  |
> | B           | Jane Doe   | 555-555-555 | jane@me.com |
>
> | FoodOrder Doc ID | Meal             | Owner |
> | ---------------- | ---------------- | ----- |
> | 1                | Steak & Eggs     | A     |
> | 3                | Pancakes & Bacon | B     |
> | 2                | 3 Egg Breakfast  | B     |

- Another Ex: When a user logs into their social media account(Instagram, FB, Reddit), they should only be allowed to post, update, or delete their own records(photos, posts, user profile, etc).

### Our process:

1. Create a `middleware` folder and `validate-session.js` file
2. Build out the validate-session.js functionality

- Use our token assigned to the user as our quick key.
- Obtain and verify the token
- Respond as necessary depending on the token provided.

3. Update the code in our movie.model.js to include the user ID (so every movie will expect to have a user ID tied to it).
4. Export our validateSession function and import(require) it where necessary(app.js file _or_ individual routes).

> #### Two ways to do this^ (#4):
>
> Import validate session and add it to app.js file:
>
> - We can encompass a complete controller by requiring our validate session above the route itself.
> - This means ALL routes within any controllers below it will run this middleware function.
> - Remember JS still reading top to bottom so routes below validateSession need a user to be logged in before movie endpoints can be used.
>
> Import and add validate session directly in the route endpoints (movie.controller.js):
>
> - Validate session gets imported into the controller and passed as a second parameter in the CRUD routes.
> - It is completely project dependant if you want a whole controller to need to first validate the session (make sure a user is logged in) before a user can access endpoints.
> - Ex use case: This could make a site readable (GET routes), but not post-able/full CRUD unless a user is logged in... Could help define roles like a user vs an admin user's abilities... Etc.
>


5. Update all endpoints that need to tie together the two documents (Ex. User and Movie)
