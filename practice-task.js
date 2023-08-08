function getAverage() {
  var arr = [23, 54, 23, 21, 76, 167, 43];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var res = arr[i];
    var calc = (sum += res);
    var result = calc / 7;
  }
  return result;
}

console.log(getAverage());
