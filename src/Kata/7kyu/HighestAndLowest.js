


//==============Highest and Lowest===============
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers) {
	if (!/\s+/.test(numbers)) { return `${numbers} ${numbers}` };
	return numbers.split(' ')
		.sort((a, b) => b - a)
		.filter((_, index, arr) => index === 0 || index === arr.length - 1)
		.join(' ');
};
// function highAndLow(numbers) {
// 	var arr = numbers.split(' ').sort(function (a, b) { return a - b });
// 	return arr[arr.length - 1] + ' ' + arr[0];
// }
