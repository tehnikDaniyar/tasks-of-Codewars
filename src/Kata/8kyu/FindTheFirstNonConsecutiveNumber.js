


//==========Find the first non-consecutive numbe============
/*Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.*/

function firstNonConsecutive(arr) {
	let res = arr.filter((num, index) => index > 0 && num - arr[index - 1] > 1)[0];
	return res || res === 0 ? res : null;
}