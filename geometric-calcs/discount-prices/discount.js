const clacDisaccountPrice = () => {
  const price = document.querySelector('#price');
  const disaccount = document.querySelector('#disaccount');
  const priceInteger = parseInt(price.value);
  const disaccountInteger = parseInt(disaccount.value);
  const disaccountPrice = (priceInteger * (100 - disaccountInteger)) / 100;
  const outputRes = document.querySelector('#outputResult');
  const printRes = outputRes.innerHTML = disaccountPrice;
  return printRes;
}
