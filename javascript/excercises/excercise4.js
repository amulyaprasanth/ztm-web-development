age = Number(prompt("Enter your age: "))
if (age < 18) {
    alert("Sorry, You are not old enough to drive, Turing off");
}

else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {
    alert("Powering On. Enjoy the ride");
}