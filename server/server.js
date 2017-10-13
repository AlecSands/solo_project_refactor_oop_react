var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
app.get('/', function(req, res) {
  console.log('request for index');
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
