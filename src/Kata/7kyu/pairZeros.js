


//===========Pair Zeros================

/*For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.*/

function pairZeros(arr) {
	return arr.join('').replace(/([1-9]*0[1-9]*)0/g, '$1').split('').map(str => +str);
};

console.log(pairZeros([1, 0, 2, 0, 3, 0]));