var assert = require('chai').assert;
var tictactoe = require('../gamePlay.js');

describe("Testing Board Functions", function(){
	describe("Testing Create Board", function(){
		it("should give back a board filled with all zeros", function(){
			console.log(tictactoe.createNewBoard);
			var board = tictactoe.createNewBoard();
			assert.deepEqual(board, [ [0,0,0], [0,0,0], [0,0,0] ]);
		    });
	    });
	describe("Testing Player Switching", function(){
		it("Should change to o when it is currently x", function(){
			var gameState = {'currentPlayer': tictactoe.x};
			tictactoe.switchCurrentPlayer(gameState);
			assert.deepEqual(gameState, {'currentPlayer': tictactoe.o});
		    });
		it("Should change to x when it is currently o", function(){
			var gameState = {'currentPlayer': tictactoe.o};
			tictactoe.switchCurrentPlayer(gameState);
			assert.deepEqual(gameState, {'currentPlayer': tictactoe.x});
		    });
	    });
    });