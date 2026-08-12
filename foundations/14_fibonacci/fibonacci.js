const fibonacci = function (num) {
  let a = 0,
    b = 1;
  for (let i = 0; i < num; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
