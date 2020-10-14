# DataServer - Exercise

With middleware we can check, prepare and modify incoming data. 
BEFORE that data actually reaches a route!

That will become handy when we want do validation of incoming data & user authentication in the upcoming weeks.

So let's prepare for that right now...


## Setup a middleware + write our own

- Find a mini API with two routes in the given server.js file
- Install express and morgan please (in one go: `npm i express morgan`)

- Setup the middleware "morgan" in the API
  - Morgan will nicely log all requests made to our API. So we can easily associate all our console logs in the terminal to the route that wrote them. Makes debugging much easier...

- Test if the middleware works - by making a GET and a POST call with your favorite REST tool
  - You see the log message from morgan in the terminal? 
  - Perfect! Let's move on...

- Setup body parsing middleware as always... `app.use( .... ??? .... )`
- Write a middleware that logs the body for all incoming requests to the console
- Test to make a call to your POST route
  - Do you see the body printed in the terminal? 


### Bonus: Write me a "fullname" middleware
    
- The middleware should concatenate the fields "firstname" and "lastname" - if given in the bod - to a field "fullname"
  - But only do that if both "firstname" and "lastname" were sent to us
  - Add the field "fullname" to the request (=req) 
  
- Attach the fullname middleware to the POST route
- Console.log the fullname in the POST route (if exists)

- Testing: Make a POST call to your post route
  - Send in "firstname" and "lastname"
  - Check if the "fullname" is displayed in your backend terminal

