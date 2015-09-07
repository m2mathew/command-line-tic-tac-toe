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


// Prepare the players for this experience
console.log("                                         ");
console.log("Get ready for some \"Noughts and Crosses\" \n\(sometimes called Tic-Tac-Toe\)");
console.log("                                         ");

console.log("Player 1: What is your name?");
var player1 = prompt();

console.log("Player 2: What is your name?");
var player2 = prompt();
console.log("- - - - - - - - - - - - - - - - - - - - - - -");
console.log("                                         ");

// directions for play
console.log("Player 1 is X");
console.log("Player 2 is O");
console.log("Player 1 goes first.");
console.log("                                         ");

console.log("Tell me your desired position by column then row.");
console.log("For example, entering \"1 2\" will make your mark in the 1st column & 2nd row.");
console.log("                                         ");

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

blankBoard();

// Game board stored as nested arrays
var gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

//set current player
currentPlayer = player1;

// Each player's coordinates as an array
var currentMove = [];
var move = [];

// Object to check for type of win
var typeWin = {
    row1: "",
    row2: "",
    row3: "",
    col1: "",
    col2: "",
    col3: "",
    diag1: "",
    diag2: ""
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
var storeMove = function() {
    for (var i = 0; i < 3; i++) {

        if (gameBoard[0][i] === "X")
            typeWin.row1 = typeWin.row1 + "X";
        else if (gameBoard[0][i] === "O")
            typeWin.row1 = typeWin.row1 + "O";

        if (gameBoard[1][i] === "X")
            typeWin.row2 += "X";
        else if (gameBoard[1][i] === "O")
            typeWin.row2 += "O";

        if (gameBoard[2][i] === "X")
            typeWin.row3 += "X";
        else if (gameBoard[2][i] === "O")
            typeWin.row3 += "O";

        if (gameBoard[i][0] === "X")
            typeWin.col1 += "X";
        else if (gameBoard[i][0] === "O")
            typeWin.col1 += "O";

        if (gameBoard[i][1] === "X")
            typeWin.col2 += "X";
        else if (gameBoard[i][1] === "O")
            typeWin.col2 += "O";

        if (gameBoard[i][2] === "X")
            typeWin.col3 += "X";
        else if (gameBoard[i][2] === "O")
            typeWin.col3 += "O";

        if ((gameBoard[0][0] === "X") || (gameBoard[1][1] === "X") || (gameBoard[2][2] === "X"))
            typeWin.diag1 += "X";
        else if ((gameBoard[0][0] === "O") || (gameBoard[1][1] === "O") || (gameBoard[2][2] === "O"))
            typeWin.diag1 += "O";

        if ((gameBoard[0][2] === "X") || (gameBoard[1][1] === "X") || (gameBoard[2][0] === "X"))
            typeWin.diag2 += "X";
        else if ((gameBoard[0][2] === "O") || (gameBoard[1][1] === "O") || (gameBoard[2][0] === "O"))
            typeWin.diag2 += "O";
    }

};

var checkWinner = function() {

    if ((typeWin.row1 === "XXX") || (typeWin.row1 === "OOO") || (typeWin.row2 === "XXX") || (typeWin.row2 === "OOO") || (typeWin.row3 === "XXX") || (typeWin.row3 === "OOO")) {
        rowWinner = true;
        winner = true;
    }

    if ((typeWin.col1 === "XXX") || (typeWin.col1 === "OOO") || (typeWin.col2 === "XXX") || (typeWin.col2 === "OOO") || (typeWin.col3 === "XXX") || (typeWin.col3 === "OOO")) {
        colWinner = true;
        winner = true;
    }

    if ((typeWin.diag1 === "XXX") || (typeWin.diag1 === "OOO") || (typeWin.diag2 === "XXX") || (typeWin.diag2 === "OOO")) {
        diagWinner = true;
        winner = true;
    }
};


// Play begins
console.log(player1 + ", you go first");

// Repeat this until a player wins
do {

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
    // store moves to check for a winner
    storeMove();

    // print game board each turn
    printBoard();

    // Search for possible winner
    // checkWinner();

    // switch players at end of turn or end if board is full
    if (currentPlayer === player1 && winner === false) {
        console.log(player2 + "\'s turn");
        currentPlayer = player2;
        counter++;
        goodMove = false;
    } else if (winner === false) {
        console.log(player1 + "\'s turn");
        currentPlayer = player1;
        counter++;
        goodMove = false;
    } else if (counter === 9)
        noWinner = true;

} while ((winner !== true) || (noWinner !== true)); // end of while loop that runs until winner equals true


// Congratulations and such
if (noWinner === true) {
    console.log("          ");
    console.log("   C A T   ");
    console.log("          ");
    console.log(" /\\   /\\");
    console.log("=  O.O  =");
    console.log(" \\__^__/   ");
    console.log("         ");
}
else if (colWinner === true) {
    console.log("RI-DONK-U-LOUS ROW!");
    console.log(currentPlayer + " is the winner!");
}
else if (rowWinner === true) {
    console.log("CRAY-CRAY COLUMN!");
    console.log(currentPlayer + " is the winner!");
}
else if (diagWinner === true) {
    console.log("DEFINITELY DELIBARATELY DEMONSTRABLE DIAGNONAL!");
    console.log(currentPlayer + " is the winner!");
}
