//-- Arrays search: indexOf and findIndex methods

let books = [
  {
    name: "Book 1",
    price: 1234,
  },
  {
    name: "Book 2",
    price: 345,
  },
  {
    name: "Book 3",
    price: 876,
  },
  {
    name: "Book 10",
    price: 876,
  },
  {
    //empty book
  },
];

let salaries = [10345, 12444, 9876, {}];

//indexOf
let index = salaries.indexOf(10345);
console.log(`index: ${index}`);
//element does not exist: expect -1
index = salaries.indexOf(-45);
console.log(`index: ${index}`);
//empty book object
//It exists but the indexOf() returns -1 (not found)
//Why? - objects are reference variables
//{} passed in as a param and {} inside the salaries
//are different objects
//indexOf() compares values with === which returns false
//for two object comparisons (See Ref - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
index = salaries.indexOf({});
console.log(`index: ${index}`);

//findIndex method useful for searching the array of objects
//find a 1st book with a price < 400
let bookIndex = books.findIndex(function (book) {
  return book.price < 400;
});
console.log(`bookindex: ${bookIndex}`);

//find a first book with price = 876
bookIndex = books.findIndex(function (book) {
  return book.price === 876;
});
console.log(`bookindex: ${bookIndex}`);

//Exercise
// Inside the trains script
//  1. Keep the string array containing the train names
//  2. Keep or create another array containing train objects - {number, source, dest, numWagons}
//  3. Using indexOf(), find out 1st train name matching an element in the trainNames array
//  4. Using findIndex(), find 1st train that has > 10 wagons (for ex)
//  5. Using findIndex(), find 1st train that starts from "Mumbai" (for ex)
