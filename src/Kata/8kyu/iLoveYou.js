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