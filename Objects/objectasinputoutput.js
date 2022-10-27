//JS Objects are most useful when they
//are passed into the functions OR get
//returned as an object.
//This is because, functions typically can return
//only one data item. When a function needs to return
//more than one item, objects come to help.
//The function can bundle the items as various properties
//and return that object to the caller

//Ex1 - passing object as parameter into the function
let mkGandhiBook = {
  name: "My Experiments with Truth",
  author: "M.K.Gandhi",
  genre: "autobiography",
  price: 134,
};

//A function that receives a book and processes a discount
let processDiscount = function (book) {
  //Discount logic --- not important
  //book object has been passed-in

  //Show the object
  console.log(book);
};

//A function that receives a book and return an object that with
//a new serial number and the price tag
let preBookSale = function (book) {
  //Return an object, some fake data
  return {
    serial: 1234,
    name: book.name,
    author: book.author,
    genre: book.genre,
    pricetag: book.price - 10, //apply some discount
    shelf: "A1",
  };
};

//Pass in a book
processDiscount(mkGandhiBook);

//Pass in a book and get its taginfo
let booktagInfo = preBookSale(mkGandhiBook);
console.log(booktagInfo);

//Exercise:
// Define a train with the properties -
//   number, source, destination, numWagons
// Initialize the object with suitable values
// Write a function that takes in train object
// and returns another object. The returned object
// has these properties - number and summaryString
//  SummaryString = 'Train number XXX run between
//  PPP and QQQ and has NNN wagons.'
