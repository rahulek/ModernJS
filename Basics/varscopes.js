//Global and Local Scopes

//Example 1
//x is in Global scope
//Availble even within the if() scope
let x = 10;
if (true) {
  console.log(x);
}
console.log(x);
console.log("-----------");

//Example 2
if (true) {
  let y = 50;
  console.log(x); //x is still availble, Global
  console.log(y); //y is available, Local
}
//console.log(y); //Error because y was only in the Local scope
console.log("-----------");

//Example 3
if (true) {
  let y = 20;
  if (true) {
    let z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
  }
  //console.log(z); //Reference error
}
console.log("-----------");

//Example 4;
if (true) {
  let x = 100;
  console.log(x); //Global x is "shadowed" by local x
}
console.log("-----------");
