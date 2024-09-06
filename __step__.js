/**
 * 1. create a post api on server side
 * 2. from client side send data via post
 * 3. set fetch methods inside the fetch options (second parameter)
 * 4. options will have three things: methods, headers, body
 * 5. inside headers: "content-type": "application/json"
 * 6. data needs to be inside JSON.stringify(data) of body
 * 7. on the server side: use express.json() as a middleware
 */