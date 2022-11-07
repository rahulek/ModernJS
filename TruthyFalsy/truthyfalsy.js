//TRUTHY VALUES
//   boolean true
//   non-empty string
//   empty array
//   empty object
//FALSY VALUES
//   boolean false
//   empty string
//   0
//   null
//   undefined
//   NaN

const boolVar = true; //change to false as needed
if (boolVar) {
  console.log(`boolVar is ${boolVar}: TRUTHY`);
} else {
  console.log(`boolVar is ${boolVar}: FALSY`);
}

const emptyString = "";
if (emptyString) {
  console.log(`${emptyString}: TRUTHY`);
} else {
  console.log(`${emptyString}: FALSY`);
}

const emptyArray = [];
if (emptyArray) {
  console.log(`Array: ${emptyArray}: TRUTHY`);
} else {
  console.log(`Array: ${emptyArray}: FALSY`);
}

const nullValue = null;
if (nullValue) {
  console.log(`nullValue: ${nullValue}: TRUTHY`);
} else {
  console.log(`nullValue: ${nullValue}: FALSY`);
}
