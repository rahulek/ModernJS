//--- if and its variations --

//Simple - "if"
let age = 65;
if (age >= 60) {
  console.log("is a senior citizen");
}

//Other variants
age = 88;
if (age >= 75) {
  console.log("is a super-senior citizen");
} else if (age >= 60) {
  console.log("is a senior citizen");
} else {
  console.log("Below a senior citizen age");
}

//Ternary operator example
let isSuperSenior = age >= 75 ? true : false;
console.log(isSuperSenior);

//Advanced Ternary example
let result =
  age >= 75 ? "super senior" : age >= 60 ? "senior" : "below senior age";
console.log(result);

//Exercise
//  - let weekday = 1
//  - Print "early in the week" if the weekday is <= 3
//  - Print "its weekend" if the weekday >= 5 and <=7
//  - else print "its late in week"
