//--- Number Data type ----

//declare a numeric variable to store the price of an item
let price = 12.5;
//apply various standard arithmetic operations
price = price * 2; //double the price
console.log(price);

price = price - 10; //subtraction
price = price / 2; //division
price = price % 3; //modulo

//Investigate:
//What will happen?
let age = 50;
age = age / "2"; //division by a string type that can be converted into a number
console.log(age);
age = 12 / "age"; //division by a textual string
console.log(typeof age);
console.log(parseInt("a plain string")); //NaN <-- Not a Number

//Exercise
// Define an integer variable to store the temp in Celsius
// Convert it into a Fahrenheit - F = (C * 9/5) + 32
