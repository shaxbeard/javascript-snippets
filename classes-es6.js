// CREATE OBJECT WITH LITERAL NOTATION
// GET/SET PROPERTIES AND METHODS WITH DOT NOTATION

const { times } = require("lodash");

// let stopwatch = {};

// stopwatch.currentTime = 12;

// stopwatch.tellTime = function (time) {
//   console.log(`The current time is ${time}.`);
// };

// stopwatch.tellTime(stopwatch.currentTime);

//CREATE OBJECT WITH ES5 OBJECT CONSTRUCTOR

// function makeCar(carMake, carModel, carColor, numOfDoors) {
//   this.make = carMake;
//   this.model = carModel;
//   this.color = carColor;
//   this.doors = numOfDoors;
//   this.honk = function () {
//     console.log("BEEP BEEP FORGET YOU");
//   };
//   this.lock = function () {
//     console.log(`Locked ${this.doors} doors!`);
//   };
// }
// let hondaCivic = new makeCar("Honda", "Civic", "Silver", 4);
// console.log(hondaCivic);

//CREATE OBJECT WITH ES6 CLASS SYNTAX

// class makeCar {
//   constructor(carMake, carModel, carColor, numOfDoors) {
//     this.make = carMake;
//     this.model = carModel;
//     this.color = carColor;
//     this.doors = numOfDoors;
//   }
//   honk() {
//     console.log("BEEP BEEP FORGET YOU");
//   }
//   lock() {
//     console.log(`Locked ${this.doors} doors!`);
//   }
// }
// let hondaCivic = new makeCar("Honda", "Civic", "Silver", 4);
// console.log(hondaCivic);

// function AgencyContractor(hourlyRate, hours, taxRate) {
//   this.hourlyRate = hourlyRate;
//   this.hours = hours;
//   this.taxRate = taxRate;
//   this.calculateProfit = function () {
//     return this.hourlyRate * this.hours * (1 - this.taxRate);
//   };
//   this.invoiceClient = function () {
//     return `Your invoice total is ${this.hourlyRate * this.hours}`;
//   };
// }
// let leon = new AgencyContractor(250, 160, 35);
// console.log(leon.invoiceClient());

class AgencyContractor {
  constructor(hourlyRate, hours, taxRate) {
    this.hours = hours;
    this.taxRate = taxRate;
    var rate = hourlyRate;
  }
  calculateProfit() {
    return this.hourlyRate * this.hours * (1 - this.taxRate);
  }
  invoiceClient() {
    return `Your invoice total is ${rate * this.hours}`;
  }
}
let leon = new AgencyContractor(99, 260, 0.35);
console.log(leon.invoiceClient());
console.log(leon.hourlyRate);
console.log(leon.calculateProfit());

//CREATE OBJECT WITH ES6 CLASS SYNTAX AND THEN INHERIT PROPERTIES/METHODS

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }
