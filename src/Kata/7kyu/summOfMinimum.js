


//=======Summ of minimum============
/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/



function sumOfMinimums(arr) {
	return arr.reduce((summ, array) => summ + Math.min(...array), 0);
}