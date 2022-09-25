// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let forArray = [];
array.forEach( user => {
  let { username } = user;
  forArray.push(username + "!");
})

console.log('forEach: ' , forArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map( user => {
  return user.username + "?";
})

console.log("mapArray: " , mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter( user => {
    return user.team == 'red';
})

console.log("filterArray: " , filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce ( (acc, user) => {
  return acc + user.score;
}, 0)

console.log("reduceArray: " , reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);