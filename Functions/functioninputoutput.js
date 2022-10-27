//-- JS Functions --
//  can take zero or more parameters
//  produce result that may be returned
//  result is returned with the "return keyword"
//  if no explicit return, "undefined" is returned

//Function with no input and no output
let sayHi = function () {
  console.log(`Hi`);
};

//Function with multiple inputs and one output
let addAll = function (i1, i2, i3) {
  console.log(`Adding ${i1}, ${i2}, ${i3}`);
  return i1 + i2 + i3;
};

//Function with no explicit return but has input param
let greet = function (username) {
  console.log(`Hi there, ${username}`);
};

//Invoke
sayHi();
let ret = addAll(10, 20, 30);
console.log(`addAll returned ${ret}`);

//greet does not explicitly return anything, expecting undefined
ret = greet("me");
console.log(`ret is ${ret}`);

//-- Exercise
// Write a function -
//  Celsius temp is passed in as an input parameter
//  Function calculates the Fahrenheit temp - F =(C * 9/5) + 32
//  Returns the Fahrenheit temp.
//
// Invoke the function multiple times with different inputs
// Print the resuts with String interpolation method
