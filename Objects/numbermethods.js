//Static Number methods

//static methods use Number.method syntax
//they don't operate on number instances
console.log(`Number MAX_VALUE: ${Number.MAX_VALUE}`);
console.log(`Parsed Integer: ${Number.parseInt("1234")}`);

//Instance methods work on Number instances
console.log(`random: ${Math.random()}`);
console.log(`log2 of 32: ${Math.log2(32)}`);
console.log(`log10 of 100: ${Math.log10(100)}`);
console.log(`ceil(3.9456): ${Math.ceil(3.9456)}`);
console.log(`floor(3.9456): ${Math.floor(3.9456)}`);

//Exercise
// Write a function getRandomIntBetween()that takes 2 parameters (min and max)
// Using Math.random()and ceil/floor functions, create a random number between
// min and max
// Math.random() produces a number between 0 and 1 always
