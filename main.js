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


const deathStar = {
diameter: 120000,
fire: (target) => {
  console.log(`${target} destroyed!`)
},
isOperating: true,
levels: 357,
name: 'Death Star',
population: 10000,
commander: {
  name: 'Darth Vader',
  age: 44,
}
}

console.log(deathStar)

deathStar.fire('fox')

console.log(deathStar['name'])

const myProperty = 'name'
console.log(deathStar[myProperty])

const showMyProperty=(myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}

showMyProperty('levels')


const man = {
  name: 'Olek',
  age: 23,
  canSing: true,
  parents: {
    mom: 'Ola',
    dad: 'Kamil',
  },
  sing: (song) => {
    console.log(`Umie śpiewać ${song}`)
  } 
}

console.log(man)

console.log(man.parents.mom)
man.sing('Przez twe oczy')

console.log(man['age'])
console.log(man.age)

const myData = 'parents'

console.log(man[myData])

const showHisParents = (hisParents) => {
  console.log(`Olek ma ${hisParents} o imionach ${man.parents.mom} i ${man.parents.dad}`);
}

showHisParents('parents')