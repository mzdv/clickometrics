import readline from 'readline';
import database from '../database';

export default function() {
    // let timer = {
    //     letter: 0,
    //     word: 0,
    //     shortSentence: 0,
    //     longSentence: 0
    // };

    let inputStream = readline.createInterface({
        input: process.stdin
    });

    inputStream.question('Please enter your name: ', (name) => {
        inputStream.close();

        readline.emitKeypressEvents(process.stdin);

        if (process.stdin.setRawMode) {
            process.stdin.setRawMode(true);
        } else {
            console.log('You aren\'t running from the terminal!');
            process.exit();
        }

        process.stdin.on('keypress', (key, data) => {
            console.log('Not yet implemented');
        });
    });
};