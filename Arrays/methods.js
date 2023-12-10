// find
// find(callbakc fn,this arg)
// it return element
/*
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/ 
const names = ['jay', 'shubh', 'amaan', 'ritika', 'mrigakshi']

const found = names.find((name) => name.length>6)
console.log(found);

// to find index use findIndex()


// includes:
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.