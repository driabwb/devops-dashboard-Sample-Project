var gamePlay = require('./gamePlay.js');

// Setup for reading from console
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

// Attempt to make the move specified.
var playerMoved = function(gameState, row, col){
    if(!gamePlay.addMove(gameState,row,col)){
	console.log("You made and invalid move. Please try again.\n");
	askForRow(gameState);
    }else{
	gamePlay.switchCurrentPlayer(gameState);
	askForRow(gameState);
    }
};

// Ask in the console for a column number.
var askForColumn = function(gameState, row){
    rl.question("Which Column?\n", function(result){
	    playerMoved(gameState, row, parseInt(result));
	});
};

// Blah

// Ask in the console for a row number.
var askForRow = function(gameState){
    rl.question("Which row?\n", function(result){
	    askForColumn(parseInt(result));
	});
};

// Start the program
askForRow({board: gamePlay.createNewBoard(), currentPlayer: gamePlay.x});

console.log("Thank you, please come again");