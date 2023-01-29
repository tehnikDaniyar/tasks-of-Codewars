


//==========Unique In Order======================
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	// let arr = iterable.split('');
	// let result = [arr[0],];

	// for (let i = 1; i < arr.length; i++) {
	// 	if (arr[i - 1] != arr[i]) {
	// 		result.push(arr[i])
	// 	};
	// };

	// return result

	return [...iterable].filter((elem, index) => index === 0 || elem !== iterable[index - 1])
};