function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encountered a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "left":
            whatHappens = "You found a river"; 
            break;
        case "right":
            whatHappens = "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a velid direction";
    }
    return whatHappens;
}


// function on my own for practice
function birthday(mon) {
    let month;
    switch (mon) {
        case 1 :
            month = "January";
            break;
        case 2 :
            month = "February";
            break;
        case 3 :
            month = "March";
            break;
        case 4 :
            month = "April";
            break;
        case 5 :
            month = "May";
            break;
        case 6 :
            month = "June";
            break;
        case 7 :
            month = "July";
            break;
        case 8 :
            month = "August"; 
            break;
        case 9 :
            month = "September";
            break;
        case 10 :
            month = "October";
            break;
        case 11 :
            month = "November";
            break;
        case 12 :
            month = "December";
            break;
        default:
            month = "Please enter a valid month number";
    }
    return month;
}