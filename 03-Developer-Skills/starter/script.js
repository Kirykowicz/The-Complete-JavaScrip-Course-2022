// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 25;
if (x === 23) {
  console.log("x");
}

console.log("hello");

console.log(`does it change?`);

console.log("yes it does");

console.log("lets see what happens");

console.log("what about now");

console.log("what happens now?");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} Days... `;
  }
  console.log(str);
};

printForecast(data1);
