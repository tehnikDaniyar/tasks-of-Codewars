


//============Construct Submatrix====================
/*Task
Given a matrix, find its submatrix obtained by deleting the specified rows and emptying the specified columns.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers.

1 ≤ matrix.length ≤ 10,

1 ≤ matrix[0].length ≤ 10,

0 ≤ matrix[i][j] ≤ 9.

[input] integer array rowsToDelete

Array of indices (0-based) of rows to be deleted.

0 ≤ rowsToDelete.length ≤ 5,

0 ≤ rowsToDelete[i] < matrix.length.

[input] integer array columnsToDelete

Array of indices (0-based) of columns to be deleted.

0 ≤ columnsToDelete.length ≤ 5,

0 ≤ columnsToDelete[i] < matrix[0].length.

[output] 2D integer array*/

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
	let res = [];
	matrix.forEach((elem, index) => {
		if (rowsToDelete.indexOf(index) === -1) {
			columnsToDelete.forEach(position => elem.splice(position, 1, ""));
			elem = elem.filter(num => num !== '');
			res.push(elem)
		};
	});
	return res;
};

// function constructSubmatrix(matrix, rows, cols) {
//   return matrix.filter((row,i) => rows.indexOf(i) === -1).map(row => row.filter((col,i) => cols.indexOf(i) === -1));
// }



