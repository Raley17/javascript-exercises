const convertToCelsius = function (num) {
  const toCel = (num - 32) * (5 / 9);
  return toCel.toFixed(1);
};

const convertToFahrenheit = function (num) {
  const toFah = num * (9 / 5) + 32;
  return toFah.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
