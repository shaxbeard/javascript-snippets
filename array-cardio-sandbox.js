const _ = require("lodash");

var programModules = [
  { delday: 7, program_id: 677 },
  { delday: 1, program_id: 677 },
  { delday: 11, program_id: 677 },
  { delday: 2, program_id: 679 },
  { delday: 3, program_id: 679 },
];

var programModules2 = [
  { program_id: 679, delday: 3 },
  { program_id: 679, delday: 2 },
  { program_id: 29, delday: 22 },
  { program_id: 42, delday: 3 },
  { program_id: 29, delday: 8 },
  { program_id: 677, delday: 1 },
  { program_id: 677, delday: 7 },
  { program_id: 677, delday: 5 },
  { program_id: 677, delday: 3 },
  { program_id: 677, delday: 2 },
  { program_id: 1, delday: 88 },
];

// GROUP THE DATA BY THE PROGRAM_ID VALUES WITH REDUCE()
const groupedActivePrograms = programModules.reduce(
  (groupedPrograms, program) => {
    const programId = program.program_id;
    if (groupedPrograms[programId] == null) groupedPrograms[programId] = [];
    groupedPrograms[programId].push(program.delday);
    return groupedPrograms;
  },
  {}
);

// console.log(result);
// console.log(Object.keys(result).length);

//GROUP THE DATA BY THE PROGRAM_ID VALUES WITH FOR()
// let groupedPrograms = {};

// for (let i = 0; i < programModules.length; i++) {
//   const programId = programModules[i].program_id;
//   if (groupedPrograms[programId] == null) {
//     groupedPrograms[programId] = [];
//   }
//   groupedPrograms[programId].push(programModules[i].delday);
// }
// console.log(groupedPrograms);

//GROUP THE DATA USING LODASH
// const output = _.groupBy(programModules, "program_id");
// console.log(output);

const objDates = [
  {
    Address: 25,
    AlertType: 1,
    Area: "North",
    MeasureDate: "2019-02-01T00:01:01.001Z",
    MeasureValue: -1,
  },
  {
    Address: 26,
    AlertType: 1,
    Area: "West",
    MeasureDate: "2016-04-12T15:13:11.733Z",
    MeasureValue: -1,
  },
  {
    Address: 25,
    AlertType: 1,
    Area: "North",
    MeasureDate: "2017-02-01T00:01:01.001Z",
    MeasureValue: -1,
  },
];

// THIS RETURNS JUST THE DATE ITSELF
// function minDate(arr) {
//   return arr
//     .map(function (e) {
//       return e.MeasureDate;
//     })
//     .sort()
//     .reverse()[0];
// }

// console.log(minDate(objDates));

// THIS RETURNS THE FULL OBJECT THAT HAS THE EARLIEST DATE
// function minDate(arr) {
//   return arr.reduce((a, b) => (a.MeasureDate > b.MeasureDate ? a : b));
// }

// console.log(minDate(objDates));

// USING DATE() AND THE FILTER METHOD
// function minDate(arr) {
//   var leastRecentDate = new Date(
//     Math.min.apply(
//       null,
//       arr.map(e => {
//         return new Date(e.MeasureDate);
//       })
//     )
//   );
//   console.log(leastRecentDate);
// var mostRecentObject = arr.filter(e => {
//   var d = new Date(e.MeasureDate);
//   return d.getTime() == mostRecentDate.getTime();
// })[0];
// }

// console.log(minDate(objDates));

// USING MATH.MIN ON AN ARRY OF DATES
// var dates = [];
// dates.push(new Date("2011/06/25"));
// dates.push(new Date("2011/06/26"));
// dates.push(new Date("2011/06/27"));
// dates.push(new Date("2011/06/28"));
// var maxDate = new Date(Math.max.apply(null, dates));
// var minDate = new Date(Math.min.apply(null, dates));

// console.log(dates);
// console.log(minDate);

const arrObj = [
  {
    CBP: "434697397",
    BAN: 921069522,
    Company: "Rogers",
    last_used_at: 2022-09-01T03:25:48.000Z
  },
  {
    CBP: "434697397",
    BAN: 921069522,
    Company: "Rogers",
    last_used_at: 2022-09-01T03:25:48.000Z
  },
  {
    CBP: "434697397",
    BAN: 921069522,
    Company: "Rogers",
    last_used_at: 2022-09-01T03:25:48.000Z
  },
];

console.log(arrObj[0][new Date(last_used_at)]);
