const findLongestWordLength = str => {
  const getEachWord = str.split(' ');
  const getLongestWord = getEachWord.reduce((l, w) => {
    return Math.max(l, w.length);
  }, 0);
  return getLongestWord;
}

console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
