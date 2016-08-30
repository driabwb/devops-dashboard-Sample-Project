const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

// No one has played here
var none = 0;
// The x player
var x = 1;
// The o player
var o = 2;

var createNewBoard = function(){
    return [
	    [none, none, none],
	    [none, none, none],
	    [none, none, none]
	   ];
};

var addMove = function(gameState, row, col){
    var player = gameState.currentPlayer;
    if(!(0 < row && row < 3 && 0 < col && col < 3)){
	return false;
    }
    if(gameState.board[row][col] === none){
	gameState.board[row][col] = player;
	return true;
    }else{
	return false;
    }
};

var switchCurrentPlayer = function(gameState){
    if(x === gameState.currentPlayer){
	gameState.currentPlayer = o;
    }else{
	gameState.currentPlayer = x;
    }
}

var playerMoved = function(gameState, row, col){
    if(!addMove(gameState,row,col)){
	console.log("You made and invalid move. Please try again.\n");
	askForRow(gameState);
    }else{
	switchCurrentPlayer(gameState);
	askForRow(gameState);
    }
};

var askForColumn = function(gameState, row){
    rl.question("Which Column?\n", function(result){
	    playerMoved(gameState, row, parseInt(result));
	});
};

var askForRow = function(gameState){
    rl.question("Which row?\n", function(result){
	    askForColumn(parseInt(result));
	});
};

askForRow({board: createNewBoard(), currentPlayer: x});