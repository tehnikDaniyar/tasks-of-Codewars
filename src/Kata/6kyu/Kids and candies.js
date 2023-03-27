

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

