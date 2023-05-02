var x = 21;

function hoistBad() {
  console.log(x);
  var x = 99;
}

hoistBad(); // output will be UNDEFINED !!
