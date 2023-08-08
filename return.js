function bringSingara(price1, price2, quantity) {
  var total = price1 + price2;
  var result = total / quantity;
  return result;
}

console.log(bringSingara(20, 10, 3));
