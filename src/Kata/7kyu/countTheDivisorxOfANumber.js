


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

