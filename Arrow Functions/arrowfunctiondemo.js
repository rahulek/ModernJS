const books = [
  {
    name: "Famous Speeches",
    author: "Seneca",
    published: 1978,
  },
  {
    name: "Saladin",
    author: "John Man",
    published: 2016,
  },
  {
    name: "Kublai Khan",
    author: "John Man",
    published: 2014,
  },
  {
    name: "History of Rome",
    author: "Titus Livy",
    published: 104,
  },
  {
    name: "Hannibal in Rome",
    author: "Contemporary",
    published: 2008,
  },
];

//normal function as a parameter to the filter()
const booksPublishdAfter2000 = books.filter(function (book) {
  return book.published >= 2000;
});

console.log(booksPublishdAfter2000);

//Same function but with an arrow syntax
const booksFilteredArrowVersion = books.filter(
  (book) => book.published >= 2000
);
console.log(booksFilteredArrowVersion);

//Exercise -
// Using the same array above
//   write an arrow function based function which finds out an exact book given its name
