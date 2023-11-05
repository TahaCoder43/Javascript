var sql = require('mysql')

var con = sql.createConnection({
    host: "localhost", 
    user: 'root',
    password: "js1p\/c#BT$@S(*)"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})