// Bring in JWT to access it's token methods/functionality
const jwt = require("jsonwebtoken");
// Bring in our User model to reference
const User = require("../models/user.model");


// Build our middleware function
const validateSession = async (req, res, next) => {
    // Middleware still has access to the request, response, and requires the next() function to move past it.
    //* remember the timeLog() helper within the ToDo_List

    try {
    //1. Take token provided by request object (headers.authorization)
    // Good idea to just check with a console.log that it's working
    const token = req.headers.authorization;
    // console.log(token);

    //2. Check the status of token. (expired?)
    // JWT .verify(string, secret)
    const decodedToken = await jwt.verify(token, process.env.JWT);
    // console.log(decodedToken);
    // Our decodedToken makes the user id and token exp available
    // { id: '64458c89442b331f409de387', iat: 1682279609, exp: 1682366009 }

    //3. Provide response - if valid, generate a variable that holds user info.
    // use the .findById() to check for user that matches token user id
    const user = await User.findById(decodedToken.id);
    if (!user) throw Error("User not found.");

    // Creating a new key within our req (request) object to store our user information
    req.user = user;

    return next(); // moves us onto our routes/endpoint

    } catch (err) {
        res.json({message: err.message});
    }
}

// Export the function
module.exports = validateSession;