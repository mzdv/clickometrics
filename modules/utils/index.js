import times from 'async/times';

let randomEnrollmentData = function (databaseObject) {
    return databaseObject.data[Math.floor(Math.random() * 10)];
};

export default function (databaseObject, inputStream, callback) {
    times(7, function (n, next) {
        inputStream.question(randomEnrollmentData(databaseObject), () => {
            next(err);
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            inputStream.close();
        }
    });
};
