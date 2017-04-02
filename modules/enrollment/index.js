const series = require('async').series;
const readline = require('readline');

const database = require('../database');
const utils = require('../utils');
const userData = require('../userData');

module.exports = function () {
    let timer = {
        letter: 0,
        word: 0,
        sentence: 0
    };

    let startTimes = {
        letter: 0,
        word: 0,
        sentence: 0,
    };

    let counters = {
        letter: 0,
        word: 0,
        sentence: 0
    };

    let inputStream = readline.createInterface({
        input: process.stdin
    });

    readline.emitKeypressEvents(process.stdin);

    if (process.stdin.setRawMode) {
        process.stdin.setRawMode(true);
    } else {
        console.log('You aren\'t running from the terminal!');
        process.exit();
    }

    series([
        function (callback) {
            utils.gatherDataSources(database.shortSentences, inputStream, err => {
                if (err) {
                    callback(err);
                }
            });
        },
        function (callback) {
            utils.gatherDataSources(database.longSentences, inputStream, err => {
                if (err) {
                    callback(err);
                }
            });
        }
    ], function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Enrollment data acquisition done!\n');
            inputStream.question('What is your name? ', (name) => {
                console.log(userData.set(name, timer.letter / counters.letter, timer.word / counters.word, timer.sentence / counters.sentence));
            });
        }
    });

    process.stdin.on('keypress', (key, data) => {
        let currentTime = +new Date();

        if (data.sequence === '.') {
            timer.sentence += currentTime - startTimes.sentence;
            counters.sentence++;

            startTimes.sentence = +new Date();
        } else if (data.sequence === ' ') {
            timer.word += currentTime - startTimes.word;
            counters.word++;

            startTimes.word = +new Date();
        } else {
            timer.letter += currentTime - startTimes.letter;
            counters.letter++;

            startTimes.letter = +new Date();
        }
    });
};
