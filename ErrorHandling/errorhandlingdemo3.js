//How to fix the error in errorhandlingdemo.c
//Use throw with specific Error() object

//a 30% tax calculation function
const getTax = function (amount) {
  //Check the type of amount variable and see
  //if its numeric.
  //typeof always returns a 'string' type
  if (typeof amount === "number") {
    //Ok to go ahead with the calculation
    return amount * 0.3;
  } else {
    throw Error(`Please provide a numeric argument, got ${amount}`);
  }
};

//Call getTax with valid data type
//All Ok
console.log(`Tax on Rs 1000 = ${getTax(1000)}`);

//Call getTax with 'onethousand'
//generates a NaN - Not a Number
//because 'onethousand' is a string type and
//can't be treated as a numeric value
// Now, use a try..catch block to try some code
// that can fail and catch the thrown errors in the
// catch block
try {
  getTax("onethousand");
} catch (e) {
  console.log(`${e.message}`);
}
