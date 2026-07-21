const repeatString = function (str, num) {
  return num < 0 ? "ERORR" : str.repeat(num);
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
