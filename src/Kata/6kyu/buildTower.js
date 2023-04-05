//=========BuildTower=============



function towerBuilder(nFloors) {
	console.log("Build Tower");
	let length = getLengthString(nFloors);
	let res = [];
	let counter = 1;
	for (let i = 1; i <= nFloors; i++) {
		res.push(counter);
		counter += 2;
	};
	console.log(res);
	return res;
};


function getLengthString(l) {
	let counter = 1;
	for (let i = 0; i < l; i++) {
		counter += 2;
	};
	return counter;
};

function getStringForTower(arr, length) {
	return arr.map(num => ``.length = length)
}

towerBuilder(10);