


//=================Pair of gloves====================
/*Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.*/

function numberOfPairs(gloves) {
	let obj = [];

	gloves.forEach(color => {
		obj[color] ? obj[color] += 1 : obj[color] = 1;
	});

	let counter = 0;

	for (let key in obj) {
		counter += Math.floor(obj[key] / 2);
	};

};

// function numberOfPairs(gloves) {
// 	return [...new Set(gloves)].reduce((acc, el) => acc + ~~(gloves.filter(x => x === el).length / 2), 0);
// }