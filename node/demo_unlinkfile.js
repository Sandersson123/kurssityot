var fs = require('fs');

fs.unlink('uusi2.txt', function (err) {
if (err) throw err;
console.log('Tiedosto poistettu!');
});