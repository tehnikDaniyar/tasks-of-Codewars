


//============Decode the woofs!===================
/*Justin has an exceptionally smart dog. In the latest show of its unparalleled intelligence, the dog learned to communicate human words. To do that, it woofs the exact number of times it takes to get to the right letter in the English alphabet. For example, if the dog is interested in the letter "A", it woofs just one time, if it's "B", it woofs two times and so on. Justin is amazed by his pet, but he also finds it challenging to translate the woofs in his head. Write a decoder for him that takes a string of hyphen-separated woofs and returns their human-language representation*/

function woofDecoder(str) {
	console.log('woof');
	const woof = new RegExp(/\.*w\.*o\.*o\.*f\.*/, 'gi');
	const template = '_abcdefghijklmnopqrstuvwxyz';
	let arr1 = str.split('!');
	let res = ''.search(woof);
	// let leters = arr.map(voices => template[voices.split('-').filter(voice => voice.search(woof) !== -1).length]);
	// console.log(leters);
	// let arr2 = arr1.split('-');
	// let arr3 = arr2.filter(x => x.search(woof));

}

woofDecoder("Woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!Woof-woof-woof-woof!Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof!");

