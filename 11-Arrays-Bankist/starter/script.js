'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - does not mutate
/* console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE - mutates
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2); // arr2 is mutated

// CONCAT

const letters = arr.concat(arr2.reverse());
console.log(letters);
console.log(arr2);

// JOIN
console.log(letters.join('-_-')); */

/* const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));
console.log('Robert'.at(3));
 */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('---------ForEach()---------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`Deposited: ${movement}`);
  } else {
    console.log(`Withdrew: ${Math.abs(movement)}`);
  }
});
console.log('------With index --------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${movement} at index: ${i}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)} at index: ${i}`);
  }
}
console.log('--------forEach() with the index---------');

movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`at index ${i} you deposited $${mov} into ${arr}`);
  } else {
    console.log(`at index ${i} you withdrew $${mov} into ${arr}`);
  }
});
 */

/* const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies1.forEach((value, key, map) => {
  console.log(`for key'${key}', the value is '${value}'`);
});

const setOfCurrencies = new Set(['USD', 'GBP', 'USD', 'USD', 'GBP', 'EUO']);

setOfCurrencies.forEach(function (val, key, map) {
  console.log(val, key);
});
console.log(setOfCurrencies);
 */

// convert Euros to US Dollars
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
 */

/* const deposits = movements.filter(function (dep) {
  return dep > 0;
});
console.log(deposits);

const withdrawels = movements.filter(wit => wit < 0);
console.log(withdrawels);
 */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance); */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
}, movements[0]);

console.log(max);
