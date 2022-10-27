//String Interpolation
//Define a String template and use placeholders
//for the values that change.
//
//String templates are defined inside `` - backquote chars
//The placeholders use ${} syntax which are substituted by actual values
//Regular "" or '' can be used freely inside the template string

let uname = "Username";
let role = "Admin";
let result = `Use "${uname}" has a "${role}" role`;
console.log(result);

//$ can also be used inside the template for non-placeholder like usage
let price = 123;
console.log(`The price is $${price}`);
