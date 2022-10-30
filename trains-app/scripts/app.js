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

//Get the "timetable" button and install a click event handler
document.querySelector("#timetable").addEventListener("click", function (e) {
  console.log(`timetable button was clicked.`);
});

//Get all the paras with "error" as a class and modify their color
//should change only 2 paras instead of 3.
//NOTE: querySelectorAll() and . prefix in front of the classname
const errorPs = document.querySelectorAll(".error");
errorPs.forEach(function (errorP) {
  console.log(errorP);
  errorP.style.color = "red";
});

//Exercise
//  Inside the notes app
//   - In index.html - make sure to have 2 buttons. Each with a unique id
//        say - "Add Note", "Remove all notes"
//   - In scripts\app.js,
//        get both the buttons, add click event handlers and console log
//        an appropriate message
