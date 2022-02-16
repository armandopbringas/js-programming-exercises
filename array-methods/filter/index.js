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
const words = ['spray', 'limit', 'elite', 'exuberant'];
const newArr = [];

for (let i = 0; i < words.length; i++) {
  const item = words[i];
  if (item.length >= 6) {
    newArr.push(item);
  }
}

const shortWords = words.filter(item => item.length >= 6);
const deliveredOrders = orders.filter(deliveredOrder => deliveredOrder.delivered);
const lowCostOrders = orders.filter(lowCostOrder => lowCostOrder.total <= 100);

const searcher = query => {
  const filterItems = orders.filter(item => {
    const searchByChar = item.customerName;
    const charSearcher = searchByChar.includes(query);
    return charSearcher;
  })
  return filterItems;
}

