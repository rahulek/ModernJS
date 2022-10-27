//Traditional syntax of declaring JS functions
function addTraditional(p1, p2) {
  console.log(`this is a traditional function declaration`);
}

//literal declaration syntax
let addLiteral = function (p1, p2) {
  console.log(`this is defined using a literal syntax.`);
};

//Arrow functions
let addArrow = (p1, p2) => {
  console.log(`this is defined with an arrow function syntax.`);
};

//invoke the functions.
addTraditional(10, 20);
addLiteral(10, 20);
addArrow(10, 20);
