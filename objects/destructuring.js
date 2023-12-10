const restaurant = {
  name: "Rose In",
  location: "Durg",
  categories: ["italain", "vegetarain"],
  starterMenu: ["manchurian", "kabab", "paneer chilli"],
  orderDelivery: function ({ starterIndex, mainIndex,time, address }) {
    
  }
};
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 12,
    close: 20,
  },
  sat: {
    open: 11,
    close: 23,
  },
};
// name different property than object property
const { thu: day1, fri: day2, sat: day3 } = openingHours;

console.log(day1);

const { menu = [], starterMenu } = restaurant;
console.log(menu);
console.log(starterMenu);

// mutating variables
let a = 12;
let b = 14;
let obj = { a: 2, b: 3, c: 4 }
  // ({ a, b } = obj);


// nested  object

const { fri: { open, close } } = openingHours
console.log(open, close);

restaurant.orderDelivery({
  starterIndex: "",
  
})