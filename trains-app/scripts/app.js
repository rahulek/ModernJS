//Load the trains from LocalStorage.
const allTrains = loadTrains();

//Initial rendering of all the trains
renderTrains(allTrains);

//Get the "Search" input and install a 'input' event handler
//e.target.value is the content of the input textfield
document.querySelector("#search").addEventListener("input", function (e) {
  findTrains(allTrains, { searchText: e.target.value });
});

//Handle submitting the "Add New Train" form
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
      id: crypto.randomUUID(),
      number: trainNumber,
      name: trainName,
      source: trainSource,
      dest: trainDest,
      daily: trainDaily,
      type: trainType,
      numSeats: 876,
      numReserved: 0,
    };

    //now add the new train to our trains DB
    addTrain(newTrain);

    //Clear all the form fields
    e.target.elements.trainNumber.value = "";
    e.target.elements.trainName.value = "";
    e.target.elements.trainSource.value = "";
    e.target.elements.trainDest.value = "";
    e.target.elements.daily.checked = false;
    e.target.elements.trainType.value = "Superfast";
  });

//Handle changing of the sort option
document.querySelector("#sortBy").addEventListener("change", function (e) {
  renderTrains(allTrains); //this will apply sorting change and then render
});
