const notes = require('./data/notes');

const getNewNotesByCreditsList = () => {
  const getMultiplyNotesByCredits = notes.map(item => {
    const multEachNoteByEachCard = item.note * item.credit;
    return multEachNoteByEachCard;
  });
  return { getMultiplyNotesByCredits };
}

const sumEachNumsFromNotesByCreditsList= () => {
  const { getMultiplyNotesByCredits } = getNewNotesByCreditsList();
  const sumEachItem = getMultiplyNotesByCredits.reduce((acc, item) => {
    const itemsSum = acc + item;
    return itemsSum;
  });
  return { sumEachItem };
}

const getCreditsList = () => {
  const creditsList = notes.map(item => item.credit);
  return { creditsList };
}

const getSumCreditsList = () => {
  const { creditsList } = getCreditsList();
  const sumCreditsArray = creditsList.reduce((acc, currentCredit) => {
    const sumEachCredit = acc + currentCredit;
    return sumEachCredit;
  });
  return { sumCreditsArray };
}

const divideBothSums = () => {
  const { sumEachItem } = sumEachNumsFromNotesByCreditsList();
  const { sumCreditsArray } = getSumCreditsList();
  const div = sumEachItem / sumCreditsArray;
  return div;
}

console.log(divideBothSums());
