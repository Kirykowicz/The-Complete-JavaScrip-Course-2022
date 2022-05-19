'use strict';

/* const Person = function (firstName, birthYear) {
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
console.dir(Person.prototype.constructor); */

// class expression
// const PersonCl = class {};

// class decleration
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  youAreOld() {
    console.log(`${this.firstName} was born in ${this.birthYear}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Miller', 1996);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
jessica.youAreOld();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log(jessica.age);

console.log(jessica);
const katie = new PersonCl('Katie Kirykowicz', 1990);
console.log(katie);

console.log(katie.fullName);
 */

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1987);
console.log(sarah);
sarah.calcAge();
