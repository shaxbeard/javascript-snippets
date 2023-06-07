// const sgi = ["Cable", "Home Phone", "Internet"];
// const selectedProducts = ["Home Phone", "Cable", "Internet"];

// if (JSON.stringify(sgi) === JSON.stringify(selectedProducts.sort())) {
//   console.log("The arrays are identical.");
// } else {
//   console.log("The arrays are not identical.");
// }

const sgi = ["Cable", "Internet", "Home Phone"];
// const selectedProducts = ["Home Phone", "Cable", "Internet"]; // true
const selectedProducts = ["Cable", "Wireless"]; // false
// const selectedProducts = ["Cable", "Home Phone"]; // false

const hasNonMatchingItem = selectedProducts.some(item => !sgi.includes(item));

// If selectedProducts only has items that are in the sgi array, then I want NO BAN FILTER ideally
// If selectedProducts DOES HAVE an item that is not in the sgi array (a non-matching item), then I was to include the BAN filter

if (hasNonMatchingItem) {
  console.log(
    "There is at least one item in selectedProducts that is not present in sgi."
  );
} else {
  console.log("All items in selectedProducts are present in sgi.");
}
