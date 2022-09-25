
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//#2
let a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
let a = 1;
function q4() {
    let a = "test";
    alert(a);
}

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(a);
}
alert(a);