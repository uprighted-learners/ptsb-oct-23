# Postman

An API client that allows us to create and read HTTP/s requests and responses.

- A testing environment that helps us use client facing requests when we don't have a client side built out.
  - Usually a full stack app is built server first in small dev groups because the server determines what the data looks like/how it's structured
- Basically used as sudo front end to test our server endpoints and database connection.
- A way for us to test APIs

[Postman Learning Center Docs](https://learning.postman.com/docs/introduction/overview/)

## Creating a Collection in Postman

Collections button is at the top right of the left side bar.

After clicking collections, we can create a new collection with the "+", our collection is like a folder for our API requests. We can rename/etc. by right clicking the three dots on the collection name.

- We can right click the Collection name, to add a new request
- We can then name the request and save it to use as reference for later
- Ctrl+S or the Floppy Disc icon and save button will save the request to the collection

## Setting the method in Postman

To set methods in Postman:

- In the top left of the request, the dropdown in front of the URL bar needs to be changed to the method matching our route.
- GET / POST / PATCH / PUT / DELETE

## Sending the Request via the URL

When calling to a local server, we typically will start our URL:

> `http://` + `localhost:PORT#`

Depending on the server routes, we would then add the needed routing and endpoint:

> `http://` + `localhost:PORT#` + `/user` + `/signup`

If the Request needs a JSON body (req.body):

1. Click the body button/tab under the URL address bar.
2. Choose the `raw` option radio button/dropdown (depending on width of Postman).
3. Change the dropdown to the right from `text` to `json`.
4. Build out a JSON object to satisfy the need properties for the endpoint (key value pairs).

<br>
<hr>
<br>

## Creating a **localstorage** item / Environment in Postman

Usually tokens or other session items will be stored in the browser's localstorage.

Postman also has the ability to do that via creating an **Environment**.

This will let us set Postman Variables for our requests that need them, like after implementing validate-session to store session tokens.

### **How to set up an Environment in Postman:**

1. On the far left navigation sidebar is the button labeled: `Environments`, please click that button.
2. That will open the Environments middle directory/navigation area. Click the `+` button to make a New Environment.
3. Name the environment (Movie_MongoDB Environment)
4. Set and double check the the variable values match what you need for your validate session (for what we primarily will use this for). There are fields for the name of the variable, it's type (default or secret = how the value is displayed in the Postman Environment), and initial value.
5. Click the save icon button at the top right!

### **Referencing that environment in a Request:**

1. Head back to your route where you want to add the environment (in class ex: our get all route).
2. At the very top right, to the right of where the Postman request tabs are located: click the dropdown titled "No Environment ⌄"
3. Change the dropdown to match your environment name (in class example: Movie_MongoDB Env)
4. Under the URL bar, click the "Headers" tab/button.
   - Note: When you first open the Headers section, there is an "eye" icon to hide or un-hide Postman's automatic headers, please "hide" them to make adding in the JWT easier visually.
   - Headers opens the field set to enter the key label and value.
5. Enter the key/label for the header: **Authorization**.
6. Enter the value by referencing the Environment variable name (in this ex: JWT).

Tah dah! Now anytime you need to send a request to a route that requires a JWT, you can just call on and inject the token like above!