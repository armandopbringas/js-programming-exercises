const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const arrayLevels = data.map(item => item.level);
const recurrentLevels = arrayLevels.reduce((accumulator, currenValue) => {
	if(!accumulator[currenValue]) {
		accumulator[currenValue] = 1;
	} else { 
		accumulator[currenValue] = accumulator[currenValue] + 1;
	}
	return accumulator;
}, {});

console.log(recurrentLevels);
