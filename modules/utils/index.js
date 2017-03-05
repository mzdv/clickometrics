import times from 'async/times';

export function randomDataSource(databaseObject) {
    return databaseObject.data[Math.floor(Math.random() * 10)];
}

export default function (databaseObject, inputStream, callback) {
    times(7, function (n, next) {
        inputStream.question(randomDataSource(databaseObject), () => {
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
