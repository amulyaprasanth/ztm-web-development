//scope

// Root scope (window)
let fun = 5;

function  funFunction() {
    //child scope
    let fun = "hellooo";
    console.log(1, fun);
}


function funerFunction() {
    //child scope
    let fun = "Byeee";
    console.log(2, fun);
}

function funestFunction() {
    //child scope
    let fun = "AHHHHH";
    console.log(3, fun);
}

console.log("window", fun);

funFunction();
funerFunction();
funestFunction();