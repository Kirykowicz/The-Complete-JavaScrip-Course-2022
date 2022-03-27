'use strict';

// --- The call and apply Methods ---

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(12, 'Robert');
lufthansa.book(239, 'Jonas Schmedtmann');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 29, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Katie Kirykowicz');
console.log(swiss);

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

console.log(swiss);

book.call(eurowings, ...flightData);
console.log(eurowings);

// --- Functions returning Functions

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Robert');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Buongiorno')('Jose');
 */
// ----Functions Accepting Callback Functions ----

/* const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: the ${fn.name} function`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord); */

// ---- Value vs. Referece ----

/* const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.random() * 10000000000;
};

console.log(jonas);
newPassport(jonas);
console.log(jonas); */

// ---- Default Parameters ----

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
};

createBooking('Lh123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
 */
