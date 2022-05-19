"use strict";

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spead) {
    this.speed = spead * 1.6;
  }
}

const ford = new CarCL("Ford", 120);
console.log(ford);

ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);

ford.speedUS = 50;
console.log(ford);
