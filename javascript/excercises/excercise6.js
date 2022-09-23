// Create an array
var array = ["bananas", "Apples", "Oranges", "Blueberries"];

// Remove the banana from array
array.shift();

// Sort the array in order
array.sort();

// Put "Kiwi" at the end of the array
array.concat(["Kiwi"]);

// Remove "Apples" from the array
delete array[1];


// Sort te array in reverse order
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][2]