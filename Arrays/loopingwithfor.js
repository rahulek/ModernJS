//-- JS Arrays - for loop for iterating over the arrays

//Sample array
let books = [
  "History of Civilization",
  "The Great Escape",
  "Iran Travellers's Guide",
];

//for loop in JS is similar to C and Java
//3 parts - initializer list, loop condition, post block
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}
console.log(`----------------`);

//for loops are flexible, we can start in between too
for (let i = 2; i < books.length; i++) {
  console.log(books[i]);
}
console.log(`----------------`);

//OR you can traverse the array in reverse
for (let i = books.length - 1; i >= 0; i--) {
  console.log(books[i]);
}
console.log(`----------------`);
