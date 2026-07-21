const sumAll = function (a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    let sumIt = 0;
    if (a > b) {
      for (let i = b; i <= a; i++) {
        sumIt += i;
      }
    } else {
      for (let i = a; i <= b; i++) {
        sumIt += i;
      }
    }
    return sumIt;
  } else {
    return "ERROR";
  }
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
