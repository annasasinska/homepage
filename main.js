const firstName = "Ania";
const age = 25;

console.log(`Hej, mam na umię ${firstName} i mam ${age}`);

let secondName = "Sasińska";
secondName = "Golańska";

console.log(`${secondName}`);

const heading = document.querySelector('.main-heading--js');

console.log(heading.innerHTML);

heading.innerHTML = `Hej, mam na umię ${firstName} i mam ${age}`

console.log(heading.innerHTML);