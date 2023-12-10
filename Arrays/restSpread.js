// spread: RIGHT
const arr = [4, 5, 6];

const nums = [1, 2, 3];

const all = [0, ...nums, ...arr];
console.log(all);
// get individual items
console.log(...nums);

// Rest: left

const arrr = [1, 2, 3, 5, 7];

const [a, b, ...others] = arrr;
console.log(others);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(1, 2, 3, 4, 5, 6, 7));
console.log(add(1, 2, 3, 4));
