


//===============Maximum Length Difference====================
/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).*/

function mxdiflg(a1, a2) {
	let minA1 = (a1.reduce((res, elem) => res.length < elem.length ? res = res : res = elem)).length;
	let maxA1 = (a1.reduce((res, elem) => res.length > elem.length ? res = res : res = elem)).length;

	let minA2 = (a2.reduce((res, elem) => res.length < elem.length ? res = res : res = elem)).length;
	let maxA2 = (a2.reduce((res, elem) => res.length > elem.length ? res = res : res = elem)).length;

	let x = minA1 < minA2 ? minA1 : minA2;
	let y = maxA1 > maxA2 ? maxA1 : maxA2;

	return y - x;
};

mxdiflg(['123', '1234', '12345'], ['123', '123456']);