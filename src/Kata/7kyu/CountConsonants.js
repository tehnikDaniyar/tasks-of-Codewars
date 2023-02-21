


//======Count consonants==========
/*Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/

function consonantCount(str) {
	str = str.length ? str.match(/[a-zA-Z]/g) : 0;
	return str ? str.join('').replace(/[aeoui]/ig, '').length : 0;
};
// const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;
