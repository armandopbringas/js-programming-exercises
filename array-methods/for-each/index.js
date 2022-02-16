const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for(let i =0; i < alphabet.length; i++) {
	const letter = alphabet[i];
	console.log('printed with for loop', letter);
}

const loopAlph = alphabet.forEach(letter => console.log('printed with forEch method', letter));
