// Command Line Tic-Tac-Toe
// Normal Mode - a 2-player game for funsies


// code to bring in the function of prompt
var prompt = require("prompt-sync").prompt;

// Initializing variables
var player1 = null;
var player2 = null;
var counter = 0;
var currentPlayer = null;
var currentMove = null;
var goodMove = false;
var winner = false;
var noWinner = false;
var rowWinner = false;
var colWinner = false;
var diagWinner = false;

// Game board stored as nested arrays
var gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// Each player's coordinates as an array
var currentMove = [];
var move = [];

// function to print game board that is blank
var blankBoard = function() {
    console.log("          1   2   3  ");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      1 |   |   |   |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      2 |   |   |   |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      3 |   |   |   |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("                                         ");
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("                                         ");
};

// function to get move of the currentPlayer
var askMove = function() {
    console.log("Enter your move in the format: # #");
    currentMove = prompt();
};

// function to check for valid input
var validMove = function() {

    if (currentMove.length !== 3) {
        console.log("Invalid input: you must enter the x and y coordinates separated by a space");
    }
    else if (currentMove.length === 3) {

        var x = currentMove.substr(0,1);
        var y = currentMove.substr(2,1);

        if (currentMove.substr(1,1) !== " ") {
            console.log("Invalid input: you must enter the x and y coordinates separated by a space");
        }

        else if ( ((x < 1) || (x > 3)) || ((y < 1) || (y > 3)) ) {
            console.log("Invalid input: those coordinates are outside the playable area");
        }
        else if ( (gameBoard[y-1][x-1] === "X") || (gameBoard[y-1][x-1] === "O") ) {
            console.log("Invalid input: that space is already taken");
        }
        else {
            goodMove = true;
        }
    }
};

// function to print game board for players to see
var printBoard = function() {
    console.log("                                         ");
    console.log("          1   2   3  ");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      1 | " + gameBoard[0][0] + " | " + gameBoard[0][1] + " | " + gameBoard[0][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      2 | " + gameBoard[1][0] + " | " + gameBoard[1][1] + " | " + gameBoard[1][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      3 | " + gameBoard[2][0] + " | " + gameBoard[2][1] + " | " + gameBoard[2][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("                                         ");
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("                                         ");
};

// function to check for a winner
var checkWinner = function() {
        if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "XXX") || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "OOO") || ((gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "XXX") || (gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "OOO"))) {
            diagWinner = true;
        }
        else if ((gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "XXX") || (gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "OOO") || (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "XXX") || (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "OOO") || (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "XXX") || (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "OOO")) {
            rowWinner = true;
        }
        else if ((gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "XXX") || (gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "OOO") || (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "XXX") || (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "OOO") || (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "XXX") || (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "OOO")) {
            colWinner = true;
        } else if (counter === 9) {
            noWinner = true;
            winner = true;
        }
};

var congrats = function() {
    if (diagWinner === true) {
        console.log("DEFINITELY DELIBARATELY DEMONSTRABLE DIAGNONAL!");
        console.log(currentPlayer + " is the winner!");
        winner = true;
    } else if (rowWinner === true) {
        console.log("RI-DONK-U-LOUS ROW!");
        console.log(currentPlayer + " is the winner!");
        winner = true;
    } else if (colWinner === true) {
        console.log("CRAY-CRAY COLUMN!");
        console.log(currentPlayer + " is the winner!");
        winner = true;
    } else if (counter === 9) {
        console.log("          ");
        console.log("   C A T   ");
        console.log("          ");
        console.log("  /\\   /\\");
        console.log(" =  O.O  =");
        console.log("  \\__^__/   ");
        console.log("         ");
        winner = true;
        noWinner = true;
        }
};

// Prepare the players for this experience
console.log("");
console.log("Get ready for some \"Noughts and Crosses\" \n\(sometimes called Tic-Tac-Toe\)");
console.log("");

do {
    console.log("Player 1: What is your name?");
    var player1 = prompt();

    console.log("Player 2: What is your name?");
    var player2 = prompt();

    if (player1 === player2)
        console.log("Please enter different names");

} while (player1 === player2);

console.log("- - - - - - - - - - - - - - - - - - - - - - -");
console.log("");

// directions for play
console.log("Player 1 is X");
console.log("Player 2 is O");
console.log("Player 1 goes first.");
console.log("");

console.log("Tell me your desired position by column then row.");
console.log("For example, entering \"1 2\" will make your mark in the 1st column & 2nd row.");
console.log("");

blankBoard();

// Play begins
currentPlayer = player1;
console.log(player1 + ", you go first");

// Repeat this until a player wins
do {
    counter++;

    // loop to check validity of input data
    while (goodMove !== true) {
        askMove();
        validMove();
    }

    // Store the player 1 move in an array
    var space = " ";
    var move = currentMove.split(space);

    // Change values of array to integer
    move[0] = parseInt(move[0],10);
    move[1] = parseInt(move[1],10);


    // Store the current player's move in the gameBoard
    if (currentPlayer === player1) {
        gameBoard[move[1]-1][move[0]-1] = "X";
    }
    else {
        gameBoard[move[1]-1][move[0]-1] = "O";
    }

    // print game board each turn
    printBoard();

    // Search for possible winner
    checkWinner();

    // Congratulations and such
    congrats();

    // switch players at end of turn or end game if board is full
    if (currentPlayer === player1 && winner !== true) {
        console.log(player2 + "\'s turn");
        currentPlayer = player2;
        goodMove = false;
    } else if (winner !== true) {
        console.log(player1 + "\'s turn");
        currentPlayer = player1;
        goodMove = false;
    }

} while (winner !== true && noWinner !== true ); // end of while loop that runs until winner equals true

console.log("Thanks for playing!");
