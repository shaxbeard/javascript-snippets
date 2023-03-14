const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 1];

const containsDuplicates = function (nums) {
  const uniques = [...new Set(nums)];
  return uniques.length !== nums.length;
};
console.log(containsDuplicates(arr1));

const uniq = [...new Set(arr2)];
const uniq2 = [...new Set([...arr2])];
console.log(uniq);
console.log(uniq2);
