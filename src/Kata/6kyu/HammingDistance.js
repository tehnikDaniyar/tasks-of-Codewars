

//==========Hamming Distance==============
/*The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.*/

function hamming(a, b) {
	let res = [];
	for (let i = 0; i < a.length; i++) {
		a[i] === b[i] ? null : res.push(a[i]);
	};
};
// const hamming = (a, b) => [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0);
