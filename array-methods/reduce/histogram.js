const nums = [ 3, 4, 2, 6, 3, 4, 1, 6, 6, 2 ];

const histogram = nums.reduce((accumulator, currenValue) => {
	if (!accumulator[currenValue]) accumulator[currenValue] = 1; 
	else accumulator[currenValue] = accumulator[currenValue] + 1;
	return accumulator;
}, {});

console.log(histogram);
