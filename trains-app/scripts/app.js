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

//Function to render the trains
const renderTrains = function (trains) {
  //Get the H3 element and change it to reflect number of trains
  const h3El = document.querySelector("h3");
  h3El.textContent = `We're currently tracking ${trains.length} trains.`;
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
    }: ${train.name.toUpperCase()} from ${train.source} to ${train.dest}: ${
      train.daily ? "Daily" : ""
    } - ${train.type}`;
    const pEl = document.createElement("p");
    pEl.textContent = trainInfo;
    anchorEl.appendChild(pEl);
  });
};

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

const addTrain = function (newTrain) {
  trains.push(newTrain);
  renderTrains(trains);
};

//Initial rendering of all the trains
renderTrains(trains);

//Get the "Search" input and install a 'input' event handler
//e.target.value is the content of the input textfield
document.querySelector("#search").addEventListener("input", function (e) {
  searchInfo.searchText = e.target.value;

  findTrains(trains, searchInfo);
});

document
  .querySelector("#trainInfoForm")
  .addEventListener("submit", function (e) {
    //Prevent the default form submission behavior
    e.preventDefault();

    //Get the form field data
    const trainNumber = e.target.elements.trainNumber.value;
    const trainName = e.target.elements.trainName.value;
    const trainSource = e.target.elements.trainSource.value;
    const trainDest = e.target.elements.trainDest.value;
    //Get the daily and type
    let trainDaily = false;
    if (e.target.elements.daily.checked) {
      trainDaily = true;
    }
    const trainType = e.target.elements.trainType.value;

    //Create a new train object to insert into our trains db
    const newTrain = {
      number: trainNumber,
      name: trainName,
      source: trainSource,
      dest: trainDest,
      //Following fields with default values
      daily: trainDaily,
      type: trainType,
      numSeats: 876,
      numReserved: 0,
    };

    console.log(newTrain);

    //now add the new train to our trains DB
    addTrain(newTrain);
  });

//Integrate Daily Checkbox and TrainType Options
document.querySelector("#daily").addEventListener("change", function (e) {
  //e.target.checked
});

document.querySelector("#trainType").addEventListener("change", function (e) {
  //e.target.value
});

//Exercise
// Inside the notes-app
//  1. In index.html, add a checkbox (some dummy text) and a drop down (priority text)
//  2. In scripts\app.js -
//      - Access both the checkbox and drop down as separate fields (id -based )
//      - Access both of them as form fields
