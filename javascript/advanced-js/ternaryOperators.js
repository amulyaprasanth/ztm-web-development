// condition ? expr1 : expr2

function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(false) ? "You may enter" : "Access Denied";

let automatedAnswer = "Your account # is " + ( isUserValid(true) ? "1234" : "not available");


// Above is same as function below
function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access Denied";
    }
}

let answer2 = condition();