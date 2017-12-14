var fs = require('fs');

fs.rename('uusi.txt', 'myrenamedfile.txt', function (err) {
if (err) throw err;
console.log('Tiedosto on nimetty uudestaan!');
});