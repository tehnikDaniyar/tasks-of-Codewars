


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