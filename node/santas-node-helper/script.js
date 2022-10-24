import fs from "fs";
// 1 - What floor does Santa end up on
// ( --> should go up 1 floor
// ( --> should go down 1 floor

function question1() {
  console.time("santa-time");
  fs.readFile("./input.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentItem) => {
      if (currentItem === "(") {
        return (acc += 1);
      } else if (currentItem === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.log("floor", answer);
    console.timeEnd("santa-time");
  });
}

question1();

// 2 - When dows Santa first enter the basement
function question2() {
  console.time("santa-time")
  fs.readFile("./input.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === "(") {
        (accumulator += 1);
      } else if (currentItem === ")") {
        accumulator -= 1;
      }
      counter++
      return accumulator < 0;
    });
    console.log("basement entered at :", counter);
  })
  console.timeEnd("santa-time")
}
question2();
