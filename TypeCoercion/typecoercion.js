//What will be the output of this?
console.log(5 + "5"); //number 5 to coerced into a string and then 2 strings concatenated

//How about this?
console.log(5 - "5"); //now string 5 gets converted into a number and result is 0

//Double Eq (==) Vs triple Eq (===)
console.log("5" == 5); //== does not take type into account, therefore,  "true"
console.log("5" === 5); //=== compares types and values, thefore, "false"

//BEST PRACTICE - use === always
