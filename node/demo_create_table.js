var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "b16spyylampi",
password: "P4ssw0rd666",
database: "b16spyylampi"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
var sql = "CREATE TABLE asiakkaat (nimi VARCHAR(255), osoite VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Taulu luotu");
});
});