

//================Sum of two lowest positive integers=======================
/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/

function sumTwoSmallestNumbers(numbers) {
	// return numbers.splice(numbers.indexOf(Math.min(...numbers)), 0) + Math.min(...numbers);
	let index = numbers.indexOf(Math.min(...numbers));
	let a = +(numbers.splice(index, 1).join(''));
	let b = Math.min(...numbers);
	return a + b;
};

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// function sumTwoSmallestNumbers(numbers) {
// 	var result = numbers.sort(function(a,b){return a - b});
// 	return result[0] + result[1]
//  };