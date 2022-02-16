const listNums = [ 1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, ];
const listOneCount = {};

const newListNume = listNums.map(el => {
  if (!listOneCount[el]) listOneCount[el] = 1;
  else listOneCount[el] += 1;
});

const getModa = () => {
  const listOneArr = Object.entries(listOneCount);
  const arrSorted = listOneArr.sort((elA, elB) => elA[1] - elB[1]);
  const moda = arrSorted[listOneArr.length - 1];
  return moda;
}

console.log(getModa());