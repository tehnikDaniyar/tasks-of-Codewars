


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
