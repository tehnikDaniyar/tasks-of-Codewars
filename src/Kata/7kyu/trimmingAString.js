


//====================Trimming a string=========================================
/*Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"*/

function trim(str, size) {
	if (str.length > size) {
		str = str.substr(0, size);

		if (str.length <= 3) {
			return str + '...';
		} else {
			return str.replace(/[\w\s]{3}$/, '...',);
		};

	} else {
		return str;
	}
}

let a = trim("OU aMhEv", 3);
// let b = trim("nT ExL AOmG gZTKs", 2)

//==best practic====
// function trim(arr, size) {
// 	return arr.length <= size ? arr : arr.slice(0, arr.length > 3 ? size - 3 : size) + '...'
// }
