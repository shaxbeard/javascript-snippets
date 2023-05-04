// Currying example
// Example f(a,b) into f(a)(b)

// FIRST A NORMAL FUNCTION WITH TWO PARAMETERS
// function f(a, b) {
//   console.log(a, b);
// }

// SECOND, A CURRYING FUNCTION THAT DOES THE SAME AS ABOVE
// function f(a) {
//   // returns an anonymous function
//   return function (b) {
//     // the innermost anonymous function returns the values
//     return `${a} ${b}`;
//   };
// }
// console.log(f("hello")("world"));

// CURRYING INTERVIEW QUESTION #1
// Do this task using currying - sum(2)(6)(1)

// First show a solution without currying
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 6, 1), 9);

// Second show a solution with currying
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1), 9);

// CURRYING INTERVIEW QUESTION #2
// Write a function tat would allo you to do this:
// var addSix = createBase(6); // To assign a function call to a variable
// addSix(10); // returns 16 - // Now you can call that variable and pass another number
// addSix(21); // returns 27

// function createBase(num) {
//   return function (innerNum) {
//     return innerNum + num;
//   };
// }

// var addSix = createBase(6); // To assign a function call to a variable
// console.log(addSix(10), 16); // returns 16 - // Now you can call that variable and pass another numberaddSix(10); // returns 16 - // Now you can call that variable and pass another number
// console.log(addSix(21), 27); // returns 27addSix(21); // returns 27

// CURRYING INTERVIEW QUESTION #5
// Implement infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
//NOTE - you must pass the empty function as the last argument
console.log(add(2)(6)(1)(4)(5)(6)(), 24);
