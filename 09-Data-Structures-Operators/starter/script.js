'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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
};

//1
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
printGoals(...game.scored);

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

const contacts = [
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
}

const data = LookUpProfile('Harry', 'likes');

console.log(data);
