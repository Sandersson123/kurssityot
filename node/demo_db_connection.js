var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "b16spyylampi",
password: "P4ssw0rd666"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
});