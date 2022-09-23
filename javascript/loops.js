let todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// For loop
for (let i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

// While loop
let counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}

// Do while loop
let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo>0);

// forEach loop
todos.forEach(function( todos,i) {
    console.log(todos, i);
})