//SECTION #1 - WORKING WITH A SINGLE OBJECT

const sales = {
  John: 30,
  Sally: 40,
  Rob: 35,
  Ringo: 55,
  Kimmy: 12,
};

// console.log(Object.keys(sales));
// console.log(Object.values(sales));
// console.log(Object.entries(sales));

// function sumSales(obj) {
//   let sum = 0;
//   for (let value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// }

// function personSales(obj) {
//   for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key} has ${value} sales`);
//   }
// }

// console.log(sumSales(sales));
// console.log(personSales(sales));

//SECTION #2 - WORKING WITH MULTIPLE NESTED OBJECTS

const raptors = {
  aaa111: {
    name: "Kawhi Leonard",
    age: 33,
  },
  bbb222: {
    name: "Kyle Lowry",
    age: 29,
  },
  ccc333: {
    name: "Spicy P",
    age: 22,
  },
};

// function names1(obj) {
//   return Object.keys(obj).map(key => obj[key]);
// }
// function names2(obj) {
//   return Object.values(obj).map(raptor => raptor.name);
// }
// function names3(obj) {
//   return Object.entries(obj).map(([key, raptor]) => raptor.name);
// }

// const myRaptor = names1(raptors);
// myRaptor.forEach(raptor => console.log(raptor.age));

// const myRaptorValue = Object.keys(raptors).map(key => raptors[key]);
// console.log(myRaptorValue.name);

//SECTION #3 - WORKING WITH MULTIPLE NESTED OBJECTS CONTAINING ARRAYS
//Some of the objects inside of the arrays have "selected:true" and the unselected ones don't have that property at all

//If the product has the "selected:true" property, I want to push that object to the "selectedProducts" array

const selectedProducts = [];
let numProductsSelected = 0;

const products = {
  V21: [
    {
      id: 5,
      name: "Unison",
    },
    {
      id: 7,
      name: "Wireless",
      selected: true,
    },
  ],
  SGi: [
    {
      id: 15,
      name: "Home Phone",
      selected: true,
    },
    {
      id: 16,
      name: "Internet",
      selected: true,
    },
    {
      id: 33,
      name: "Cable",
    },
  ],
  M: [
    {
      id: 6,
      name: "Ignite",
      selected: true,
    },
    {
      id: 21,
      name: "Smart Home Monitoring",
    },
  ],
};

// Object.values(products).forEach(productCategory => {
//   productCategory.forEach(product => {
//     if (product.selected) {
//       selectedProducts.push(product);
//       numProductsSelected++;
//     }
//   });
// });

// console.log("Selected Products", selectedProducts);
// console.log("Num Products Selected", numProductsSelected);

//Overwrite a prooperty from a single object with a property from another single object
let salesPeople = {
  John: 30,
  Sally: 40,
  Rob: 35,
  Ringo: 55,
  Kimmy: 12,
};

let older = {
  John: 122,
};

salesPeople = { ...salesPeople, John: older.John };

// console.log(salesPeople);

//Overwrite a property of a single object inside of an array
let robotTeams = [
  {
    id: 1,
    Robots: ["Siri", "Alexa", "Google"],
  },
  {
    id: 2,
    Robots: ["Bill", "Gary", "Phil"],
  },
  {
    id: 3,
    Robots: ["Joan", "Millie", "Bertha"],
  },
];

let newRobotMaster = {
  id: 1,
  Robots: ["just Siri"],
};

// robotTeams = { ...robotTeams[0], Robots: newRobotMaster.Robots };

// const newRobotTeams = robotTeams.map(
//   item => ( ...robotTeam.Robots = newRobotMaster.Robots)
// );

// console.log(newRobotTeams);

// WORKING WITH OBJECTS WITH A SINGLE KEY AND A SINGLE ARRAY FOR EACH KEY
// You can use Object.entries to access both the key and the value of each property
// The first item you destructure is the key
// The second item you destructure is the value

// const programs = {
//   267: [3, 5, 9],
//   333: [1, 2, 9],
//   11: [4, 7, 8],
// };

// const extractIdandDay = Object.entries(programs).map(([id, day]) =>
//   console.log(`The program id is ${id}`, `The day is ${day}`)
// );

const active_programs = [
  {
    delday: 3,
    program: {
      program_name: "Enterprise Systems",
    },
    program_id: 266,
  },
  {
    delday: 5,
    program: {
      program_name: "Enterprise Systems",
    },
    program_id: 266,
  },
  {
    delday: 1,
    program: {
      program_name: "Some other program name",
    },
    program_id: 11,
  },
];

//WORKING WITH OBJECTS WITH A SINGLE KEY AND ANOTHER NESTED OBJECT
const programs = {
  111: {
    days: [11, 22, 9],
    program_id: 111,
    name: "zz last program name",
  },
  267: {
    days: [3, 5, 9],
    program_id: 267,
    name: "myProgramName",
  },
  999: {
    days: [2, 3, 4],
    program_id: 999,
    name: "aa-first program name",
  },
};

// Step #1 - Convert the nested object into an array of objects
// const myProgramArray = Object.keys(programs).map(key => programs[key]);
// console.log(myProgramArray);

// Step #2 - Sort the array of objects by the name property
// const sortedPrograms = myProgramArray.sort(
//   (a, b) => (a.name > b.name ? 1 : -1) // this works, but why needed?
// );

// const sortedPrograms = Object.keys(programs)
//   .map(key => programs[key])
//   .sort((a, b) => (a.name > b.name ? 1 : -1));

// console.log(sortedPrograms);

//Another example of converting to array then sort
// const maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60,
// };

// const sortable = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => a - b)
//   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

// console.log(sortable);

// Write a function `loopThroughAnimals()` that takes in an object
// with properties in the following format:
// `key: {species: "animal type"}` e.g. `dory: {species: "fish"}`
// >
// > Your function should loop through the argument object.
// It should log to the console each property in the following
// format: `key : animal type` e.g. `dory : fish`

let pets = {
  Scooter: { species: "cat" },
  Bucket: { species: "fish" },
  Blammo: { species: "dog" },
};

// ACCESS NESTED PROPERTY VALUE USING THE NESTED KEY NAME
// const loopThroughAnimals = obj => {
//   for (const key in obj) {
//     console.log(`${key}: ${obj[key].species}`);
//   }
// };

// ACCESS NESTED PROPERTY VALUE USING A VARIABLE INSTEAD OF THE NESTED KEY NAME
// const loopThroughAnimals = obj => {
//   for (const key in obj) {
//     for (const innerKey in obj[key]) {
//       console.log(`${key}: ${obj[key][innerKey]}`);
//     }
//   }
// };
// loopThroughAnimals(pets);

let data = {
  subsets: [
    {
      id: 2238,
      asset_id: 304,
      subset_asset_id: 1,
      subset_ccode_id: "R00001",
    },
    {
      asset_id: 304,
      subset_ccode_id: "F05659",
      subset_asset_id: "05659",
    },
  ],
};

// let courseRelationshipKey = "asset_id";

// let relationshipKeys = {
//   subsets: {
//     model: "subset",
//     truncate: true,
//   },
// };

// for (let key in relationshipKeys) {
//   let relationshipAttrs = relationshipKeys[key];
//   let relationshipData = data[key];

//   if (relationshipAttrs.innerKey) {
//     relationshipData = relationshipData.map(
//       val => val[relationshipAttrs.innerKey]
//     );
//   }
//   console.log(relationshipData);
// }

// ACCESSING VALUE IN OBJECT WITH A VARIABLE

// const birthyear = 2020;
// const years = {
//   1999: "Good",
//   2020: "Bad",
// };

// console.log(years[birthyear]);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

// USE SRPEAD SYNTAX TO MERGE TWO OBJECTS INTO A NEW OBJECT
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

// USE OBJECT.ASSIGN TO MUTATE AN EXISTING OBJECT
Object.assign(obj1, { x: 1337 });

console.log(obj1);
