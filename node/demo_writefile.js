var fs = require('fs');

fs.writeFile('uusi3.txt', 'Hello sisältönä!', function (err) {
if (err) throw err;
console.log('Tallessa!');
});