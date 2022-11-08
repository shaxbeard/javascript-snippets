const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// 1. FILTER
//Filter the list of inventors for those who were born in the 1500s

//1a. The full monty
// const fifteens = inventors.filter(function (inventor) {
//   if (inventor.year < 1600 && inventor.year >= 1500) {
//     return true; //keep it!
//   } else {
//     return false;
//   }
// });

//1b. Explicit return statement and curly braces
// const fifteens = inventors.filter((inventor) => {
//   return inventor.year < 1600 && inventor.year >= 1500;
// });

// 1c. Implicit return statement, no curly braces
// const fifteens = inventors
//   .filter((inventor) => inventor.year < 1600 && inventor.year >= 1500)
//   .map((item) => item.last);

// console.table(fifteens);

// 2. MAP

//Give us an array of the inventors' first and last names
// const fullNames = inventors.map(
//   (inventor) => `${inventor.first} ${inventor.last}`
// );

// console.table(fullNames);

// 3. REDUCE TO MAKE A SUM OF ITEMS IN AN ARRAY

//How many years did all of the inventors live?

// 3a. Old school - Initialize a variable and loop over the array with for() loop
// let totalYears = 0;
// for (var i = 0; i < inventors.length; i++) {
//   totalYears += inventors[i].passed - inventors[i].year;
// }
// console.log(totalYears);

//3b. Using reduce - NOTE - just return + not +=
// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0);

// console.log(totalYears);

// 4. FIND

const comments = [
  { text: "Love this!", id: 54 },
  { text: "Super good!", id: 84 },
  { text: "You are the best!", id: 20 },
  { text: "Ramen is my fav food ever!", id: 12 },
  { text: "Nice nice nice!", id: 98 },
];

//Find the comment with the ID of 12

//4a. The full monty
// const myComment = comments.find(function (comment) {
//   if (comment.id === 12) {
//     return true;
//   }
// });

//4b. Implicit return and arrow function
// const myComment = comments.find((comment) => comment.id === 12)
// console.log(myComment);

//4c. Access an individual property instead of the entire object
// const myComment = comments.find((comment) => comment.id === 12).text; // !!!!!!!!
// console.log(myComment);
