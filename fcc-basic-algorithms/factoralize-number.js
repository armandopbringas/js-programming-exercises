let num;

const factorialize = num => {
	let prod = 1;
  for (let i = 1; i <= num; i++) {
    prod *= i;
  }
	return prod;
}

console.log(factorialize(5));
