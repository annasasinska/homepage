const firstName = "Ania";
const age = 25;

console.log(`Hej, mam na umię ${firstName} i mam ${age}`);

let secondName = "Sasińska";
secondName = "Golańska";

console.log(`${secondName}`);

const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Hej, mam na umię ${firstName} i mam ${age}`

const emptyHeading = document.querySelector('.empty-heading--js');

emptyHeading.innerHTML = `Zadanie domowe`