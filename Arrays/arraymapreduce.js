//-- Arrays can be transformed with map() amd reduce() methods
//   - map method works on each element and produces an element based on some transformation
//   - reduce method reduces all the elements to a single value based on some calculation

let numbers = [1, 2, 3, 4, 5];

//Transform the array (square it)
//NOTE: We use a lambda function here. Compact ES6 syntax
let squaredNumbers = numbers.map((number) => number * number);
console.log(`numbers: `, numbers);
console.log(`sqaured: `, squaredNumbers);

let names = ["Joe", "Gill", "Jen", "Hari"];
let greetedNames = names.map((name) => `Hi ${name}`);
console.log(`names: `, names);
console.log(`greetedNames: `, greetedNames);

//Reduce the array (Sum it)
let scores = [10, 20, 30, 40, 50];
//2 params to reduce
// 1 - function that takes 2 params (prev state, current item)
//     the function returns new *reduced* state
// 2 - initial value of the accumulator
let sum = scores.reduce((prev, current) => prev + current, 0);
console.log(`scores: `, scores);
console.log(`sum with reduce: ${sum}`);

//Exercise
// In the trains script
//  - Add an a price property to each train object
//  - Using map(), get the double prices for each train in the array
//  - Using reduce(), get the total number of trains in the array (instead of
//      using array.length property )
//  - Use filter() first to find all the trains starting from "Mumbai"
//    and then print out the numbers of all such trains
