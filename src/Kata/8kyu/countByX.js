


//==========count by x================
/*Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.*/

function countBy(x, n) {
	let arr = [];
	let y = x;
	for (let i = 0; i < n; i++) {
		arr[i] = y;
		y += x;
	};
	return arr;
}