//--Array iteration using forEach method
//   - forEach() is an Array methods and therefore
//     must be invoked on an array variables.
//  -  function is used as its parameter
//  -  this function takes 3 params (2 most useful) - value, index
//  -  the function can process the val as required

//sample array
let books = [
  {
    name: "History of Civitilization",
    author: "Will Durant",
    published: 1944,
  },
  {
    name: "The Gallic Wars",
    author: "Julius Caesar",
    published: -40, //40 BC
  },
  {
    name: "Italy Travel",
    author: "Lonely Planet",
    published: 2009,
  },
];

//iterate
//The passed in function gets one book at a time and
//it only accesses the name of the book and prints it
books.forEach((value, index) => {
  console.log(`${index + 1}:`, value.name);
});

//Exercise
// Inside the trains script
//  - Keep the array of strings as names of the trains
//  - Iterate the array with for loop syntax
//     - do forward traversal
//     - do backward traversal
//  - Itertate the array with forEach
//    - print index and train name
