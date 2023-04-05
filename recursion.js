// A SIMPLE RECURSIVE FUNCTION

// const logNTimes = n => {
//   console.log("n ===", n);
//   if (n <= 1) {
//     return "complete";
//   }
//   return logNTimes(n - 1);
// };

// console.log(logNTimes(10));

// CALL STACK GAME

// var tracker = 0;
// var callMe = function (arg) {
//   console.log("call me");
//   tracker++;
//   if (tracker === 3) {
//     return arg;
//   }
//   return callMe("anytime");
// };

// console.log(callMe());

// var callMyself = function() {
//     if () {
//         //base case
//         return;
//     } else {
//         // recursive case
//         callMyself()
//     }
//     return
// }

// AN ITERATIVE SOLUTION TO FACTORIAL
// function computeFactorial(num) {
//   var result = 1;

//   for (var i = 2; i <= num; i++) {
//     console.log(`result = ${result} * ${i} (${result * i})`);
//     result *= i;
//   }
//   return result;
// }

// console.log(computeFactorial(5));

// A RECURSIVE SOLUTION TO FACTORIAL
// function computeFactorial(num) {
//   if (num === 1) {
//     return 1;
//   } else {
//     console.log(`returning ${num} * computeFactorial(${num - 1})`);
//     return num * computeFactorial(num - 1);
//   }
// }

// console.log(computeFactorial(5));

// LOG N TIMES WITH A FOR() LOOP
// function logNTimes(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }

// LOG N TIMES WITH RECURSION COUNTING DOWN FROM N TO ZERO
// const logNTimes = n => {
//   console.log("n ===", n);
//   if (n <= 1) {
//     return "complete";
//   }
//   return logNTimes(n - 1);
// };

// logNTimes(10);

// LOG N TIMES WITH RECURSION COUNTING UP FROM N to x
// const logNTimes = (n, x) => {
//   console.log("n ===", n);
//   if (n >= x) {
//     return;
//   }
//   return logNTimes(n + 1, x);
// };
// logNTimes(0, 10);

// INFINTE LOOP WITH RECURSION DEMO
// function callMe() {
//   callMe();
//   callMe();
//   callMe("anytime");
// }
// callMe();

// function countdown(n) {
//   console.log(n);
//   //base case
//   if (n === 1) {
//     return;
//   }
//   //recursive case
//   countdown(n - 1);
//   return "boom";
// }

// console.log(countdown(10));

// TASK 1 - RECURSIVE FACTORIAL METHOD - NO PEEKING

// TASK 2 - MEMOIZE MY FACTORIAL METHOD
