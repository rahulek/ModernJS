//Creating elements on the fly
//Inserting elements into the DOM

//Create a <p> Element and append it to the existing list of trains
//1. Create an element
//2. Set its textContent
//3. Insert it into DOM
//
let pEl = document.createElement("p");
pEl.textContent = "Train 546 Down";
document.body.appendChild(pEl);

//Ex2 - adding multiple elements
const trains = ["Gorakhpur Express", "Nizamuddin Express", "Rajdhani Express"];
trains.forEach(function (train) {
  const pEl = document.createElement("p");
  pEl.textContent = train;
  document.body.appendChild(pEl);
});

//Exercise
//    notes-app
// 1. How will you get the body element alternatively using querySelector()
// 2. Create a new <p> element and add it to the body
// 3. Create an array of strings representing sample notes
// 4. Insert all the notes into DOM as <p> elements
