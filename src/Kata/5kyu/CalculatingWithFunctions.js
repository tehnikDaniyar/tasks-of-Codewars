

//=================Calculating with Functions====================

/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:*/


function zero(callback) {
	return
}
function one() {
	return 1;
}
function two() {
	return 2;
}
function three() {
	return 3;
}
function four() {
	return 4;
}
function five() {
	return 5;
}
function six() {
	return 6;
}
function seven(callback) {
	if (callback) {
		return
	} else {
		return 7;
	}
}
function eight() {
	return 8;
}
function nine() {
	return 9;
}

function plus(number) {
	return this + number;
}
function minus(number) {
	return this - number;
}
function times(number) {
	return this * number;
}
function dividedBy(number) {
	return this / number
}

console.log('Calculating');
console.log(seven(minus(four())));