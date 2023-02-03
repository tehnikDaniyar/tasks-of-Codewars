

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



//==============Small enough? - Beginner=======================
/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

function smallEnough(a, limit) {
	return a.filter(num => num > limit).length === 0;
}

// smallEnough = (a, l) => a.every(e => e <= l)


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




//===============Super Duper Easy==================
const problem = (x) => {
	return typeof x === 'number' ? x * 50 + 6 : "Error";
};

let sdsdsds = problem(10);