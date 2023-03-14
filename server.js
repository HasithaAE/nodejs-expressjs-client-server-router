// server.js
// where your node app starts

// init project
const express = require('express');
const routes = require('./routes/routing');

const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());

// middleware for exposing data on req.body
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/views/index.html');
// });

// using routes middleware
app.use('/', routes);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
