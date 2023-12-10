const ar = [1, 2, 3, 4, 5]

const [c, d] = ar;
// console.log(c,d);

// skip: leave commas
const [a,,, b] = ar;

console.log(a, b);

const n = [1, 2, [3, 4]]

const [r, s, [x,y]] = n
console.log(r,s,x,y);