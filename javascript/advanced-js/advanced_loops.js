const basket = ["apples", 'oranges', 'grapes'];

const detailedBasket = {
    apples : 5,
    oranges : 10,
    grapes : 1000
}
// for of loop
// iterating - we're able to go one by one through an itema(which are called iterables)
// arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// this is called enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}
 
