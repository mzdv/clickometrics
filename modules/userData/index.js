import data from './userData.json';

export default userData = {
    get: function() {
        return data;
    },
    set: function(name, letter, word, sentence) {
        let result = null;

        data.push({
            name: name,
            letter: letter,
            word: word,
            sentence: sentence,
            average: (name + letter + word + sentence) / 4
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
