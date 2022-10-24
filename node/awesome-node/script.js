import fs from "fs";

fs.readFile("./hello.txt", (err, data) => {
  err ? console.log("erroorrrrrr") : console.log("Async", data.toString());
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

//Append
// fs.appendFile("./hello.txt", " This is so cool!!!", (err) => {
//   if (err) {
//     console.log("err");
//   }
// });

// WRITE
// fs.writeFileSync('bye.txt', 'Sad to see you go', err => {
//   if(err) {
//     console.log("err")
// }
// })

// DELETE
fs.unlinkSync('./bye.txt', err => {
  if (err) {
  console.log(err);
}
  console.log('Inception')
})


