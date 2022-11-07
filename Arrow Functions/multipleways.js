//Regular/oldest way to declare a function in JS
function addRegular(a, b, c) {
  return a + b + c;
}

//Function expression - this is what've been using throughout
const addFunctionExpression = function (a, b, c) {
  return a + b + c;
};

//Invoke the normal function
let result = addRegular(10, 20, 30);

//Invoke the expression based function
result = addRegular(10, 20, 30);

/////  NEWER WAY - ARROW FUNCTIONS ////

const arrowAdd = (a, b, c) => {
  return a + b + c;
};

//A concise arrowAdd version
const arrowAddConcise = (a, b, c) => a + b + c;

result = arrowAddConcise(10, 20, 30);
console.log(`Arrow Addition: `, result);
