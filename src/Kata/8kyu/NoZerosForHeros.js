


//===============No zeros for heros===================
/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.*/

function noBoringZeros(n) {
	return String(n).replace(/0+$/, '');
};