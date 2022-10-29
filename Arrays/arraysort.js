let books = [
  {
    name: "Collapse of Rome",
    author: "Livy",
    price: 876,
  },
  {
    name: "Hannibal in Rome",
    author: "Procopius",
    price: 345,
  },
  {
    name: "SPQR",
    author: "Mary Beard",
    price: 1456,
  },
  {
    name: "Roman Lives",
    author: "Plutarch",
    price: 564,
  },
];

let salaries = [1098, 987, 123, 456, -10, 678];
//not a numeric sort but alphabetical sort
console.log(`Salaries before soring: ${salaries.sort()}`);

//provide a sorting function to sort in numeric ASC order
//The function gets 2 items to compare and returns
// -1 if a comes before b
// 1 if a comes after b
// 0 if order should remain
let sorted = salaries.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
});
console.log(`sorted with function: `, sorted);

console.log(`books without sorting:`, books);
let booksSortedPriceAsc = books.sort(function (b1, b2) {
  if (b1.price < b2.price) {
    return -1;
  } else if (b1.price > b2.price) {
    return 1;
  }

  return 0;
});
console.log(`books sorted price ASC: `, booksSortedPriceAsc);

//Exercise:
//  In the same script -
//  Sort the salaries array in DESC order
//  Sort the books array with book names DESC on price
