console.log("Loaded the edittrain JS");

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
    titleEl.textContent = `Editing ${train.number} - ${train.name}`;
  } else {
    console.error(`Train with the id ${trainId} was not found...`);
  }
} else {
  console.error("Hash not received");
}
