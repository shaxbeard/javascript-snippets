// PROTOTYPES WITH NON-ES6 CONSTRUCTOR FUNCTION
function Particle() {
  this.x = 100;
  this.y = 99;
  //   this.show = function () {
  //     console.log(this.x);
  //     console.log(this.y);
  //   };
}
Particle.prototype.show = function () {
  console.log(this.x);
  console.log(this.y);
};

var p = new Particle();
var p2 = new Particle();
console.log(p);
console.log(p2);
