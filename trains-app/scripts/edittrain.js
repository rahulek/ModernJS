//Load the trains first
loadTrains();

//Get a hash
const hash = location.hash;
if (hash) {
  //Hash was provided, use it to get the train
  const trainId = hash.substring(1); //strip out the first # character
  const train = getTrain(trainId);
  if (train !== null) {
    //Train with a provided hash was found
    const titleEl = document.querySelector("#title");
    titleEl.textContent = `Editing Train ${train.number} - ${train.name}`;

    //Get to the form and populate the fields from the train object
    const form = document.querySelector("#trainInfoForm");
    form.elements.trainNumber.value = train.number;
    form.elements.trainName.value = train.name;
    form.elements.trainDaily.checked = train.daily;
    form.elements.trainSource.value = train.source;
    form.elements.trainDest.value = train.dest;
    form.elements.trainType.value = train.type;

    //Install and process the Save form clicks.
    document
      .querySelector("#trainInfoForm")
      .addEventListener("submit", function (e) {
        //Prevent the default form submission behavior
        e.preventDefault();

        //Collect the form fields into a train object
        //and update the train in place
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
        const modifiedTrain = {
          id: train.id, //Keep the same train id, this is a modify operation
          number: trainNumber,
          name: trainName,
          source: trainSource,
          dest: trainDest,
          daily: trainDaily,
          type: trainType,
          numSeats: 876,
          numReserved: 0,
        };

        //Update the existing train object
        updateTrain(train.id, modifiedTrain);

        //navigate back to the index page
        location.href = "/index.html";
      });
  } else {
    console.error(`Train with the id ${trainId} was not found...`);
  }
} else {
  console.error("Hash not received");
}
