

//============Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!================
// function sumDigPow(a, b) {
// 	let arr = [];
// 	while (a !== b) {
// 		arr.push(a);
// 		a++;
// 	};
// 	return arr.filter(num => check(num));
// };

// function check(num) {
// 	return String(num).split('')
// 		.map((num, index) => Math.pow(Number(num), index + 1))
// 		.reduce((sum, num) => sum + num) === num;
// };


function sumDigPow(a, b) {
	let arr = [];
	while (a <= b) {
		String(num).split('')
			.map((num, index) => Math.pow(Number(num), index + 1))
			.reduce((sum, num) => sum + num) === num ? arr.push(a) : null;
		a++;
	};
	return arr;
};
