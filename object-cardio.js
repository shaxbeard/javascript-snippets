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
  },
  bbb222: {
    name: "Kyle Lowry",
  },
  ccc333: {
    name: "Spicy P",
  },
};

function names1(obj) {
  return Object.keys(obj).map((key) => obj[key].name);
}
function names2(obj) {
  return Object.values(obj).map((raptor) => raptor.name);
}
function names3(obj) {
  return Object.entries(obj).map(([key, raptor]) => raptor.name);
}

console.log(names1(raptors));
console.log(names2(raptors));
console.log(names3(raptors));

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

Object.values(products).forEach((productCategory) => {
  productCategory.forEach((product) => {
    if (product.selected) {
      selectedProducts.push(product);
      numProductsSelected++;
    }
  });
});

console.log("Selected Products", selectedProducts);
console.log("Num Products Selected", numProductsSelected);
