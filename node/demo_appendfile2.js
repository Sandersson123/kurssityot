var fs = require('fs');

fs.appendFile('uusi.txt', ' Tässä on tekstiä.', function (err) {
if (err) throw err;
console.log('Päivitetty!');
});