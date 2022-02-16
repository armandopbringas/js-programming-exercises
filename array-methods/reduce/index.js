const nums = [ 1, 2, 3, 4, 5 ];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
	const iteration = nums[i];
	sum = `${iteration} + ${sum}`;
	//console.log(sum);
}

//console.log(sum);

const outputProcess = nums.reduce((acc, currentIndex) => `${acc} + ${currentIndex}`, 0);
const resultProcess = nums.reduce((acc, currentIndex) => acc + currentIndex, 0);

console.log(outputProcess);
console.log(resultProcess);

const frstOutputProcess = nums.reduce((acc, currentIndex) => `${acc} + ${currentIndex}`, 0);
const frstResultProcess = nums.reduce((acc, currentIndex) => acc + currentIndex, 0);

console.log(frstOutputProcess);
console.log(frstResultProcess);
