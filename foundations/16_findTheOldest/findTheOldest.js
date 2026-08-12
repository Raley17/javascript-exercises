const findTheOldest = (arr) =>
  arr.reduce((lastGuy, nextGuy) => {
    const lastGuyDeath = lastGuy.yearOfDeath || new Date().getFullYear();
    const nextGuyDeath = nextGuy.yearOfDeath || new Date().getFullYear();

    const edadLastGuy = lastGuyDeath - lastGuy.yearOfBirth;
    const edadNextGuy = nextGuyDeath - nextGuy.yearOfBirth;
    return edadLastGuy > edadNextGuy ? lastGuy : nextGuy;
  });

// Do not edit below this line
module.exports = findTheOldest;
