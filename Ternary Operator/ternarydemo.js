//Ternary opertaor is a syntactic improvement over a
//verbose if..else syntax.

//Verbose if..else syntax
const age = 76;
if (age >= 65) {
  console.log(`${age} is a senior citizen.`);
} else if (age >= 18) {
  console.log(`${age} is an adult`);
} else {
  console.log(`${age} is a young person`);
}

//Using Ternary operator
//Note: ternary operator can be nested

age >= 65
  ? console.log(`${age} is a **senior citizen.**`)
  : age >= 18
  ? console.log(`${age} is an **adult**`)
  : console.log(`${age} is a **young person**`);
