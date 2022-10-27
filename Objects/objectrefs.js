//-- JS functions receive objects are references
//   If the called function modifies any property
//   of the passed-in object, its reflected also
//   in the caller's view of that object.

let book = {
  name: "The Twelve Caesars",
  author: "Suetonius",
  lang: "Latin",
  genre: "Roman History",
  price: 789,
};

//A function that processes the given book
//and modifies its price
let processBook = function (book) {
  book.price = 700; //after discount, for example
};

console.log(`Book price before processing: ${book.price}`);
//Now process the book
processBook(book);
//Should show the modified price
console.log(`Book price after processing: ${book.price}`);
console.log(`-----------------------`);

//Case 2: the function sets the object ref to null
let strangeFn = function (book) {
  book = null;
};

//print the book before
console.log(book);
//what should happen to book after this call?
strangeFn(book);
//print the book again
console.log(book);

//Exercise
//Create a student object
//  properties: name and totalCredits
//Write 3 functions:
//  addCredits(student, numCredits) -> Added numCredits to the existing credits
//  deductCredits(student, numCredits) -> Deducts numCredits from the existing credits
//Invoke these functions in various combinations on the student object
//Print the results with console.log()
