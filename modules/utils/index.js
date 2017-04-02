const times = require('async').times;

let randomDataSource = function (databaseObject) {
    return databaseObject.data[Math.floor(Math.random() * 10)];
}

let gatherDataSources = function (databaseObject, inputStream, callback) {
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
}

let utils = {
    randomDataSource: randomDataSource,
    gatherDataSources: gatherDataSources
}

module.exports = utils;
