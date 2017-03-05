import series from 'async/series';
import readline from 'readline';

import database from '../database';
import gatherResponses from '../utils';
import userData from '../userData';

export default function () {
    let timer = {
        letter: 0,
        word: 0,
        shortSentence: 0,
        longSentence: 0
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
        gatherResponses(database.shortSentence, inputStream, callback),
        gatherResponses(database.longSentence, inputStream, callback)
    ], function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Enrollment data acquisition  done!\n');
            inputStream.question('What is your name? ', (name) => {
                userData.set(name, timer.letter, timer.word, timer.shortSentence, timer.longSentence)
            });
        }
    });

    process.stdin.on('keypress', (key, data) => {
        // logic to gather times
    });
};