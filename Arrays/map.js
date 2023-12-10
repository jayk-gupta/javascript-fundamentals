/*
he map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const guest = ["jay", "ritika", "megha"];

// capitalize
// need to return when using braces
const names = guest.map((name) => {
  const n = name.split("");
  const initial = n[0].toUpperCase();
  n[0] = initial;
  return n.join("");
});
// no return needed when no braces used
const names2 = guest.map((name) => name.toUpperCase());

// console.log(names);
// console.log(names2);

// use external function
const a = [1, 2, 3, 4];

function checkEven(num) {
  return num % 2 === 0;
}

const ans = a.map((num) => checkEven(num));
console.log(ans);
