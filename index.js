var Word = require("./Word.js")
var inquirer = require('inquirer');



inquirer.prompt([
    {
        type: "input",
        message: "Guess a Letter?",
        name: "userGuess"
    }
]).then(function (answer) {
    console.log("you guessed " + answer.userGuess)

});