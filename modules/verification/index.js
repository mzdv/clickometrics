const readline = require('readline');
const userData = require('../userData');
const database = require('../database');
const util = require('../utils');

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
        console.log('You aren`t running from the terminal!');
        process.exit();
    }

    inputStream.question(util.randomDataSource(database.verification), () => {
        inputStream.close();

        console.log('Verifying, please stand by');

        timer = {
            letter: timer.letter / counter.letter,
            word: timer.word / counter.word,
            sentence: timer.sentence / counters.sentence
        };

        let resultSet = {
            minDelta: {
                letter: Number.MAX_SAFE_INTEGER,
                word: Number.MAX_SAFE_INTEGER,
                sentence: Number.MAX_SAFE_INTEGER
            },
            minIndices: {
                letter: -1,
                word: -1,
                sentence: -1
            }
        };

        userData.map((entry, index) => {
            if (Math.abs(entry.letter - timer.letter) < minDelta.letter) {
                resultSet.minIndices.letter = index;
                resultSet.minDelta.letter = Math.abs(entry.letter - timer.letter);
            }
            if (Math.abs(entry.word - timer.word) < minDelta.word) {
                resultSet.minIndices.word = index;
                resultSet.minDelta.word = Math.abs(entry.word - timer.word);
            }
            if (Math.abs(entry.sentence - timer.sentence) < minDelta.sentence) {
                resultSet.minIndices.sentence = index;
                resultSet.minDelta.sentence = Math.abs(entry.sentence - timer.sentence);
            }
        });

        if (resultSet.minIndices.letter === resultSet.minIndices.word && resultSet.minIndices.word === resultSet.minIndices.sentence) {    // property of transitivity
            console.log('Got a full match with index ${resultSet.minIndices.letter} - name: ${userData[resultSet.minIndices.letter].name}\n');
        } else if(resultSet.minIndices.letter === resultSet.minIndices.word && resultSet.minIndices.letter !== resultSet.minIndices.sentence) {
            console.log('Got match on two indices ${resultSet.minIndices.letter} and ${resultSet.minIndices.word} - names ${userData[resultSet.minIndices.letter].name} and ${userData[resultSet.minIndices.word].name}\n');

            if (resultSet.minDelta.letter <= resultSet.minDelta.word) {
                console.log('Lowest delta belonging to ${userData[resultSet.minIndices.letter].name}, probably him.')
            } else {
                console.log('Lowest delta belonging to ${userData[resultSet.minIndices.word].name}, probably him.')
            }
        } else {
            console.log('Determination rule not extended yet, doing generic average to determine identity.\n');
            let averageOfInput = (resultSet.minDelta.letter + resultSet.minDelta.word + resultSet.minDelta.sentence) / 3;

            let genericMatcher = {
                matchIndex: -1,
                minAverage: Number.MAX_SAFE_INTEGER
            };

            userData.map((entry, index) => {
                if (Math.abs(entry.average - averageOfInput) < genericMatcher.minAverage) {
                    genericMatcher.matchIndex = index;
                    genericMatcher.minAverage = Math.abs(entry.average - averageOfInput);
                }
            });

            console.log('Closest match: ${userData[matchIndex].name} with average: ${userData[matchIndex].average}');
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
