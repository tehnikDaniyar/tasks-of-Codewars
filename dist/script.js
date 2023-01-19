
//========Consecutive strings======================
// You are given an array(list) strarr of strings and an integer k. Your task is to
// return the first longest string consisting of k consecutive strings taken in the array.

//========exsamples=======
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
	let result = '';
	if (k >= strarr.length || k <= 0) {
		return "";
	} else {
		strarr.forEach((elem, index) => {
			let word = strarr.slice(index, index + k).reduce((s, e) => s + e, "");
			word.length > result.length ? result = word : null;
		})
		return result
	};
};

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 4)


//=======Give me a Diamond============6 kyu=======
/*Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.*/

function diamond(n) {
	let arr = [...Array(n)];
	let arr2 = [];
	let a = '*';
	let counter = 1;
	for (let i = 0; i < n; i++) {
		arr.splice(Math.ceil(n / 2) - 1 - i, i + 1, a);
		arr2.push(arr.join(undefined))
		if (counter < n) {
			a += '**';
			counter += 2;
		} else {
			a = a.replace(/\*{2}/, '');
		};
	};
	let res = arr2.join(' ').replace(/\s/g, '\n');
	return res;
};

console.log(diamond(7));


//=======Are You Playing Banjo?================
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

const areYouPlayingBanjo = (name) => {
	return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
};

//============best practices============================================================
// function areYouPlayingBanjo(name) {
// 	return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }


/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.*/

function howMuchILoveYou(nbPetals) {
	let answers = [
		"I love you",
		"a little",
		"a lot",
		"passionately",
		"madly",
		"not at all",
	];

	let k = -1;
	for (let i = 0; i < nbPetals; i++) {
		if (k < 5) {
			k += 1;
		} else {
			k = 0;
		};
	};

	return answers[k];
	// 1   2   3   4   5   6
	// 7   8   9  10  11  12
	// 13  14  15 16  17  18

}

howMuchILoveYou(6);

// function howMuchILoveYou(nbPetals) {
// 	let phrase = {
// 	  0: "not at all",
// 	  1: "I love you",
// 	  2: "a little",
// 	  3: "a lot",
// 	  4: "passionately",
// 	  5: "madly"
// 	}
// 	return phrase[nbPetals%6]
//  }