var readline = require('readline');
var database = require('../database');

var enrollment = function() {
    // var timer = {
    //     letter: 0,
    //     word: 0,
    //     shortSentence: 0,
    //     longSentence: 0
    // };

    var inputStream = readline.createInterface({
        input: process.stdin
    });

    inputStream.question('Please enter your name: ', function (name) {
        inputStream.close();

        readline.emitKeypressEvents(process.stdin);

        if (process.stdin.setRawMode) {
            process.stdin.setRawMode(true);
        } else {
            console.log('You aren\'t running from the terminal!');
            process.exit();
        }

        process.stdin.on('keypress', function (key, data) {
            console.log('Not yet implemented');
        });
    });
};

module.exports = enrollment;