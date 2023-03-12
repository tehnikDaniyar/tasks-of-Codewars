


//=============Convert string to camel case=============
/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.*/

function toCamelCase(str) {
	console.log("Convert string to camel case");
	if (str.length === 0) {
		return "";
	};
	let onlyWordString = str.replace(/[^a-zA-Z]/g, ' ');
	let arr = onlyWordString.split(" ").map((word, index) => index !== 0 ? word[0].toUpperCase() + word.slice(1) : word);
	let result = arr.join("");
	return result;
};

toCamelCase("the-stealth-warrior");


