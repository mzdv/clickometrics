const enrollment = require('./modules/enrollment');
const verification = require('./modules/verification');


if(process.argv[2]) {
    if (process.argv[2] === '--enroll' || process.argv[2] === '-e') {
        enrollment();
    } else if (process.argv[2] === '--verify' || process.argv[2] === '-v') {
        verification();
    } else {
        console.log('Whoops, unknown parameter.');
    }
} else {
    console.log('Whoops, no parameters.');
}




