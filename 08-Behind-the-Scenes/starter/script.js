'use strict';

// ---- The this keyword ----

const calAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

calAge(1991);
const calAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};

calAgeArrow(1980);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(2022 - this.year);
  },
};

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge;

jonas.calAge();

matilda.calAge();

const f = jonas.calAge;

// ----Variable Environment: Hoisting and the TDZ

// Variable examples
//console.log(me);
//console.log(job);
//console.log(year);

/* var me = 'Robert';
let job = 'Freight Broker';
const year = 1991; */

// Funtion examples

/* console.log(addDecl(1, 2));
console.log(addExpr(1, 2));
console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; */

// Example

/* if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3; */

// ------Scoping in practice
/* function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, you are ${age}, and were born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = 'New Output';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991); */

// this is how I would have written it, but I think the funtion above is being used for the scope examples.
/* function calcAge2(birthyear) {
  const age = 2037 - birthyear;
  const output = `I can also say that you are ${age} years old, and that you were born in ${birthyear}, right?`;
  console.log(output);
}

calcAge2(1991);
 */
