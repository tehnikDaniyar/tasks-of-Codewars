


//================testing 1- 2- 3===========================
function number(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(`${i + 1}: ${arr[i]}`);
	};
	return res;
};

let www = number(['a', 'b', 'c']);

// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)