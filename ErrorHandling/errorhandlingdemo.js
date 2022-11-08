//a 30% tax calculation function
const getTax = function (amount) {
  return amount * 0.3;
};

//Call getTax with valid data type
//All Ok
console.log(`Tax on Rs 1000 = ${getTax(1000)}`);

//Call getTax with 'onethousand'
//generates a NaN - Not a Number
//because 'onethousand' is a string type and
//can't be treated as a numeric value
console.log(getTax("onethousand"));
