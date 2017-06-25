// http://www.codexpedia.com/javascript/nodejs-mysql-crud-example/

console.log('oi');
var mysql = require('mysql');

var pool =  mysql.createPool({
  host : 'us-cdbr-iron-east-03.cleardb.net',
  user : 'b9cf2fa959542a',
  password: 'e7d7506d',
  database: 'heroku_ea6a187d6041991'
});

var createTable = "CREATE TABLE user (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, pwd CHAR(32) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";
// http://w2.cleardb.net/faqs/#general_16
// var setInitialId = "ALTER TABLE user AUTO_INCREMENT = 0";
// var setIdIncrement = "SET @@auto_increment_increment=1";

var insertDefaultUser = 'INSERT INTO user (name, pwd) VALUE ("mendelson", "12345")';

var checkTable = 'SELECT 1 FROM user LIMIT 1';

// var readTable = 'SELECT * FROM employee';
//
// var updateRecord = 'UPDATE employee SET salary = ? WHERE name=?';
//
// var deleteRecord = 'DELETE FROM employee WHERE name=?';
//
// var dropTable = 'DROP table employee';

pool.getConnection(function(err, connection){
  //
  connection.query(checkTable, function(err,res){
    if(err)
    {
      console.log('Database not initialized.\nInitializing DB...\n');
      // createInitialDB(this);
    }
    else {
      console.log('Existing database found!\n');
    }
  });

  //Create a table called person
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
      console.log('Table created!');
    }
  });
  // connection.query(setInitialId,  function(err){
  //   if(err) throw err;
  //   else {
  //     console.log('Initial ID set!');
  //   }
  // });
  // connection.query(setIdIncrement,  function(err){
  //   if(err) throw err;
  //   else {
  //     console.log('ID increment set!');
  //   }
  // });

  //Insert a record.
  connection.query(insertDefaultUser, function(err,res){
    if(err) throw err;
    else {
      console.log('The default user has been added.');
    }
  });

  connection.release();//release the connection
});
