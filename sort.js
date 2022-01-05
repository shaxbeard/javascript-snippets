//sorting strings

//MDN example of sorting numbers vs strings
const users = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
// items.sort((a, b) => a.value - b.value);

// // sort by name
// function sortByNames(obj) {
//   return obj.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   });
// }

// //StackOverflow top answers for sorting strings alphabetically
// function sortByNames(obj) {
//   return obj.sort((a, b) => a.name.localeCompare(b.name));
// }

function sortByNames(obj) {
  return obj.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
}

console.log(sortByNames(users));
