// Load express
const express = require("express");

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get("/", function (req, res) {
  res.send("<h1>Holaaaaa World!</h1>");
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log("Listening on port 3000");
});

// You Do 👉 Define Another Route (3 mins)
// Define another route that matches a request of GET /home
// and sends a text response of
// <h1>Home Page</h1>.

// Test it by browsing to
// localhost:3000/home.

app.get("/home", function (req, res) {
  res.send("<h1>Home Page</h1>");
});

app.get("/cars", function (req, res) {
  res.send("Here's a list of my cars...");
});

app.post("/cars", function (req, res) {
  res.send("Thanks for the new car!");
});
