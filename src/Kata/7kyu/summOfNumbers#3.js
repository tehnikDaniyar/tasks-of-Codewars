

//==========Beginner Series #3 Sum of Numbers============
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum(a, b) {
	let arr = [a, b].sort((a, b) => a - b);
	let counter = arr[0];
	let summ = 0;
	while (!(counter > arr[1])) {
		summ += counter;
		counter++;
	};
	return summ;
}

getSum(10, 5);

//=======best practic==========================
// function GetSum(a, b) {
// 	return (a + b) * (Math.abs(a - b) + 1) / 2;
//  }