// let & const

const player = 'bobby'
let experience  = 200;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}


console.log("outside", wizardLevel);

//change experience
experience = 80;
console.log('experience', experience);


// const obj = {
//     player : 'bobby',
//     experience : 100,
//     wizardLevel: false
// }

// we cannot change the object but we can change the properties of the object
// obj = 5;
// obj.wizardLevel = true;
// console.log('wizardLevel', obj.wizardLevel);

// Try to change player - cant change a const variable
// player = 'billy';
// console.log('player', player);


// Destructuring
// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// }
//
// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;
//
// const { player, experience } = obj; // Same as first two lines above
// let { wizardLevel } = obj.wizardLevel;




// object properties
// const name = 'john snow';
//
// const obj = {
//     [name]:  'hello',
//     ['ray' + 'smith'] : 'hihi'
// }
//
// const a = "simon";
// const b = true;
// const c = {};
//
// const obj = {
//     a,
//     b,
//     c
// }

// Template strings
const name = "sally";
const age = 34;
const pet = "horse"
const greeting = "fine"
// first method
const greetings = "hello " + name + " you seem to be doing " + greeting + "!";

// template string method
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a wonderful ${pet} you have !`;

//default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a wonderful ${pet} you have !`;
}


// arrow functions

// first method
function add(a, b) {
    return a + b;
}

// new method
const add2 = (a, b) => a + b;