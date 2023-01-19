

//=======Give me a Diamond============6 kyu=======
/*Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.*/

function diamond(n) {
	let arr = [];
	let a = '*';
	let counter = -1;
	let flag = true;
	for (let i = 0; i < n; i++) {
		if (flag) {
			a += '**';
			counter += 2;
			counter === n ? flag = false : null;
		} else {
			a -= '**';
			counter -= 2;
		};
		arr.push(a);
	};
	return arr;
};

diamond(5);