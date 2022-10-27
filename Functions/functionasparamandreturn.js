//Because JS functions are types in themselves,
//they can be passed to functions as parameters
//and be treated as other types. Invoking the function
//is then possible.
//
//Functions can also be returned from the functions.
//See the example 1 below

//Example 1 - Return a function from a function
let adderFactory = function (adderBase) {
  let adderFunc = function (value) {
    return adderBase + value;
  };

  return adderFunc; //Returning a function from the function
};

//Create an adder for 10
let adder10 = adderFactory(10);
console.log(typeof adder10);
if (typeof adder10 === "function") {
  //Invoking adder10 because its a function
  let result = adder10(-10);
  console.log(`Adding -10 to 10, result ${result}`);
  result = adder10(100);
  console.log(`Adding 100 to 10, result ${result}`);
}

//Example 2 - Create a simple greet fn
// and pass it as a parameter to other function
let greetFn = function (uname, message) {
  console.log(`Hello ${uname}: ${message}`);
};

let loginFn = function (uname, greet) {
  //assuming login to be successful,
  //invoke the greetFn
  greetFn(uname, "You're now successfully logged in..");
};

loginFn("JamesBond", greetFn);
