//-- Array filter

let books = [
  {
    name: "Collapse of Rome",
    author: "Livy",
    price: 876,
  },
  {
    name: "Hannibal in Rome",
    author: "Procopius",
    price: 345,
  },
  {
    name: "SPQR",
    author: "Mary Beard",
    price: 1456,
  },
  {
    name: "Roman Lives",
    author: "Plutarch",
    price: 564,
  },
];

//Get all the book that that "Rome" word in it
let romeBooks = books.filter(function (book) {
  return book.name.includes("Rome");
});
console.log(`All Rome books: `, romeBooks);

//Get all the book with price between 500 and 1000
let booksWellPriced = books.filter(function (book) {
  return book.price >= 500 && book.price <= 1000;
});
console.log(`All well priced book: `, booksWellPriced);

//Exercise
//  1. Trains Script
//  2. Keep or create an array of train objects
//  3. Filter out the array - find all trains starting from a particualr station
//  4. Filter out - find all trains with numWagons > 10
