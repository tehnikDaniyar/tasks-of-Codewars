


//=============Convert string to camel case=============
/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.*/

function toCamelCase(str) {
	str.length === 0 ? "" :
		str.replace(/[^a-zA-Z]/g, ' ')
			.map((word, index) => index !== 0 ? word[0].toUpperCase() + word.slice(1) : word)
			.split(" ")
			.join("");
};

// function toCamelCase(str) {
// 	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }


