


//===============Maximum Length Difference====================
/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).*/

function mxdiflg(a1, a2) {
	a1 = a1.map(elem => elem.length);
	a2 = a2.map(elem => elem.length);
	return Math.max(...a1, ...a2) - Math.min(...a1, ...a2);
};

mxdiflg(['123', '1234', '123456789', '12'], ['123', '123456', '1']);