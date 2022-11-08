//"use strict";

//Case 1: of a leaked global
if (true) {
  data = 1234;
}

//console.log(`data is: ${data}`);

//Case 2: Future proofing
//Newer language kwywords cant be used accidentally
const public = 124;
