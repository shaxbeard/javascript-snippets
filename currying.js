// Currying example
// Example f(a,b) into f(a)(b)

// FIRST A NORMAL FUNCTION WITH TWO PARAMETERS
function f(a, b) {
  console.log(a, b);
}

// SECOND A CURRYING FUNCTION
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

// CURRYING INTERVIEW QUESTION #5
// Implement infinite currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
//NOTE - you must pass the empty function as the last argument
console.log(add(2)(6)(1)(4)(5)(6)(), 24);
