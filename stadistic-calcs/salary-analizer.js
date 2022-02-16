const salariesData = require('./data/data');

const isPair = number => (number % 2 === 0);

const average = list => {
  const sumList = list.reduce((accVal = 0, newEl) => accVal + newEl);
  const listPromedy = sumList / list.length;
  return listPromedy;
}

const medianSalareies = list => {
  const middle = parseInt(list.length / 2);
  if (isPair(list.length)) {
    const midEmpOne = list[middle - 1];
    const misEmpTwo = list[middle];
    const bothMidEmployers = [midEmpOne, misEmpTwo];
    const median = average(bothMidEmployers);
    return median;
  } else {
    const middleEmployer = list[middle];
    return middleEmployer;
  }
}

const getMedian = () => {
  const salaries = salariesData.map(employer => employer.salary);
  const sortedSalaries = salaries.sort((salaryA, salaryB) => salaryA - salaryB);
  const medianGeneral = medianSalareies(sortedSalaries);
  return { medianGeneral, sortedSalaries };
}

const medianTopTenPorcent = () => {
  const { sortedSalaries } = getMedian();
  const spliceStart = (sortedSalaries.length * 90) / 100;
  const spliceCount = sortedSalaries.length - spliceStart;
  const topTenSalaries = sortedSalaries.splice(spliceStart, spliceCount);
  const topTenMedianSalaries = medianSalareies(topTenSalaries);
  return topTenMedianSalaries;
}

console.log(getMedian());
console.log(medianTopTenPorcent());