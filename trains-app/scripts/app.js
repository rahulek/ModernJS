//Static array of trains
//Each train object - { number, name, source, dest, daily?, type, numSeats, numReserved }
const trains = [
  {
    number: 101,
    name: "Mumbai Rajdhani Superfast",
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

//Object that stores the search information
const searchInfo = {
  searchText: "",
};

//Get the H3 element and change it to reflect number of trains
const h3El = document.querySelector("h3");
h3El.textContent = `We're currently tracking ${trains.length} trains.`;

//Get the "add train" button with it's id and install a click event handler
//elements with id have a # prefix
document.querySelector("#addtrain").addEventListener("click", function (e) {
  console.log(`'Add train was clicked.`);
});

//Function to render the trains
const renderTrains = function (trains) {
  //Get the anchor <div> element
  const anchorEl = document.querySelector("#trainsAnchor");

  //Clear the anchor element first
  //WHAT WILL HAPPEN IF THIS IS NOT DONE?
  // - New <p> elements keep getting appended
  // - Comment out to see the effect

  anchorEl.textContent = "";

  //Iterate through all the trains and create a <p> for each
  trains.forEach(function (train) {
    const trainInfo = `Train ${
      train.number
    }: ${train.name.toUpperCase()} from ${train.source} to ${train.dest}`;
    const pEl = document.createElement("p");
    pEl.textContent = trainInfo;
    anchorEl.appendChild(pEl);
  });
};

//Initial rendering of all the trains
renderTrains(trains);

const findTrains = function (trains, searchInfo) {
  //Get the search text and filter out our trains that match
  //either the number of the name of the train
  //Train number must match exactly
  const filteredTrainsOnNumber = trains.filter(function (train) {
    //train number is a NUMERIC type
    //Input text is a STRING type
    //Converting train number to a STRING type is easy with .toString() method
    //Then compare the strings to see if there is a match
    return train.number.toString() === searchInfo.searchText;
  });

  //If we find something with the train number, render it and return
  if (filteredTrainsOnNumber.length > 0) {
    renderTrains(filteredTrainsOnNumber);
    return;
  } else {
    //See if any trains have similar names
    const filteredTrainsOnName = trains.filter(function (train) {
      //converts user input to lowercase
      //also convert all the train names to lowercase
      //use String.includes() to see a match
      return train.name
        .toLowerCase()
        .includes(searchInfo.searchText.toLowerCase());
    });

    //If we found a train/trains with the name matching
    //return after rendering if we found one/more trains
    if (filteredTrainsOnName.length > 0) {
      renderTrains(filteredTrainsOnName);
      return;
    }

    //no trains found, simply show all the trains
    renderTrains(trains);
  }
};

//Get the "Search" input and install a 'input' event handler
//e.target.value is the content of the input textfield
document.querySelector("#search").addEventListener("input", function (e) {
  searchInfo.searchText = e.target.value;

  findTrains(trains, searchInfo);
});

//Exercise:
//  In the notes-app
//    1. Add a search capability
//    2. Search note's body and title both to see if the text entered by user is included
//      in the note's body or title. Search the title first and then the body
//    3. Write a function to render all notes
//    4. Write a function to implement the find/search functionality
