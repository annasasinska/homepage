const firstName = "Ania";
const age = 25;

console.log(`Hej, mam na imię ${firstName} i mam ${age} lat`);

let secondName = "Sasińska";
secondName = "Golańska";

console.log(`${secondName}`);

const heading = document.querySelector(".main-heading--js");

heading.innerHTML = `Hej, mam na umię ${firstName} i mam ${age}`;

const emptyHeading = document.querySelector(".empty-heading--js");

emptyHeading.innerHTML = `Zadanie domowe`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return myNumber;
}

const myResult = calculate(age);
console.log(age);

console.log(myResult);
console.log(age);

function greetOld(age, firstName) {
  console.log(`Hej, mam na imię ${firstName} i mam ${age} lat`);
}

greetOld(age, firstName);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent('.empty-heading--js', 'Witaj świecie! :)');



const greet = (age, firstName) => {
    console.log(`Hej, mam na imię ${firstName} i mam ${age} lat`);
}

greet(25, 'Ania');

const calculate = (myNumber) => myNumber*7

const myResult = calculate(7)
console.log(myResult)