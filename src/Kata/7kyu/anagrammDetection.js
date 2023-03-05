


//===========anagrammDetection===============

/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.*/

var isAnagram = function (test, original) {
	test = test.toLowerCase();
	original = original.toLowerCase();

	let arr = original.split('');
	test.split('').forEach(letter => arr.indexOf(letter) !== -1 ? arr.splice(arr.indexOf(letter), 1) : null);

	return test.length === original.length && arr.length === 0;
};

