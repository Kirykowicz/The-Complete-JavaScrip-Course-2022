'use strict';

function calcAge(birthyear) {
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
calcAge(1991);

// this is how I would have written it, but I think the funtion above is being used for the scope examples.
function calcAge2(birthyear) {
  const age = 2037 - birthyear;
  const output = `I can also say that you are ${age} years old, and that you were born in ${birthyear}, right?`;
  console.log(output);
}

calcAge2(1991);
