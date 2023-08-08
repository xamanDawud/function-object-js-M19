function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

const result1 = add(23, 54);
const result2 = add(54, 25);
const result3 = add(result1, result2);

console.log(result1);
console.log(result2);
console.log(result3);
