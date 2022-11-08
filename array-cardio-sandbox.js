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
