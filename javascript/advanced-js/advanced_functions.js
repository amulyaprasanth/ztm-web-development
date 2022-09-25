const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second();
}

const newFunc = first();
newFunc();

// Closures - a function ran, the function executed. It's never going to execute again.
// But It's going to execute there are references
// So the child scope always has access to the parent scope.
// But the parent has never access to the child scope.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

// to get ourput from our function
curriedMultiply(3)(4);
const multiplyBy5 = CurriedMultiply(5);

// compose - the act of putting two functions together to form a third function,
// the output of one function is input of the other function.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5)

//  Avoiding side Effects - functions which react and change the outside
//  (i.e outside its scope) world and always returns some value
//  functional purity - if given same input, should return the same value.

