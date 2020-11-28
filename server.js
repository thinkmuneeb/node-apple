// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/api');

// our default array of dreams
const dreams = [
  "GET end point: https://muneeb.glitch.me/ok",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

//now app will we able to understand json request
app.use(bodyParser.json())

//tell app to use our new routes
app.use(routes);

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

//test req
app.get('/ok',function(req,res){
  console.log('GET Request');
  res.send({name:'Muneeb'});
});

//test req 2
app.get('/ok2',function(req,res){
  console.log('GET Request');
  res.end();
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
