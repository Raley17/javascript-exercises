const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// const getTheTitles = arr.map((arr) => arr.title);
const getTheTitles = (arr) => arr.map((item) => item.title);

console.table(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
