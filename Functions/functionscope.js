//-- Functions define their own lexical scope
//  input parameters and local variables are defined
//  in the lexical scope of a function and are not
//  available outside

let addTo100 = function (p1, p2, p3) {
  //let p1 = 200;         //ERROR: Can't redefine, p1 is already defined

  let baseAccum = 100;
  return baseAccum + p1 + p2 + p3;
};

console.log(p1, p3); //ERROR: p1, p3 are not accessible in this scope.
