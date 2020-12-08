/*MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) */

var fs = require('fs');

fs.readFile('file.txt', 'utf8', function(error, data) {
    if (error) throw error;
    console.log(data);
});

