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

//Get the firt Button <add train>
addButtonEl = document.querySelector("button");
addButtonEl.addEventListener("click", function (e) {
  console.log(e.target);
});

//Exercise
//   Inside the notes app
//   1. Inside index.html, add a new <button> element - "Add Note"
//   2. Inside app.js,
//        - locate the button
//        - register a click handler
//        - inside the click handler, console log the e object
//        - also look at e.target
