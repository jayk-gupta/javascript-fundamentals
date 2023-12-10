const jay = {
  firstName: 'jay',
  lastName: 'Gupta',
  job: 'student',
  skills: ['React', 'CSS', 'Javascript'],
  'fav lang': 'Java',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(jay);
// . notation for one word value
console.log(jay.firstName);
// [] braket notation: using quotes
console.log(jay['firstName']);
// 
console.log(jay['fav lang']);
// adding new property
jay.gf = false
jay.age = 22

console.log(jay);
// copy object without modifying:

const objCopy = Object.assign(jay)
console.log(objCopy);

// to get keys:
const keys = Object.keys(jay)
console.log(keys)
// to get values
const values = Object.values(jay)
console.log(values)

// Getting object keys and values using Object.entries()
// array of key value pair
console.log(Object.entries(jay));

// method
console.log(jay.getFullName());