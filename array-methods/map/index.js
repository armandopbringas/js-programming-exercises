// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// for(i = 0; i < alphabet.length; i++) {
// 	const letter = alphabet[i];
// 	newAlphabet.push(letter + '++');
// }

// const newAlphabet = alphabet.map(letter => letter + '++');

// console.log('Original arr', alphabet);
// console.log('Arr copy', newAlphabet);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];


const newOedersArr = orders.map(item => item.total);
const addPropToNewArr = orders.map(item => ({ ...item, tax: 0.5 }));

console.log('original', orders);
console.log('arrat with new prop', addPropToNewArr);