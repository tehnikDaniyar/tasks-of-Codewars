


//sort anithing string

function order(words) {
	let obj = {};
	words.split(" ").forEach(word => obj[`${word.replace(/\w*(\d)\w*/g, "$1")}`] = word);
	console.log(obj);


	let res = [];
	for (let key in obj) {
		res.push(obj[key]);
	};

	console.log(res);
	return res.join(" ");
}

order("b2 a1 c3 d4");