//How to get to a <p> element on the page (index.html)
//
//Older DOM API - document.getElementsByTagName()
//Newer DOM API - document.querySelector()

const pElOlder = document.getElementsByTagName("p");
console.log(pElOlder);

//Newer DOM API - getSelector()
//will return only the first <p>
const pH3El = document.querySelector("h3");
console.log(pH3El);
//Delete it
//pH3El.remove();

//Access multiple <p>
//print the textContent for each <p>
const pElements = document.querySelectorAll("p");
console.log(`number of elements: ${pElements.length}`);
pElements.forEach(function (el) {
  console.log(`${el.textContent}`);
});

//Get the <h2> and change it to something else
const pH2El = document.querySelector("h2");
//pH2El.textContent = "Modified textContent via DOM API";
