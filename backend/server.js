// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mysql = require('mysql');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var path = require('path');
//  var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

var pool =  mysql.createPool({
  host : 'us-cdbr-iron-east-03.cleardb.net',
  user : 'b9cf2fa959542a',
  password: 'e7d7506d',
  database: 'heroku_ea6a187d6041991'
});
var createTable = "CREATE TABLE IF NOT EXISTS user (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, pwd CHAR(32) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";
pool.getConnection(function(err, connection){
  //Create a table called person
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
      console.log('Table created!');
    }
  });

  connection.release();//release the connection
});

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
//  app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//  app.use(methodOverride());

// app.get('/', function(req, res) {
//   res.send(app/index.html);
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
