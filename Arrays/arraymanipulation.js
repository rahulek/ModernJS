//-- Adding/Removing elements to/from the array

//Declare an array
let scores = [10, 100];

//---- Add/Remove at the end ---

console.log(`Scores: `, scores);
//append one element
scores.push(245);
console.log(`Scores: `, scores);
//You can push more than one
scores.push(-245, -100, -10);
console.log(`Scores: `, scores);

let popped = scores.pop();
console.log(`popped: ${popped}, scores: `, scores);
//pop in a loop
let length = scores.length;
for (let i = 0; i < length; i++) {
  let popped = scores.pop();
  console.log(`popped: ${popped}, scores: `, scores);
}
console.log("---------------------------");

//Scores is now an empty array
//Add/Remove at the beginning
scores.unshift(100);
scores.unshift(200);
console.log(`Scores: `, scores);
//add more than one
scores.unshift(300, 400, 500);
//Note the order in which element are added
//1st 500, then 400 and then 300
console.log(`Scores: `, scores);

//Remove them back
let shifted = scores.shift();
console.log(`shifted: ${shifted}, scores: `, scores);
shifted = scores.shift();
console.log(`shifted: ${shifted}, scores: `, scores);

console.log("-----------------------------");

//Random addition/deltetion with splice
//Ref - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//splice() with no parameter removes all elements
console.log(`scores before splice call: `, scores);
scores.splice(0);
console.log(`scores after splice call: `, scores);

//set up more data
scores.push(100, 200, 300, 400, 500);

//Remove 1st index (2nd element)
console.log(`scores before splice call: `, scores);
scores.splice(1, 1);
console.log(`scores after splice(1,1) call: `, scores);
//Remove 3 elements at index 1
scores.splice(1, 3);
console.log(`scores after splice(1,3) call: `, scores);

//Add - set the 1st param to more than array length
//Set 1st param to a value GE the size of the array
//Set 2nd param to 0 (we want an addition, this is a deleteCount)
//Set the 3rd...Nth to the item values to add
scores.splice(scores.length, 0, -100);
console.log(`scores after splice(length,-100) call: `, scores);
//Add more than one
scores.splice(scores.length, 0, -200, -300);
console.log(`scores after splice(length,-200, -300) call: `, scores);

//Exercise
// 1. In the Trains script..
// 2.   Create a new array of trainNumbers storing 2 train numbers
// 3.   Using push, append 3 train numbers
// 4.   Using pop, remove all elements, Print them
// 5.   Again, push 5 train numbers
// 6.   Use splice -
//        a) Remove 2 last train numbers
//        b) Add those same back
