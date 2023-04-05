// SYNCHRONOUS VS ASYNCHRONOUS CODE
// const waitTimeMs = 100;
// const callback = () => {
//   console.log(`I print after ${waitTimeMs} milliseconds`);
// };

// console.log("I print first");
// setTimeout(callback, waitTimeMs);
// console.log("I print second");

// await sleep(waitTimeMs + 5);
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

//DECLARING A PROMISE
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    if (getRandomBool()) {
      resolve("resolved!");
      console.log("resolved");
    } else {
      reject("rejected!");
      console.log("rejected");
    }
  }, 1000);
});

function getRandomBool() {
  return Math.random() < 0.5;
}
