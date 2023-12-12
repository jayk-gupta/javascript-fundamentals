const fs = require("fs");

// function ReadFile() {
//   return new Promise((resolve) => {
//     console.log("before read file");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// ReadFile().then((data) => {
//   console.log("after file read");
//   console.log(data);
// });

function asyncFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('hello'),2000)
  })
}

async function main() {
  let res = await asyncFunc()
  // the logic after await runs when we get the res
  // all the logic after this await is stuck in this function
  // thread goes on whatever is there after this funciton
  console.log('hi');
  console.log(res);
}

main()
console.log('after main');