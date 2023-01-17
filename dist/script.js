
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
	if (k >= strarr.length || k <= 0) {
		return "";
	};
	let concatArr = [];
	const l = strarr.length;

	for (let i = 0; i < l; i++) {
		concatArr.push(strarr.slice(0, k).reduce((str, e) => str + e, ""));
		strarr.shift();
	}

	let result = concatArr[0];
	concatArr.forEach(elem => {
		elem.length > result.length ? result = elem : null;
	});

	return result;
};

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));

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

