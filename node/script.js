// const script2 = require('./script2.js')
// import { largeNumber } from './script2.js';
let a;
if (1 === 1) {
    const { largeNumber } = await import('./script2.js')
    const a = largeNumber;
}


const b = 7;

console.log(a, b)