const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const arra = [1, 2, 3, 4];

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

const multiply = (arr) => arr.reduce((total, num) => total * num, 1);

const power = (a, b) => a ** b;

const factorial = (a) => {
  let result = 1;
  for (let i = 1; i <= a && i > 0; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
