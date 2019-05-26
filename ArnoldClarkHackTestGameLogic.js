// Game outcome logic
function battle (currentPlayer, currentOpponent) {
    // Scissors possible outcomes. Two win, three lose, draw.
    if (currentPlayer.name === "Scissors ") {
        if (currentOpponent.name === "Paper ") {
            addFight(currentPlayer.name,currentPlayer.method1, currentPlayer.defeats1);
        }
        else if  (currentOpponent.name === "Lizard ") {
            addFight(currentPlayer.name,currentPlayer.method2, currentPlayer.defeats2);
        }
        else if (currentOpponent.name === "Your Laptop ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Spock ") {
            addFight(currentOpponent.name,currentOpponent.method1, currentOpponent.defeats1);
        }
        else if (currentOpponent.name === "Rock ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else {
            addFight("Draw ", "Draw ", "Draw");
        }
    }

    // Paper possible outcomes. Two win, three lose, draw.
    else if (currentPlayer.name === "Paper ") {
        if (currentOpponent.name === "Rock ") {
            addFight(currentPlayer.name,currentPlayer.method1, currentPlayer.defeats1);
        }
        else if  (currentOpponent.name === "Spock ") {
            addFight(currentPlayer.name,currentPlayer.method2, currentPlayer.defeats2);
        }
        else if (currentOpponent.name === "Your Laptop ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Lizard ") {
            addFight(currentOpponent.name,currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Scissors ") {
            addFight(currentOpponent.name, currentOpponent.method1, currentOpponent.defeats1);
        }
        else {
            addFight("Draw ", "Draw ", "Draw");
        }
    }

    // Rock possible outcomes. Two win, three lose, draw.
    else if (currentPlayer.name === "Rock ") {
        if (currentOpponent.name === "Lizard ") {
            addFight(currentPlayer.name,currentPlayer.method1, currentPlayer.defeats1);
        }
        else if  (currentOpponent.name === "Scissors ") {
            addFight(currentPlayer.name,currentPlayer.method2, currentPlayer.defeats2);
        }
        else if (currentOpponent.name === "Your Laptop ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Paper ") {
            addFight(currentOpponent.name,currentOpponent.method1, currentOpponent.defeats1);
        }
        else if (currentOpponent.name === "Spock ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else {
            addFight("Draw ", "Draw ", "Draw ");
        }
    }

    // Lizard possible outcomes. Two win, three lose, draw.
    else if (currentPlayer.name === "Lizard ") {
        if (currentOpponent.name === "Spock ") {
            addFight(currentPlayer.name,currentPlayer.method1, currentPlayer.defeats1);
        }
        else if  (currentOpponent.name === "Paper ") {
            addFight(currentPlayer.name,currentPlayer.method2, currentPlayer.defeats2);
        }
        else if (currentOpponent.name === "Your Laptop ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Rock ") {
            addFight(currentOpponent.name,currentOpponent.method1, currentOpponent.defeats1);
        }
        else if (currentOpponent.name === "Scissors ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else {
            addFight("Draw ", "Draw ", "Draw ");
        }
    }

    // Spock possible outcomes. Two win, three lose, draw.
    else if (currentPlayer.name === "Spock ") {
        if (currentOpponent.name === "Scissors ") {
            addFight(currentPlayer.name,currentPlayer.method1, currentPlayer.defeats1);
        }
        else if  (currentOpponent.name === "Rock ") {
            addFight(currentPlayer.name,currentPlayer.method2, currentPlayer.defeats2);
        }
        else if (currentOpponent.name === "Your Laptop ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else if (currentOpponent.name === "Lizard ") {
            addFight(currentOpponent.name,currentOpponent.method1, currentOpponent.defeats1);
        }
        else if (currentOpponent.name === "Paper ") {
            addFight(currentOpponent.name, currentOpponent.method2, currentOpponent.defeats2);
        }
        else {
            addFight("Draw ", "Draw ", "Draw");
        }
    }
}

// Function passes details to create game object depending on the button chosen
function newPlayer (value) {

    switch (value) {

        case "1":
            return new Player("Scissors ", "cuts ", "decapitates ", "Paper ", "Lizard ");

        case "2":
            return new Player("Paper ", "covers ", "disproves ", "Rock ", "Spock ");

        case "3":
            return new Player("Rock ", "crushes ", "crushes ", "Lizard ", "Scissors ");

        case "4":
            return new Player("Lizard ", "poisons ", "eats ", "Spock ", "Paper ");

        case "5":
            return new Player("Spock ", "smashes ", "vaporizes ", "Scissors ", "Rock ");

        // Random unexpected way to lose
        case "6":
            return new Player("Your Laptop ", "covers", "disapproves ", "Rock", "of you playing this game, YOU LOSE");
    }
}

// Random number generator to ensure each new opponent is randomly decided
function randomNumber (min, max) {
    return Math.floor((Math.random() * max) +min);
}

// Function to add the battle outcome to the screen
function addFight(currentPlayer, method, currentOpponent) {
    document.getElementById("gameResult").innerHTML += '<p>' + currentPlayer + method + currentOpponent + '</p>';
}

// Works however not in use to allow all results to be visible on screen for each battle
// Remove comments on this and calls in event listeners file if you wish to use this
// function clearDiv () {
//     var removeP = document.getElementById("gameResult");
//     removeP.removeChild(removeP.lastChild);
// }
