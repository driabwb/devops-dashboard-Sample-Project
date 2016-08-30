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
    });