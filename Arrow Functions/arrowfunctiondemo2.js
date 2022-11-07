//Diffrences between normal and arrow functions

////////  Diff 1:  "arguments" access ///////////
//Normal function
// It can access all the arguments passed to it using "arguments"
const demoFunc = function (a, b) {
  console.log(`a=${a}, b=${b}`);
  console.log(arguments);
};

//pass in a, b and more
demoFunc(10, 20, 30, 40, 50);

//Arrow functions do not have "arguments" property

////// Diff 2: Binding of "this" reference /////////
const someObj = {
  age: 76,
  getAge() {
    return `Age is ${this.age}`; //"this" is bound to the "someObj" instance
  },
};
console.log(someObj.getAge());

const someObj2 = {
  age: 76,
  getAge: () => `Age is ${this.age}`, //"this" is NOT bound, therefore this.age = undefined
};
console.log(someObj2.getAge());

///////////////////////////
