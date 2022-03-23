const numbers = [ 1, 30, 49, 29, 10, 13 ];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) rta = element;
}

console.log(rta);

const findNum = numbers.find(item => item === 30);

console.log(findNum);
