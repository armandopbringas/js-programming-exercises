const nums = Array.from({lenght: 30}, (_, i + 1));

const fizzBuzz = () => {
	nums.forEach(num => {
		if (i % 3 === 0 && i % 5 == 0) return console.log("FizzBuzz");
		if (i % 3 === 0) return console.log("Fizz");
		if (i % 5 === 0) return console.log("Buzz");
		return console.log(num);
	});
}

fizzBuzz();
