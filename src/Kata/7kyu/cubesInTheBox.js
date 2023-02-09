//===============Cubes in the box========================
/* Your job is to write a function f(x,y,z) to count how many cubes of any size can fit inside a x*y*z box. For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end. See the animation below for a visual description of the task!*/

function f(x, y, z) {
	let counter = 0;
	let min = Math.min(x, y, z);

	for (let i = 1; i <= min; i++) {
		counter += (x * y * z) / (i * i * i);
	};

	return Math.ceil(counter);
};

console.log(f(2, 2, 3));