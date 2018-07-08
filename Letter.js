var Letter = function (letter) {
    this.letter = letter;
    this.isLetter = false;

    this.getLetter = function () {
        if (isLetter) {
            return this.letter;
        }
        else {
            return '_';
        }
    };

    this.checkGuess = function (userGuess) {
        if (userGuess == this.letter) {
            this.isLetter = true;
        }
    };
};

module.exports = Letter;