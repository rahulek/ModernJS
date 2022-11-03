//Initial value of trains = an empty array
let trains = [];

//Object that stores the search information
const searchInfo = {
  searchText: "",
};

//LocalStorage Key
const localStorageKey = "allTrains";

//Load trains from the LocalStorage
const loadTrains = () => {
  //Try reading the trains info from the LocalStorage using
  //the "key" provided
  //If not found, we probably did not have any train
  //Else convert the stored trains into a JS array of
  //the train objects.
  const stringfiedTrains = localStorage.getItem(localStorageKey);
  if (stringfiedTrains !== null) {
    trains = JSON.parse(stringfiedTrains);
  } else {
    trains = []; //No trains found in LocalStorage, empty array
  }

  return trains;
};

//Generate a DOM structure for a given train
//Refactoring this allows for us to later change
//the DOM structure, if needed
const generateTrainDOM = function (train) {
  const pEl = document.createElement("p");

  //No train provided
  if (train === null) {
    pEl.textContent = "No Train Found";
  } else {
    const trainInfo = `Train ${
      train.number
    }: ${train.name.toUpperCase()} from ${train.source} to ${train.dest}: ${
      train.daily ? "Daily" : ""
    } - ${train.type}`;
    pEl.textContent = trainInfo;
  }

  return pEl;
};

//Function to render the trains
const renderTrains = function (trains) {
  //Get the H3 element and change it to reflect number of trains
  const h3El = document.querySelector("h3");
  h3El.textContent = `We're currently tracking ${trains.length} trains.`;
  //Get the anchor <div> element
  const anchorDivEl = document.querySelector("#trainsAnchor");

  //Clear the anchor element first
  //WHAT WILL HAPPEN IF THIS IS NOT DONE?
  // - New <p> elements keep getting appended
  // - Comment out to see the effect

  anchorDivEl.textContent = "";

  //If no trains, say so
  if (trains.length === 0) {
    //No trains found, get a DOM structure to represent it
    const trainDOM = generateTrainDOM(null);
    anchorDivEl.appendChild(pEl);
  } else {
    //Iterate through all the trains and create a <p> for each
    trains.forEach(function (train) {
      const trainDOM = generateTrainDOM(train);
      anchorDivEl.appendChild(trainDOM);
    });
  }

  //done
  return;
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

//Add a new train
//Not only the train gets added to the trains array in memory
//but gets saved to the LocalStorage too.
const addTrain = function (newTrain) {
  //Add a new train to the array
  trains.push(newTrain);
  //Save the whole trains array to the LocalStorage
  localStorage.setItem(localStorageKey, JSON.stringify(trains));
  //Display all the trains
  renderTrains(trains);
};
