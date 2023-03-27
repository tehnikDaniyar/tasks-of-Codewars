


//================= Coordinates Validator =============
/*You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.*/

function isValidCoordinates(coordinates) {
	return /^-*([1-8]?[0-9]?|90)\.*\d*,\s-*([1-9]\d?|(1[0-7][0-9]|180))\.*\d*$/.test(coordinates)
};

isValidCoordinates("4, -3");