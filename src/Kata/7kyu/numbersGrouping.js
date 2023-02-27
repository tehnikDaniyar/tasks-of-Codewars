


//=============== Simple Fun #34: Numbers Grouping =================
/*You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 x 104, ..., the 100th one should contain numbers from 99 x 104 + 1 to 106 and so on.*/

function numbersGrouping(a) {
	console.log('numbersGrouping');
	// let obj = {};
	// a.forEach(num => {
	// 	let groupIndex = Math.trunc(num / 10000 - 0.01);
	// 	obj[groupIndex] ? obj[groupIndex] += 1 : obj[groupIndex] = 1;
	// });
	// let counter = 0;
	// for (let key in obj) {
	// 	counter += (obj[key] + 1);
	// };
	// return counter;

	return [...new Set(a.map(num => Math.trunc(num / 10000 - 0.0001)))].length + a.length;
};

numbersGrouping([10000, 1]);