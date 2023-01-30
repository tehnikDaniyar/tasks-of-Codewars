



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

