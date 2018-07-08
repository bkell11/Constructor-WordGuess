var Letter = require("./Letter.js");

var Word = function (newWord) {
    this.word = [];
    for (i = 0; i < newWord.length; i++) {
        this.word.push(new Letter(newWord[i]));
    };

    this.getCurrentWord = function () {
        var returnWord = "";

        for (i = 0; i < this.word.length; i++) {
            let letter = this.word[i].getLetter();
            returnWord.push(letter);
        }
        return returnWord;
    };
    this.checkWord = function (userguess) {
        for (i = 0; i < this.word.length; i++) {
            this.word[i].checkGuess(userguess);
        };
    };

};

module.exports = Word;