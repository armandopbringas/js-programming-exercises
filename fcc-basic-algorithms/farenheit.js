let celcius;

const convertToFarenheit = celcius => {
	const farenheit = celcius * (9 / 5) + 32;
	return farenheit;
}

console.log(convertToFarenheit(30));

