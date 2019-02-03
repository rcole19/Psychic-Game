

var computerChoices =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


var wins = 0
var loses = 0
var guessesleft = 9
var letterUser = [];
var eachofLetters = null;


var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];


function countGuessesleft() {
    document.querySelector("#guessesleft").innerHTML = "Guesses left" + guessesleft;
}

function farUserGuesses() {
    document.querySelector("#letter").innerHTML = "Your Guesses so far" + letterUser.join(' ')
}

countGuessesleft();

var restart = function() {
    guessesleft=9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


document.onkeyup = function(event) {
    guessesleft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesleft();
    farUserGuesses();

    if (userGuess === computerGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        restart();
    }
    else if (guessesleft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses:" + losses;
        restart();
    }
};