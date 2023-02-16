



//============Direction REduction=================
/*Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:*/

//["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
function dirReduc(arr) {
	let obj = {};
	let res = [];

	arr.forEach(elem => obj[elem] ? obj[elem] += 1 : obj[elem] = 1);

	while (obj.NORTH > 0 && obj.SOUTH > 0) {
		for (let key in obj) {
			if (key === "NORTH") {
				obj[key] -= 1;
			};
			if (key === "SOUTH") {
				obj[key] -= 1;
			};
		};
	};

	while (obj.EAST > 0 && obj.WEST > 0) {
		for (let key in obj) {
			if (key === "EAST") {
				obj[key] -= 1;
			};
			if (key === "WEST") {
				obj[key] -= 1;
			};
		};
	};


	for (let key in obj) {
		obj[key] ? res.push(key) : null;
	}

};

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])