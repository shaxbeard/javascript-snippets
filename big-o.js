// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(box => {
//     console.log(box);
//   });
//   boxes2.forEach(box => {
//     console.log(box);
//   });
// }

// const boxes = [1, 3, 5, 7, 9];
// const boxes2 = [1, 3, 5, 7, 9, 200, 1000];

// compressBoxesTwice(boxes, boxes2);

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

const pairs = ["a", "b", "c", "d", "e"];
logAllPairsOfArray(pairs);
// time complelxity is O(n) * O(n) = O(n^2) because the second loop is nested
// we get 25 pairs of letters when we pass in an array of 5 items
// the inner loop compares each item with every other item (and itself)
// so we get 5 x 5 outputs
