// !! Arrow functions provides a shorter and neater way to write a function expression

//  syntax
const add = (x, y = 99) => x + y;

console.log(add(8), "HHHHHHHHHH");

// ** If you use the block syntax with an arrow fucntion, you need to use the return statement
const add3 = (r, y) => {
  return r + y;
};

console.log(add3(8, 7));

// Sort an array in descending order using arrow function

let numbers = [3, 4, 6, 7, 8];

const result = numbers.sort((a, b) => {
  return b - a;
});
console.log(result);

// !! If an arrow function takes a single parameter, you use the following syntax:
//  (p1) => { statements } || p1 => {statements}

let names = ["John", "Mac", "Peter"];
// let lengths = names.map((name) => name.length);

// **  Two main differences between an arrow function and a regular function.

// ! An arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.
