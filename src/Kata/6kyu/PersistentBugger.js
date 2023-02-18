


//=============Persistent Bugger=====================
/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.*/

function persistence(num) {
	let counter = 0;
	while (String(num).length > 1) {
		num = Number(String(num).split('').reduce((res, dig) => res * dig));
		counter++;
	};
	return counter;
};

persistence(123);