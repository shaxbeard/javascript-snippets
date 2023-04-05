// const dateFields = [1970, 0, 1]; // 1 Jan 1970
// const d = new Date(...dateFields);
// console.log(d);

// SPREAD TO CONCATENATE ARRAYS
// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// arr1 = arr1.concat(arr2);
// arr1 = [...arr1, ...arr2];
// // arr1 is now [0, 1, 2, 3, 4, 5]
// console.log(arr1);

//SPREAD TO CONVERT AN ARRAY INTO AN OBJECT
// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// console.log(obj);

// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable

// console.log(array);

// // SPREAD IN OBJECT LITERALS - INCLUDING MERGING TWO OBJECTS
// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };

// const clonedObj = { ...obj1 }; // { foo: "bar", x: 42
// const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 13 }
// console.log(clonedObj);
// console.log(mergedObj);

// // BUT - SPREAD CANNOT MUTATATE OBJECTS - USE OBJECT.ASSIGN TO DO SO
// const obj1 = { foo: "bar", x: 42 };
// Object.assign(obj1, { x: 1337 });
// console.log(obj1); // { foo: "bar", x: 1337 }
