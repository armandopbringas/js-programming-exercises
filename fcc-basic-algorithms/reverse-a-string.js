const reverseString = str => {
	const revertStr = str.split("").reverse().join("");
	console.log(revertStr);
}

reverseString("hello");
