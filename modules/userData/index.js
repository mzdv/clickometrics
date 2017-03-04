var data = require('./userData.json');

var userData = {
    get: function() {
        return data;
    },
    set: function(name, letter, word, shortSentence, longSentence, average) {
        var result = null;

        data.push({
            name: name,
            letter: letter,
            word: word,
            shortSentence: shortSentence,
            longSentence: longSentence,
            average: average
        });

        fs.writeFile('userData.json', JSON.stringify(data), function (err) {
            if (err) {
                result = err;
            } else {
                result = 'User enrolled!'
            }
        });

        return result;
    }
};

module.exports = userData;