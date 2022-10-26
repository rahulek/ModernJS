//--- Logical Operators in JS --

//AND - && - both conditions MUST be TRUE for the result to be TRUE
let grade1 = 69;
let grade2 = 34;

let isPassed = grade1 >= 35 && grade2 >= 35;
console.log(isPassed);

//OR - || - only one condition MUST be TRUE for the result to be TRUE
let day = 6;
let isWeekend = day === 6 || day === 7;
console.log(isWeekend);

//! - change true to false and vice versa
console.log(!true);
console.log(!false);

//Exercise:
// Given temp = 45
// Determine if its good to step out: temp must be between 25 and 40 -> AND
// Also Use OR : temp < 0 OR temp > 45
