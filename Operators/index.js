// condition? true statement to execute: if false this will be executed

const age = 18;

const checkAdult = age > 18 ? "adult" : "not adult";

console.log(checkAdult);

// OR: Returns first truthy value
console.log("a" || 4 || "" || 0);
// all false: last value return
console.log("" || false || "" || 0);
// AND: Returns first falsy value
console.log("a" && 4 && "" && 0);
// all true: return last value
console.log(true && "cd" && 2 && 5);

// nullish coaelsicng
// ??: if first value is undefined or null i t will return second value
console.log(null??'hi');
