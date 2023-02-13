


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