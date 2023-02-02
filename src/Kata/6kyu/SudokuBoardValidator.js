


//===============Sudoku board validator===================
function validateSudoku(board) {
	//====cheking rows==========
	for (let arr of board) {
		if (!checkingRow(arr)) {
			return false
		};
	};

	//====cheking columns========
	for (let i = 0; i < 9; i++) {
		let column = [
			board[0][i],
			board[1][i],
			board[2][i],
			board[3][i],
			board[4][i],
			board[5][i],
			board[6][i],
			board[7][i],
			board[8][i],
		];
		if (!checkingRow(column)) {
			return false;
		};
	};

	//======checking boxes========

	return true;
};

function checkingRow(arr) {
	let set = new Set(arr)
	return !(arr.indexOf(0) !== -1 || [...set].length !== arr.length)
}

const sudoku =
	[
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[2, 3, 4, 5, 6, 7, 8, 9, 1],
		[3, 4, 5, 6, 7, 8, 9, 1, 2],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[5, 6, 7, 8, 9, 1, 2, 3, 4],
		[6, 7, 8, 9, 1, 2, 3, 4, 5],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[8, 9, 1, 2, 3, 4, 5, 6, 7],
		[9, 1, 2, 3, 4, 5, 6, 7, 8],
	];

console.log(validateSudoku(sudoku));
console.log([0, 0, 0].indexOf(0));
