var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(port, function(){
	console.log("listening on port " + port);
});

app.get('/', function(req, res) {
  res.render('index');
});