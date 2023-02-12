


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
