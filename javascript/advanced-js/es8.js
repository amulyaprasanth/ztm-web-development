// introduced .padStart()
'Turtle'.padStart(10); // we will get 10 total spaces used including the string

// and .padEnd()
'Turtle'.padEnd(10); // we will get 10 total spaces used including the string

// trailing commas in function parameter lists and calls
const fun = (a, b, c, d,) =>{
    console.log(a); // this doesn't do anything but makes syntax look neat whan new line started after comma
}

// added Object.values, Object.entries, and Object.keys
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => console.log(value)); 

Object.entries(obj).forEach(value => console.log(value));


// added Async Await