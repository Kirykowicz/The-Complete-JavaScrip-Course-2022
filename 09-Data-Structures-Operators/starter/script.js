'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// *********** Coding Challenge #4 ************

/* underscore_case;
first_name;
Some_Variable;
calculate_AGE;
delayed_departure;
 */
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

//******* Working with strings part 3**********

/* console.log('a+very+nice+string');
console.log('a+very+nice+string'.split('+'));
console.log('Robert Kirykowicz'.split(' '));

const [firstName, lastName] = 'Robert Kirykowicz'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// padding

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + ' ';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123456789));
maskCreditCard('4985724875203485720945');

const message2 = 'Bad weather...All departures delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(7); */

// ****** Working with strings part 2 ******

/* const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());
console.log('robert'.toLocaleUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';
const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// or do it this way
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing parts of strings

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

// ****** Working with strings part 1 ******

/* const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('b737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(3));
console.log(airline.slice(4));
console.log(airline.slice(airline.indexOf('a')));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-3));

const checkMiddleSeat = function (seat) {
  const s =
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'Middle' : 'Not Middle';
  console.log(s);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */

//***************** Coding Challenge #3 ******

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents.size);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents.size);

//3

const average = 90 / gameEvents.size;
console.log(average);

console.log(`An event happened, on average, every ${average} minutes`);

//4

for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[first half]${min}: ${event}`);
  } else {
    console.log(`[second half]${min}: ${event}`);
  }
}

// or you could do it like this

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
} */

//********* Maps: Iteration ********

/* const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

const hoursMap = new Map(Object.entries(openingHours));

console.log(question);

console.log(openingHours);
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// or write it like this

console.log(question.get(question.get('correct') === answer));

console.log([...question]);
 */
// Convert Map to Array

// ********** Maps ********************

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italia');
console.log(rest.set(2, 'Lisbon Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(false));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();

const arr = [1, 2];

rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
 */
// ************* Sets ********************

/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Robert'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
//ordersSet.clear();
//console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique); */

// Challenge #2
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal# ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) average += odd;

average /= odds.length;
console.log(average);

const y = Object.entries(game.odds);
for (const [team, odd] of y) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
} */
// Looping Objects
/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:  `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we are open from ${open} to ${close}`);
} */

/* console.log(restaurant.openingHours.thu);
//console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderRisotto?.(0, 1)); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
} */

/* 
// Coding Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */

/* //1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(playersFinal);
//5
const team1 = game.odds.team1;
console.log(team1);
const draw = game.odds.x;
console.log(draw);
const team2 = game.odds.team2;
console.log(team2);

//6

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }

  console.log(`${players.length} goals were scored`);
};

printGoals('Robert', 'Katie', 'Konrad');
printGoals(...game.scored); */

//7

/* const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numNonGuests ||= 56;

rest2.owner &&= 'Anonamous';
rest1.owner ||= 'Anonamous';

console.log(rest1);
console.log(rest2);
 */
/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);
console.log(a);
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];

console.log(otherFood);
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3, 5);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('sardines', 'cheese', 'dough', 'sauce');

restaurant.orderPizza('peperoni'); */
/* const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(arr);
console.log(newArr);
console.log(...newArr);

console.log(...restaurant.mainMenu);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

const mainMenu = [...restaurant.mainMenu];

const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(wholeMenu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); */

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 1,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

console.log(categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(hours);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects

console.log(openingHours);

/* const {
  fri: { open, close },
} = openingHours;
console.log(open);
console.log(close); */

/* const { fri } = openingHours;
console.log(fri);

const { open: friOpen, close: friClose } = fri;

console.log(friOpen);
console.log(friClose);
console.log(fri) */

/* const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [robert, katie, puzo] = arr;

console.log(robert);
console.log(katie, puzo);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);
[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);
console.log(k);

// default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

/* const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function LookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'no such property';
    }
  }
  return 'No such contact';
  f;
}

const data = LookUpProfile('Harry', 'likes');

console.log(data); */
