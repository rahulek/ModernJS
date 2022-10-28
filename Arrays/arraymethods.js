// Important Array Methods - Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Declare a sample array
let scores = [10, 45, 88, 98];

//Declare another array
let players = ["Player1", "Player2", "Player3"];

//Property: (not a method): length
console.log(`scores: `, scores);
console.log(`scores length: ${scores.length}`);
console.log(`players: `, players);
console.log(`players length: ${players.length}`);

//Getting array elements
//Simple method - use index
//Index starts with 0 and go to array.length - 1
console.log(`1st player: ${players[0]}, 1st score ${scores[0]}`);
console.log(`last player: ${players[players.length - 1]}`);

//Setting the array elements
//Directly modify the element by using the index
players[1] = "John Doe"; //Replace the 2nd array index
console.log("players after modification: ", players);

//Exercise
// 1. Create a new script file - trains.js
// 2. Store 5 trains names in an array called - trains
// 3. Use length property and get/set using syntax to
//    fetch and set train names
