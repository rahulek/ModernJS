//Static array of trains
//Each train object - { number, name, source, dest, daily?, type, numSeats, numReserved }
const trains = [
  {
    number: 101,
    name: "Mumbai Rahdhani Superfast",
    source: "Mumbai CST",
    dest: "Delhi Jn",
    daily: true,
    type: "Superfast",
    numSeats: 876,
    numReserved: 0,
  },
  {
    number: 234,
    name: "Mumbai Amritsar Golden Temple",
    source: "Mumbai CST",
    dest: "Amritsar Jn",
    daily: false,
    type: "Express",
    numSeats: 1034,
    numReserved: 0,
  },
  {
    number: 345,
    name: "Goa Nizamuddin Express",
    source: "Madgaon",
    dest: "Hazrat Nizamuddin",
    daily: true,
    type: "Express",
    numSeats: 988,
    numReserved: 0,
  },
];

//Get the H3 element and change it to reflect number of trains
const h3El = document.querySelector("h3");
h3El.textContent = `We're currently tracking ${trains.length} trains.`;

//Get the body element
const bodyEl = document.body;
//Insert all the train names with their numbers as one <p> element
trains.forEach(function (train) {
  const trainInfo = `Train ${train.number}: ${train.source} \u27A4 ${train.dest} \u2022 ${train.name}`;
  const pEl = document.createElement("p");
  pEl.textContent = trainInfo;
  bodyEl.appendChild(pEl);
});

//Get the "add train" button with it's id and install a click event handler
//elements with id have a # prefix
document.querySelector("#addtrain").addEventListener("click", function (e) {
  console.log(`'Add train was clicked.`);
});

//-- ONLY ONE OF THE FOLLOWING 2 EVENTS USEFUL ---
// change event - is fired when users enters all the text and hits ENTER
// input event -  provide input every time user adds/removes text from the input type
//
// input event useful for live search results for example
//

//Get the "Search" input and install a 'change' event handler
//e.target.value is the content of the input textfield
// document.querySelector("#search").addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

//Get the "Search" input and install a 'input' event handler
//e.target.value is the content of the input textfield
document.querySelector("#search").addEventListener("input", function (e) {
  console.log(e.target.value);
});

//Exercise
//  Inside notes-app
//   1. Clean up HTML, remove <p>s
//   2. Add an input of type text, add placeholder and id attributes
//  Inside scripts\app.js -
//   1. Get the <input> control using its id
//   2. Install 2 handlers - change and input
//   3. Verify the behavior inside both the event handlers
