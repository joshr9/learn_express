var express = require('express'),
  app = express();

var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];



// WHEN the app loads for the first time, register "ejs" as the templating language
// http://www.embeddedjs.com/
app.set('view engine', 'ejs');

// WHEN a user visits the homepage
app.get('/', function(req, res){
  // THEN read the file named index.ejs, and do some text replacing
  // such that <%= name %> becomes "Elie"
  res.render('index', {name: "Josh"});
});

// WHEN a user goes to the homepage
app.get("/", function (req, res) {
  // THEN send back a response with "Hello World"
  res.send("Hello World");
});

// WHEN a user goes to http://localhost:3000/vegetables
app.get("/vegetables", function (req, res) {
  //THEN send back a response with the veggies
  res.send(vegetables.join(", "));
});

// WHEN a users goes to the /meaning-of-life path
app.get("/meaning-of-life", function (req, res) {
  // THEN send down a response with "42"
  res.send("42");
});

// WHEN someone visits /hello/john
// THEN set req.params to an object that looks like this: {name: "john"}
//
// WHEN someone visits /hello/sue
// THEN set req.params to an object that looks like this: {name: "sue"}
app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});

// WHEN someone visits /companies/apple/products/iphone
// THEN set req.params to an object that looks like this:
//    {company: "apple", productName: "iphone"}
app.get("/companies/:company/products/:productName", function (req, res) {
  res.send( req.params.company + " makes the " + req.params.productName );
});

// WHEN someone visits /greeting?name=Sue
// THEN set req.query to an object that looks like {name: "Sue"}
app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});

// WHEN someone visits /greeting?first=Joe&last=Jones
// THEN set req.query to an object that looks like {first: "Joe", last: "Jones"}
app.get("/greeting", function (req, res) {
  res.send("Hello, " + [req.query.first, req.query.last].join(" "));
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
