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
var sql = "INSERT INTO asiakkaat (nimi, osoite) VALUES ('Pulju', 'Koskikatu 3')";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 tietue lisätty");
});
});