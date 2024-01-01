const a1 = [1, 2, 3];
/*
console.log(a1[0]);
console.log(a1);
a1.push('a','b','c') // adds to end end
a1.pop() // removes last element
console.log(a1);

a1.unshift('0') // adds to begining
console.log(a1);

a1.shift()// removes first element
console.log(a1); */
///////////////////////////////////////////////////////////////////////
// fill(value, start, end)
const arr = Array(6).fill("a", 1, 3);
console.log(arr);
// concat
const a = [1, 2, 3];
const b = [3, 4, 5,[6,7],[7,8,[9,10]]];
const c = a.concat(b);
console.log(c);
const d = c.flat(2)
console.log(d);

// join
const ar = ['a', 'b', 'c']
const s = ar.join('.')
console.log(s);

// slice: original not modified: slice(start,end)
// shallow copy
// end not included

let v = [1, 2, 3, 4, 5]
let ans = v.slice(0, 2)
console.log(ans);
console.log(v);

// splice:
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice(start,items to del from start,items to add,item1,item2...)
ans = v.splice(1, 3,22,23)
console.log(ans);
console.log(v);

