// All event listeners for each button

document.addEventListener('DOMContentLoaded', function(){
    // Forces the content to be loaded before attaching even listeners
    var scissors = document.getElementById("scissors");
    var paper = document.getElementById("paper");
    var rock = document.getElementById("rock");
    var lizard = document.getElementById("lizard");
    var spock = document.getElementById("spock");

    scissors.addEventListener("click", function () {
        var currentPlayer = newPlayer(scissors.value);
        var randomNum = randomNumber(1,6);
        var currentOpponent = newPlayer(""+randomNum+"");
        // clearDiv();
        battle(currentPlayer, currentOpponent);
    });

    paper.addEventListener("click", function () {
        var currentPlayer = newPlayer(paper.value);
        var randomNum = randomNumber(1,6);
        var currentOpponent = newPlayer(""+randomNum+"");
        // clearDiv();
        battle(currentPlayer, currentOpponent);
    });

    rock.addEventListener("click", function () {
        var currentPlayer = newPlayer(rock.value);
        var randomNum = randomNumber(1,6);
        var currentOpponent = newPlayer(""+randomNum+"");
        // clearDiv();
        battle(currentPlayer, currentOpponent);
    });

    lizard.addEventListener("click", function () {
        var currentPlayer = newPlayer(lizard.value);
        var randomNum = randomNumber(1,6);
        var currentOpponent = newPlayer(""+randomNum+"");
        // clearDiv();
        battle(currentPlayer, currentOpponent);
    });

    spock.addEventListener("click", function () {
        var currentPlayer = newPlayer(spock.value);
        var randomNum = randomNumber(1,6);
        var currentOpponent = newPlayer(""+randomNum+"");
        // clearDiv();
        battle(currentPlayer, currentOpponent);
    });

});