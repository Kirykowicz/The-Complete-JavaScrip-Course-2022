"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} has accelerated to a speed of ${this.speed} MPH`
  );
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(
    `The ${this.make} has decelerated to a speed of ${this.speed} MPH`
  );
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
