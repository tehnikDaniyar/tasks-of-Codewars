


//============Find the capitals=================
/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.*/

var capitals = function (word) {
	console.log("find the capitals");
	return word.split('').map(letter => letter === letter.toUpperCase() ? word.indexOf(letter) : "x")
		.filter(elem => elem != "x");
};

// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

capitals("WpDDppR");