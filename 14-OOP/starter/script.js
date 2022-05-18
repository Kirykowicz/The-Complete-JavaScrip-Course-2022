'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this! it will create lots of functions and be terrible for performance
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const robert = new Person('Robert', 1991);
console.log(robert);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Person.prototype.retire = function () {
  const age = 2022 - this.birthYear;
  return 65 - age;
};

robert.calcAge();
console.log(Person.prototype);
console.log(robert);

Person.prototype.species = 'Home Sapiens';

console.log(robert.__proto__);
console.log(robert.__proto__.__proto__);
console.log(robert.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
