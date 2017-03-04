var enrollment = require('./modules/enrollment');
var verification = require('./modules/verification');

if(process.argv[1]) {
    if (process.argv[1] === '--enroll' || process.argv[1] === '-e') {
        enrollment();
    } else if (process.argv[1] === '--verify' || process.argv[1] === '-v') {
        verification();
    } else {
        console.log('Whoops, unknown parameter.');
    }
} else {
    console.log('Whoops, no parameters.');
}




