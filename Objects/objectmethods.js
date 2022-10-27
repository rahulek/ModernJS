//-- JS Object can have properties which are functions
//   These functions are called as "methods"
//   As a property of an object, a method can access other
//   data or method properties using a "this" keyword, which
//   refers to the object

let train = {
  number: 124,
  source: "Delhi Junction",
  destination: "Lucknow",
  name: "Delhi-Lucknow Shatabdi Express",
  numWagons: 15,
  totalCapacity: 875,
  reserved: 700,
  //A method to determine how many seats are avaialble
  availableSeats: function () {
    //Note: "this" keyword to access totalCapacity and reserved properties
    return this.totalCapacity - this.reserved;
  },
  //A new method to determine if given number of seats can be reserved!
  canReserve: function (numSeatsToReserve) {
    //Leverage existing availableSeats() method
    let numRemainingSeats = this.availableSeats();
    return numSeatsToReserve <= numRemainingSeats;
  },
};

//Initial available
console.log(`Available: ${train.availableSeats()}`);
//Can reserve 60?
console.log(`Can 60 seats be reserved? : ${train.canReserve(60)}`);
//Can reserve 200?
console.log(`Can 200 seats be reserved? : ${train.canReserve(200)}`);

//Exercise
// Add a new method: reserveSeats(numSeats)
//  This method should first check if numSeats can be booked
//  and then modify the train object appropriately
// Invoke all the methods as appropriate to make sure that they
// all are working fine.
