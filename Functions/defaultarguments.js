//--- Function arguments can be given default values
//  This allows the caller to skip passing-in the
//  arguments

//In this function, rate is set to a default of 5
let interestFn = function (principal, rate = 5) {
  return (principal * rate) / 100;
};

// Invoke the interst function with default rate
let principal = 100;
let result = interestFn(principal); //5 is the default value for the rate param
console.log(`default rate on ${principal} is ${result}`);

//Invoke the interest function with interest rate set to 7
let rate = 7;
result = interestFn(principal, rate);
console.log(`Rate of ${rate} on ${principal} is ${result}`);

//All input params can be default
let greet = function (greeting = "hello", name = "mr x") {
  console.log(`${greeting}, ${name}`);
};

//Invoke with all default
greet();

//Invoke with default name
greet("Howdy");

//Invoke with default greeting
//Note - "undefined" needs to be passed in for the default to kick-in
greet(undefined, "James Bond");

//Exercise
// Write a function to print if a student has passed or failed
// Pass in score and passingScore as arguments
// Set passingScore's default value
// Invoke with different combinations and print the results
