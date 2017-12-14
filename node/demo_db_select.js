var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "b16spyylampi",
password: "P4ssw0rd666",
database: "b16spyylampi"
});

con.connect(function(err) {
if (err) throw err;
con.query("SELECT * FROM asiakkaat", function (err, result, fields) {
if (err) throw err;
console.log(result);
});
});