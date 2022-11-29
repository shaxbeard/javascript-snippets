// USING FOR ... OF

// function charMap(str) {
//   let charMap = {};
//   for (let char of str) {
//     if (charMap.hasOwnProperty(char)) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// }

//USING REDUCE

function charMap(str) {
  return str.split("").reduce((obj, char) => {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
    return obj;
  }, {});
}

console.log(charMap("aaabbbccd"), { a: 3, b: 3, c: 2, d: 1 });

let myObject = {};
myObject["a"] = 5;
// console.log(myObject[b]);
