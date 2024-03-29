

//=================Calculating with Functions====================

/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:*/


function zero(callback) {
	return
}
function one() {
	return 1;
}
function two() {
	return 2;
}
function three() {
	return 3;
}
function four() {
	return 4;
}
function five() {
	return 5;
}
function six() {
	return 6;
}
function seven(callback) {
	if (callback) {
		return
	} else {
		return 7;
	}
}
function eight() {
	return 8;
}
function nine() {
	return 9;
}

function plus(number) {
	return this + number;
}
function minus(number) {
	return this - number;
}
function times(number) {
	return this * number;
}
function dividedBy(number) {
	return this / number
}

console.log('Calculating');
console.log(seven(minus(four())));




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
	// let obj = {};
	// let res = [];

	// arr.forEach(elem => obj[elem] ? obj[elem] += 1 : obj[elem] = 1);

	// while (obj.NORTH > 0 && obj.SOUTH > 0) {
	// 	for (let key in obj) {
	// 		if (key === "NORTH") {
	// 			obj[key] -= 1;
	// 		};
	// 		if (key === "SOUTH") {
	// 			obj[key] -= 1;
	// 		};
	// 	};
	// };

	// while (obj.EAST > 0 && obj.WEST > 0) {
	// 	for (let key in obj) {
	// 		if (key === "EAST") {
	// 			obj[key] -= 1;
	// 		};
	// 		if (key === "WEST") {
	// 			obj[key] -= 1;
	// 		};
	// 	};
	// };


	// for (let key in obj) {
	// 	obj[key] ? res.push(key) : null;
	// }
	// return arr.reduce((res, vector) => {
	// 	console.log("NORTH SOUTH".replace(/.+\s(\w+$)$/, '$1'));
	// 	if (vector === 'NORTH' && res.replace(/.+\s(\w+$)$/, '$1') !== "SOUTH") { res = res + ' ' + vector };
	// 	if (vector === 'SOUTH' && res.replace(/.+\s(\w+$)$/, '$1') !== "NORTH") { res + vector };
	// 	if (vector === 'EAST' && res.replace(/.+\s(\w+$)$/, '$1') !== "WEST") { res + vector };
	// 	if (vector === 'WEST' && res.replace(/.+\s(\w+$)$/, '$1') !== "EAST") { res + vector };
	// 	return res;
	// }, '')

};

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));



//=============Extract the domain name from a URL=================
function domainName(url) {
	return url.replace(/.*\/\/([a-zA-Z])\..+/g, '$1')
};


//============Are they the "same"?==================
/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(array1, array2) {
	if (array1 || array2) {
		for (let num of array2) {
			let b = Math.sqrt(num);
			if (array1.indexOf(b) === -1) {
				return false;
			};
		}
		return true;
	} else {
		return false;
	}
};

let wewewe = comp([3, 5, 0, 3, 2, 0, 2, 9, 2, 1, 1, 9, 7, 8, 6, 8, 2, 2, 5], [4, 4, 9, 1, 81, 36, 4, 4, 81, 1, 25, 64, 9, 64, 1, 49, 4, 25, 0])



//===============Build a pile of Cubes===================

/*Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
�
3
n 
3
 , the cube above will have volume of 
(
�
−
1
)
3
(n−1) 
3
  and so on until the top which will have a volume of 
1
3
1 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
�
3
+
(
�
−
1
)
3
+
(
�
−
2
)
3
+
.
.
.
+
1
3
=
�
n 
3
 +(n−1) 
3
 +(n−2) 
3
 +...+1 
3
 =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1*/

function findNb(m) {
	console.log("Build a pipe of cubes");
	let counter = 0;
	let cube = 1;

	while (m > 0) {
		m = m - cube ** 3;
		counter++;
		cube++;
		if (m < 0) {
			return -1;
		}
	};

	return counter;
};

findNb(4183059834009);

// function findNb(m) {
// 	var n = 0
// 	while (m > 0) m -= ++n**3
// 	return m ? -1 : n
//  }
//=========BuildTower=============



function towerBuilder(nFloors) {
	console.log("Build Tower");
	let length = getLengthString(nFloors);
	let res = [];
	let counter = 1;
	for (let i = 1; i <= nFloors; i++) {
		res.push(counter);
		counter += 2;
	};
	console.log(res);
	return res;
};


function getLengthString(l) {
	let counter = 1;
	for (let i = 0; i < l; i++) {
		counter += 2;
	};
	return counter;
};

function getStringForTower(arr, length) {
	return arr.map(num => ``.length = length)
}

towerBuilder(10);

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



//============Decode the woofs!===================
/*Justin has an exceptionally smart dog. In the latest show of its unparalleled intelligence, the dog learned to communicate human words. To do that, it woofs the exact number of times it takes to get to the right letter in the English alphabet. For example, if the dog is interested in the letter "A", it woofs just one time, if it's "B", it woofs two times and so on. Justin is amazed by his pet, but he also finds it challenging to translate the woofs in his head. Write a decoder for him that takes a string of hyphen-separated woofs and returns their human-language representation*/

function woofDecoder(str) {
	console.log('woof');
	const woof = new RegExp(/\.*w\.*o\.*o\.*f\.*/, 'i');
	const template = '_abcdefghijklmnopqrstuvwxyz';
	let arr1 = str.split('!');
	let res = [];


	arr1.forEach(word => {
		let index = checkDogWord(word, woof);
		if (index) {
			res.push(template[index]);
		}
	})

	return res.join('');
}

function checkDogWord(str, regExp) {
	return str.split('-').filter(dogLetter => regExp.test(dogLetter)).length
}

woofDecoder("Woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!Woof-woof-woof-woof!Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!");





//=============Does my number look big in this?====================
/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).*/

function narcissistic(value) {
	return [...`${value}`].map((num, i, arr) => num ** arr.length).reduce((summ, num) => summ + num) == value;
};

narcissistic(153);


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


//==========Hamming Distance==============
/*The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.*/

function hamming(a, b) {
	let res = [];
	for (let i = 0; i < a.length; i++) {
		a[i] === b[i] ? null : res.push(a[i]);
	};
};
// const hamming = (a, b) => [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0);



//==============Kids and candies=================
/*I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.

Every kid hates receiving less amount of candies than any other kids, and I don't want to have any candies left - giving it to my kid would be bad for his teeth.

However, not every kid invited will come to my birthday party.

What is the minimum amount of candies I have to buy, so that no matter how many kids come to the party in the end, I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?

It's ensured that at least one kid will participate in the party.*/

function candiesToBuy(kids) {
	let counter = 1;
	end = false;
	while (!end) {
		let check = counter;
		for (let i = 1; i <= kids; i++) {
			if (counter % i !== 0) {
				counter++;
				break;
			};
		};
		if (check === counter) {
			end = true;
		}
	}
	return counter;
};

console.log(candiesToBuy(10));






//========================Mexican Wave====================
function wave(str) {
	let str2 = str.split('');
	let result = [];
	str2.forEach((letter, index) => {
		if (letter !== ' ') {
			let array = str.split('');
			let upperLetter = letter.toUpperCase();
			array.splice(index, 1, upperLetter);
			result.push(array.join(''));
		};
	});
	return result;
};

// var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)





//=================Pair of gloves====================
/*Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.*/

function numberOfPairs(gloves) {
	let obj = [];

	gloves.forEach(color => {
		obj[color] ? obj[color] += 1 : obj[color] = 1;
	});

	let counter = 0;

	for (let key in obj) {
		counter += Math.floor(obj[key] / 2);
	};

};

// function numberOfPairs(gloves) {
// 	return [...new Set(gloves)].reduce((acc, el) => acc + ~~(gloves.filter(x => x === el).length / 2), 0);
// }



//=============Persistent Bugger=====================
/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.*/

function persistence(num) {
	let counter = 0;
	while (String(num).length > 1) {
		num = Number(String(num).split('').reduce((res, dig) => res * dig));
		counter++;
	};
	return counter;
};

persistence(123);



//============Simple Fun #242: Caesar Box Cipher Encoding=========
/*Caesar Box is a simple transposition cipher used in the Roman Empire. It is described as the following two-step process:

The characters of the given message are broken into n lines of equal lengths and stacked up.
The letters from the resulting rectangle are written from top to bottom column by column.
Given a string message, count the number of different n such that the message, obtained by applying encoding two times, is the same as initial message.*/

function caesarBoxCipherEncoding(message) {
	let counter = 0;
	for (let i = 2; i <= Math.floor(message.length / 2); i++) {
		if (message.length % i === 0) {
			counter++;
		};
	};
	return counter;
};




//sort anithing string

function order(words) {
	let obj = {};
	words.split(" ").forEach(word => obj[`${word.replace(/\w*(\d)\w*/g, "$1")}`] = word);
	console.log(obj);


	let res = [];
	for (let key in obj) {
		res.push(obj[key]);
	};

	console.log(res);
	return res.join(" ");
}

order("b2 a1 c3 d4");



//===============Sudoku board validator===================
function validateSudoku(board) {
	//====cheking rows==========
	for (let arr of board) {
		if (!checkingRow(arr)) {
			return false
		};
	};

	//====cheking columns========
	for (let i = 0; i < 9; i++) {
		let column = [
			board[0][i],
			board[1][i],
			board[2][i],
			board[3][i],
			board[4][i],
			board[5][i],
			board[6][i],
			board[7][i],
			board[8][i],
		];
		if (!checkingRow(column)) {
			return false;
		};
	};

	//======checking boxes========

	return true;
};

function checkingRow(arr) {
	let set = new Set(arr)
	return !(arr.indexOf(0) !== -1 || [...set].length !== arr.length)
}

const sudoku =
	[
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[2, 3, 4, 5, 6, 7, 8, 9, 1],
		[3, 4, 5, 6, 7, 8, 9, 1, 2],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[5, 6, 7, 8, 9, 1, 2, 3, 4],
		[6, 7, 8, 9, 1, 2, 3, 4, 5],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[8, 9, 1, 2, 3, 4, 5, 6, 7],
		[9, 1, 2, 3, 4, 5, 6, 7, 8],
	];

console.log(validateSudoku(sudoku));
console.log([0, 0, 0].indexOf(0));



//============Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!================
// function sumDigPow(a, b) {
// 	let arr = [];
// 	while (a !== b) {
// 		arr.push(a);
// 		a++;
// 	};
// 	return arr.filter(num => check(num));
// };

// function check(num) {
// 	return String(num).split('')
// 		.map((num, index) => Math.pow(Number(num), index + 1))
// 		.reduce((sum, num) => sum + num) === num;
// };


function sumDigPow(a, b) {
	let arr = [];
	while (a <= b) {
		String(num).split('')
			.map((num, index) => Math.pow(Number(num), index + 1))
			.reduce((sum, num) => sum + num) === num ? arr.push(a) : null;
		a++;
	};
	return arr;
};




/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It wil*/

// function isValidWalk(walk) {
// 	if (walk.length === 10) {
// 		// a = -1;
// 		// w = 2;
// 		// d = 1;
// 		// s = -2;
// 		let res = walk.map(elem => {
// 			if (elem === 'a') {
// 				return -1;
// 			} else if (elem === 'w') {
// 				return 2;
// 			} else if (elem === 'd') {
// 				return 1;
// 			} else if (elem === 's') {
// 				return -2;
// 			}
// 		}).reduce((a, e) => a + e);
// 		return res === 0;

// 	} else {
// 		return false;
// 	}
// } 

function isValidWalk(walk) {
	walk.join(' ').replace()
}
		// w = -1;
		// n = 2;
		// e = 1;
		// s = -2;



//============Title Case=============
/*A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.*/

function titleCase(title, minorWords) {



	console.log('title case');
	// return title.split(' ').map((word) => {
	// 	new RegExp(word).test(minorWords) ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1, -1).toLowerCase();
	// }).join(' ');

	let arr = title.split(' ');
	let newArr = arr.map((word, index) => {
		let has = minorWords ? new RegExp("\s" + word + "\s", 'ig').test(minorWords) : false;
		let res;
		if (has && index !== 0) {
			res = word.toLowerCase();
		} else {
			res = word[0].toUpperCase() + word.slice(1).toLowerCase();
		};
		return res;
	});
	return newArr.join(' ');
}

titleCase("First a of in", "an often into");




//==========Unique In Order======================
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	// let arr = iterable.split('');
	// let result = [arr[0],];

	// for (let i = 1; i < arr.length; i++) {
	// 	if (arr[i - 1] != arr[i]) {
	// 		result.push(arr[i])
	// 	};
	// };

	// return result

	return [...iterable].filter((elem, index) => index === 0 || elem !== iterable[index - 1])
};



/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.*/

function expandedForm(num) {
	let arr = [];
	let divider = 10;

	for (let i = 0; i < String(num).length; i++) {
		let res = num % divider;

		if (i === 0) {
			arr.push(res);
		} else {
			let x = num % (divider / 10);
			if (res !== x) {
				arr.push(res - x);
			};
		};
		divider *= 10;
	};

	let e = num % 10000;
	return arr.reverse().join('!').replace(/!/g, ' + ');




	// let a = num % 10; 4
	// let b = num % 100 - a; 24 
	// let c = num % 1000 - b - a; 324
	// let d = num % 10000 - c - b - a; 2324

}

let res = expandedForm(20324);


//===========2D / 1D array coordinates mapping====================
/*Hello! Your are given x and y and 2D array size tuple (width, height) and you have to:

Calculate the according index in 1D space (zero-based).
Do reverse operation.*/

function to1D(x, y, size) {
	return;
}

function to2D(n, size) {
	return;
}



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





//========Cats and shelves===============
/*An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:*/

/*Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)*/

function solution(start, finish) {
	let counter = 0;
	while (start !== finish) {
		if (start + 3 < finish) {
			start += 3;
		} else if (start + 3 >= finish) {
			start += 1;
		}
		counter++;
	}
	return counter;
}

let cats = solution(835, 1426);
console.log(cats);

// const solution = (start, finish, difference = finish - start) =>
//   Math.floor(difference / 3) + difference % 3



/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.*/

function checkExam(array1, array2) {
	let counter = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array2[i] !== '') {
			if (array2[i] === array1[i]) {
				counter += 4;
			} else {
				counter -= 1;
			};
		};
	};
	return counter < 0 ? 0 : counter;
}




//=========Complementary DNA===============
/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/

function DNAStrand(dna) {
	return dna.split('').map(letter => {
		switch (true) {
			case letter === 'A':
				return 'T';
			case letter === 'C':
				return 'G';
			case letter === 'T':
				return 'A';
			case letter === 'G':
				return 'C';
			default: letter;
		};
	}).join('');
};

console.log(DNAStrand('ATTGC'));

// const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);



//============Construct Submatrix====================
/*Task
Given a matrix, find its submatrix obtained by deleting the specified rows and emptying the specified columns.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers.

1 ≤ matrix.length ≤ 10,

1 ≤ matrix[0].length ≤ 10,

0 ≤ matrix[i][j] ≤ 9.

[input] integer array rowsToDelete

Array of indices (0-based) of rows to be deleted.

0 ≤ rowsToDelete.length ≤ 5,

0 ≤ rowsToDelete[i] < matrix.length.

[input] integer array columnsToDelete

Array of indices (0-based) of columns to be deleted.

0 ≤ columnsToDelete.length ≤ 5,

0 ≤ columnsToDelete[i] < matrix[0].length.

[output] 2D integer array*/

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
	let res = [];
	matrix.forEach((elem, index) => {
		if (rowsToDelete.indexOf(index) === -1) {
			columnsToDelete.forEach(position => elem.splice(position, 1, ""));
			elem = elem.filter(num => num !== '');
			res.push(elem)
		};
	});
	return res;
};

// function constructSubmatrix(matrix, rows, cols) {
//   return matrix.filter((row,i) => rows.indexOf(i) === -1).map(row => row.filter((col,i) => cols.indexOf(i) === -1));
// }







//======Count consonants==========
/*Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/

function consonantCount(str) {
	str = str.length ? str.match(/[a-zA-Z]/g) : 0;
	return str ? str.join('').replace(/[aeoui]/ig, '').length : 0;
};
// const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;




//===========Count the divisors of a number====================
function getDivisorsCnt(n) {
	let counter = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			counter++;
		};
	};
	return counter;
}

// const getDivisorsCnt = n =>
//   [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);


//===============Cubes in the box========================
/* Your job is to write a function f(x,y,z) to count how many cubes of any size can fit inside a x*y*z box. For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end. See the animation below for a visual description of the task!*/

function f(x, y, z) {
	let counter = 0;
	let min = Math.min(x, y, z);

	for (let i = 1; i <= min; i++) {
		counter += (x * y * z) / (i * i * i);
	};

	return Math.ceil(counter);
};

console.log(f(2, 2, 3));



//============Find the capitals=================
/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.*/

var capitals = function (word) {
	console.log("find the capitals");
	return word.split('').map(letter => letter === letter.toUpperCase() ? word.indexOf(letter) : "x")
		.filter(elem => elem != "x");
};

// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

capitals("WpDDppR");


//==========find the middle element============
/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).*/

function gimme(triplet) {
	return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
};




//============GrowthOfAPopulation==================

/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?*/

function nbYear(p0, percent, aug, p) {
	let counter = 0;
	while (p0 < p) {
		p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug);
		++counter;
	}
	return counter;
}



//==============Highest and Lowest===============
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers) {
	if (!/\s+/.test(numbers)) { return `${numbers} ${numbers}` };
	return numbers.split(' ')
		.sort((a, b) => b - a)
		.filter((_, index, arr) => index === 0 || index === arr.length - 1)
		.join(' ');
};
// function highAndLow(numbers) {
// 	var arr = numbers.split(' ').sort(function (a, b) { return a - b });
// 	return arr[arr.length - 1] + ' ' + arr[0];
// }



//===========isogramm================
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.*/

function isIsogram(str) {
	str = str.toLowerCase();
	const set = new Set([...str]);
	return [...set].join('') === str;
};

// function isIsogram(str) {
// 	return !/(\w).*\1/i.test(str)
// }



//===============Maximum Length Difference====================
/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).*/

function mxdiflg(a1, a2) {
	a1 = a1.map(elem => elem.length);
	a2 = a2.map(elem => elem.length);
	return Math.max(...a1, ...a2) - Math.min(...a1, ...a2);
};

mxdiflg(['123', '1234', '123456789', '12'], ['123', '123456', '1']);



//=============== Simple Fun #34: Numbers Grouping =================
/*You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 x 104, ..., the 100th one should contain numbers from 99 x 104 + 1 to 106 and so on.*/

function numbersGrouping(a) {
	console.log('numbersGrouping');
	// let obj = {};
	// a.forEach(num => {
	// 	let groupIndex = Math.trunc(num / 10000 - 0.01);
	// 	obj[groupIndex] ? obj[groupIndex] += 1 : obj[groupIndex] = 1;
	// });
	// let counter = 0;
	// for (let key in obj) {
	// 	counter += (obj[key] + 1);
	// };
	// return counter;

	return [...new Set(a.map(num => Math.trunc(num / 10000 - 0.0001)))].length + a.length;
};

numbersGrouping([10000, 1]);
//=================Ones and Zeros===========================

/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryArrayToNumber = arr => {
	console.log('Ones and Zeros');
	let res = parseInt(arr.join(""), 2);
	return res;
};

binaryArrayToNumber([0, 0, 0, 1]);



//===========Pair Zeros================

/*For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.*/

function pairZeros(arr) {
	return arr.join('').replace(/([1-9]*0[1-9]*)0/g, '$1').split('').map(str => +str);
};

console.log(pairZeros([1, 0, 2, 0, 3, 0]));



//===========remove conestive duplicate words =============
/*Your task is to remove all consecutive duplicate words from a string, leaving only first words entries*/

const removeConsecutiveDuplicates = s => s.split(' ').filter((w, i, a) => w !== a[i + 1]).join(' ');



//================Simple string characters=====================
/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.*/

function solve(s) {
	console.log();
	return [
		(s.match(/[A-Z]/g) || []).length,
		(s.match(/[a-z]/g) || []).length,
		(s.match(/\d/g) || []).length,
		(s.match(/[^a-zA-Z0-9]/g) || []).length,
	];
};

console.log(solve("abcdABCD1234"));

// function solve(s){
// 	return [/[A-Z]/,/[a-z]/,/\d/,/[^a-z\d]/i].map(x=>s.split(x).length-1)
//  }



//==============Small enough? - Beginner=======================
/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

function smallEnough(a, limit) {
	return a.filter(num => num > limit).length === 0;
}

// smallEnough = (a, l) => a.every(e => e <= l)



//==============Summing a number's digits================
/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.*/

function sumDigits(number) {
	return `${Math.abs(number)}`.split('').reduce((summ, num) => summ + Math.abs(+num), 0);
};

sumDigits(-10);



//=======Summ of minimum============
/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/



function sumOfMinimums(arr) {
	return arr.reduce((summ, array) => summ + Math.min(...array), 0);
}


//==========Beginner Series #3 Sum of Numbers============
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum(a, b) {
	let arr = [a, b].sort((a, b) => a - b);
	let counter = arr[0];
	let summ = 0;
	while (!(counter > arr[1])) {
		summ += counter;
		counter++;
	};
	return summ;
}

getSum(10, 5);

//=======best practic==========================
// function GetSum(a, b) {
// 	return (a + b) * (Math.abs(a - b) + 1) / 2;
//  }


//================Sum of two lowest positive integers=======================
/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/

function sumTwoSmallestNumbers(numbers) {
	// return numbers.splice(numbers.indexOf(Math.min(...numbers)), 0) + Math.min(...numbers);
	let index = numbers.indexOf(Math.min(...numbers));
	let a = +(numbers.splice(index, 1).join(''));
	let b = Math.min(...numbers);
	return a + b;
};

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// function sumTwoSmallestNumbers(numbers) {
// 	var result = numbers.sort(function(a,b){return a - b});
// 	return result[0] + result[1]
//  };



//================testing 1- 2- 3===========================
function number(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(`${i + 1}: ${arr[i]}`);
	};
	return res;
};

let www = number(['a', 'b', 'c']);

// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)




//============The Coupon Code=======================
/*Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (enteredCode === correctCode) &&
		convertDate(expirationDate) >= convertDate(currentDate);
}

function convertDate(date) {
	return new Date(date.split(' ').reverse().join(' '))
};







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



//============twoFightersOneWnner===============
/*Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.*/

function declareWinner(fighter1, fighter2, firstAttacker) {
	let first = fighter1.name === firstAttacker ? fighter1 : fighter2;
	let second = first.name === fighter1.name ? fighter2 : fighter1;

	while (first.health > 0 && second.health > 0) {
		second.health -= first.damagePerAttack;
		if (second.health <= 0) {
			break;
		} else {
			first.health -= second.damagePerAttack;
		}
	};


	return first.health <= 0 ? second.toString() : first.toString();
};

let winner = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");


function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () { return this.name; }
};

console.log(winner);


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






//==========calculate BMI=========
/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
	let BMI = weight / (height ** 2);
	if (BMI <= 18.5) {
		return "Underweight";
	};
	if (BMI > 18.5 && BMI <= 25) {
		return "Normal";
	};
	if (BMI > 25 && BMI <= 30) {
		return "Overweight";
	};
	if (BMI > 30) {
		return "Obese";
	}
};


console.log(bmi(80, 1.80));

// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";
/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/
function boolToWord(bool) {
	bool ? 'Yes' : 'No'
}



//==========count by x================
/*Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.*/

function countBy(x, n) {
	let arr = [];
	let y = x;
	for (let i = 0; i < n; i++) {
		arr[i] = y;
		y += x;
	};
	return arr;
}

console.log(countBy(2, 10));

// const countBy = (x, n) =>
//   [...Array(n)].map((_, idx) => ++idx * x);

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)



//==========Find the first non-consecutive numbe============
/*Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.*/

function firstNonConsecutive(arr) {
	let res = arr.filter((num, index) => index > 0 && num - arr[index - 1] > 1)[0];
	return res || res === 0 ? res : null;
}
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


/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/

function litres(time) {
	return Math.floor(time * 0.5);
};

// function litres(time) {
// 	return time>>1
//  }





//================Multiplication table for number==============
/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.*/

function multiTable(number) {
	let res = '';

	for (let i = 10; i >= 1; i--) {
		let str = String(`${i} * ${number}  = ${number * i}`);
		res = `${str}${res.replace(`${i + 1}`, `\\n${i + 1}`)}`;
	};

	return res;
}



//========= Name Shuffler ==============
/*Write a function that returns a string in which firstname is swapped with last name.*/
function nameShuffler(str) {
	return str.split(' ').reverse().join(' ');
}



//===============No zeros for heros===================
/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.*/

function noBoringZeros(n) {
	return String(n).replace(/0+$/, '');
};
let counter = 0;
function id() {
	return counter++;
};

console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());
console.log(id());




//===============Super Duper Easy==================
const problem = (x) => {
	return typeof x === 'number' ? x * 50 + 6 : "Error";
};

let sdsdsds = problem(10);



//================Volume of a Cuboid===============
/*Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.*/

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return length * width * height
	}
}