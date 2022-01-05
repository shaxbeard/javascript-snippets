const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const comments = [
  { text: "Love this!", id: 54 },
  { text: "Super good!", id: 84 },
  { text: "You are the best!", id: 20 },
  { text: "Ramen is my fav food ever!", id: 12 },
  { text: "Nice nice nice!", id: 98 },
];

// 1. FILTER
//Filter the list of inventors for those who were born in the 1500s
const fifteens = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);
console.log(fifteens);

// 2. MAP
//Give us an array of the inventors' first and last names

// 2.5 SORT
// Sort the inventors by birthdate, oldest to youngest

// 3. REDUCE
//How many years did all of the inventors live?

// 4. FIND
//Find the comment with the ID of 12
