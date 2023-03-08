


//==============Summing a number's digits================
/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.*/

function sumDigits(number) {
	return `${Math.abs(number)}`.split('').reduce((summ, num) => summ + Math.abs(+num), 0);
};

sumDigits(-10);