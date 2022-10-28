//-- JS arrays are declared with [] brackets
//   Array elements are separated by commas
//   Array can be empty at declaration
//   Contents can be of mixed data types

//Array declared and initialized to all numbers
let scores = [10, 78, 54, 23];

//Array of strings
let games = ["cricket", "hockey", "soccer"];

//Array of functions
let functions = [
  function () {
    console.log("First function");
  },
  function () {
    console.log("second function");
  },
];

//Array of objects - most useful
let players = [
  {
    name: "Player 1",
    age: 18,
    debut: 1989,
  },
  {
    name: "Player 2",
    age: 23,
    debut: 1971,
  },
  {
    name: "Player 3",
    age: 21,
    debut: 1987,
  },
];

//Mixed Data Types - not very useful
let mixedArr = [123, "Cricket", 3.1415, () => console.log("")];

console.log(scores);
console.log(games);
console.log(functions);
console.log(players);
console.log(mixedArr);

//Exercise
// 1. Declare an array of numbers that may represents salaries
// 2. Declare an array of objects. Each object - { username, password, email }
// 3. Output the arrays with console.log
