//-- JS Built in String object has tons of methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = "JavaScript ";

//Note: length is a property, not a method property
console.log(`Length: ${name.length}`);

//Uppercase it
console.log(`Uppercased: ${name.toUpperCase()}`);
//Lowercase it
console.log(`Lowercased: ${name.toLowerCase()}`);
//Get a substring
console.log(`Substring(1,3): ${name.substring(1, 3)}`);
//Concat one/more strings
console.log(`Concat: ${name.concat("is fun")}`);
