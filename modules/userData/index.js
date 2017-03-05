import data from './userData.json';

export default userData = {
    get: function() {
        return data;
    },
    set: function(name, letter, word, sentence, average) {
        let result = null;

        data.push({
            name: name,
            letter: letter,
            word: word,
            sentence: sentence,
            average: average
        });

        fs.writeFile('userData.json', JSON.stringify(data), (err) => {
            if (err) {
                result = err;
            } else {
                result = 'User enrolled!'
            }
        });

        return result;
    }
};
