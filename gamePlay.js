

// No one has played here
var none = 0;
exports.none = none;
// The x player
var x = 1;
exports.x = x;
// The o player
var o = 2;
exports.o = o;

exports.createNewBoard = function(){
    return [
	    [none, none, none],
	    [none, none, none],
	    [none, none, none]
	   ];
};

exports.addMove = function(gameState, row, col){
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

exports.switchCurrentPlayer = function(gameState){
    if(x === gameState.currentPlayer){
	gameState.currentPlayer = o;
    }else{
	gameState.currentPlayer = x;
    }
}
