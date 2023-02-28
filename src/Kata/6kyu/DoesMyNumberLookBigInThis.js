


//=============Does my number look big in this?====================
/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).*/

function narcissistic(value) {
	return [...`${value}`].map((num, i, arr) => num ** arr.length).reduce((summ, num) => summ + num) == value;
};

narcissistic(153);