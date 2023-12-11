/* 
    ? Application Programming Interface (API)
    * a way for a client to communicate with the server
    * allows for HTTP request and response lifecycle
    * part of a RESTful architecture
    * REST - representational state transfer
    * Stateless, cacheable, layered system allow for req and res using:
        * CRUD: create, read, update, and delete
        * HTTP methods: POST, GET, PUT, DELETE
        * HTTP requests sent from the client
            * headers
            * body (POST, PUT)
            * query parameters (GET, DELETE)
        * HTTP response received from the server
            * headers
            * status code
            * contains payload
    */

/* 
    ? URL or URI
    * Uniform Resource Locator (Identifier)
    * address that allows us to access web resources
    * DNS (domain name) server resolves the url string into an IP address
    
    * http:// || https:// --> protocol type
    * www.google.com --> domain
        * can have subdomains (ex: gmail.google.com)
        * .com; .de; .pl; .co.uk --> top-level domains
        * domain == IP address (once resolved by DNS server) + port == socket
    * Port :80 for HTTP or :443 for HTTPS
    * Path
        * Location and structure of content within the resource
    * Query Parameters
        * map to key-value pairs within an object
        * begin with ?
        * separated by &
        * the property is assigned to value (ex: ?name=Paul&age=24)
        * usually does not ''
    * Anchor
        * id's that allow us to go to specific point in the document
        * ex: #footer will take you to an element with that id attr value
*/

/* 
    ? Fetch API
    * fetch is an asynchronous function
    * we don't know how long request-response lifecycle will take
    
    * 1. Fetch your resource and return promise
    * 2. Use .then resolver to catch fetch's return and assign to a parameter
    * 3. The parameter is part of a Response interface object
    * 4. Body of our response is inacessible. It's part of a ReadableStream object.
    * 5. Utilize Response interface's .json() method to read the stram
    * 6. .json() method returns a promise
    * 7. Resolve the epromise with one more .then() resolver
    * 8. Catch the return as a data parameter
*/

const url = "hxttps://pokeapi.co/api/v2/pokemon/"


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.results.forEach(pokemon => {
            let h3 = document.createElement("h3")
            h3.textContent = pokemon.name
            document.body.appendChild(h3)
        })
    })
    .catch(err => console.log(err))
    .then(() => console.log("Some code that runs after .catch() error handling"))

// ? Async Function Fetch

async function getData() {
    try {
        const res = await fetch(`${url}pikachu`)
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

// getData()