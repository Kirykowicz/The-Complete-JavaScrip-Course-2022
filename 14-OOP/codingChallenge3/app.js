"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeto = function (chargeto) {
  this.charge = chargeto;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at a speed of ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);

console.log(tesla);
tesla.chargeto(90);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.accelerate();
