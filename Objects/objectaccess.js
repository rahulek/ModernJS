//Access the JS Object with o["propname"] OR o.propname syntax

let person = {
  fname: "Alex",
  lname: "McNamara",
  age: 34,
  email: "alex@mcnamara.id",
};

//access(read) fname and email
console.log(`fname: ${person["fname"]}`);
console.log(`email: ${person.email}`); //simpler mechansim

//set lname and age
person["lname"] = "updated";
person.age = 52;
//print the updated values
console.log(`Updated lname: ${person.lname}`);
console.log(`Updated age: ${person.age}`);

//Exercise
//  Define an object for a train with..
//  the properties - number, source, destination, numwagons,isCargo
//  Use your own values to initialize the properties
// Use both the access syntax to read and write various properties
// Output the result with console.log
