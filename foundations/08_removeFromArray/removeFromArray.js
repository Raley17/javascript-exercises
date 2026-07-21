const removeFromArray = function (arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === num) {
      arr.splice(i, 1);
    } else {
    }
  }
};

let arrayKnown = [1, 2, 3, 4];

removeFromArray(arrayKnown, 3);

console.log(arrayKnown);

// Do not edit below this line
module.exports = removeFromArray;
