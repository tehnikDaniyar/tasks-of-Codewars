

//============Are they the "same"?==================
/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(array1, array2) {
	if (array1 || array2) {
		for (let num of array2) {
			let b = Math.sqrt(num);
			if (array1.indexOf(b) === -1) {
				return false;
			};
		}
		return true;
	} else {
		return false;
	}
};

let wewewe = comp([3, 5, 0, 3, 2, 0, 2, 9, 2, 1, 1, 9, 7, 8, 6, 8, 2, 2, 5], [4, 4, 9, 1, 81, 36, 4, 4, 81, 1, 25, 64, 9, 64, 1, 49, 4, 25, 0])