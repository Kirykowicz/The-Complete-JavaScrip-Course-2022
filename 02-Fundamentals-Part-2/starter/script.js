'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // intentionally mispelled

if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio'; */

/* function logger(name) {
    console.log(`My name is ${name}`);
}

logger("Robert");
logger("Katie");

function fruitProcessor(apples, oranges) {
    const juice = `This juice contains ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const evenJuice = fruitProcessor(3, 3);
console.log(evenJuice); */

/* function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2) */

// arrow function
/* const calcAge3 = birthYear => 2022 - birthYear
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const currentYear = 2022
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} can retire in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Robert')); */


/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}

console.log(fruitProcessor(2, 3)); */

/* const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return `${firstName} has already reached retirement age`;
    }


    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Robert"));
console.log(yearsUntilRetirement(1950, "Mike"));

const calcAverageDolphins = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const calcAverageKoalas = (score1, score2, score3) => (score1 + score2 + score3) / 3; */

// HERE IS CODING CHALLENGE #1

/* const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const dolphinsAverage1 = calcAverage(44, 23, 71);
console.log(dolphinsAverage1);

const koalasAverage1 = calcAverage(65, 54, 49);
console.log(koalasAverage1);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log('Dolphins Win!')
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log('Koalas Win!')
    } else {
        console.log('There is no winner')
    }
}

checkWinner(dolphinsAverage1, koalasAverage1);
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)); */

//Arrays 

/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Robert';
console.log(friends);

const firstName = 'Robert';

const robert = [firstName, 'Kirykowicz', 2022 - 1991, friends];
console.log(robert);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const birthYears = [1991, 1990, 1959, 1957];

console.log(calcAge(birthYears[0]));
console.log(calcAge(birthYears[1]));
console.log(calcAge(birthYears[2]));
console.log(calcAge(birthYears[3]));

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);
const age4 = calcAge(birthYears[3]);

console.log(age1, age2, age3, age4);

const ages = [age1, age2, age3, age4];

console.log(ages); */

/* const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');

console.log(friends);

friends.pop(); // removes the las element

console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('Hurray it works');
} else {
    console.log('Well obviously this is not going to work if the data is not included');
} */

// Coding Challenge #2

/* const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * .15)
    } else {
        return (bill * .20)
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

console.log(totals);

const totalsAlt = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totalsAlt); */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
    console.log(interestedIn + ": " + jonas[interestedIn]);
} else {
    console.log('please input one of the options given in the prompt')
}

jonas.location = 'Portugal';

jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is named ${jonas.friends[0]}`);

 */

/* const robert = {
    firstName: 'Robert',
    lastName: 'Kirykowicz',
    birthYear: 1991,
    job: 'Freight Broker',
    friends: ['Konrad', 'Alex', 'Jamie', 'Jim'],
    hasDriversLicense: false,

    calcAge: function () {
        return 2022 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} who ${this.hasDriversLicense ? `has his license` : `does not have his license`}`
    },

}

console.log(robert.calcAge(robert.birthYear));
console.log(robert['calcAge'](1942));
console.log(robert.calcAge());

console.log(robert.getSummary());

 */

// Coding challenge #3

/* const mark = {
    firstName: 'Mark',
    mass: 78,
    height: 1.69,
    calkBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    },
}

const john = {
    firstName: 'John',
    mass: 92,
    height: 1.95,
    calkBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    },
}

//console.log(mark.calkBMI());
//console.log(john.calkBMI());

mark.calkBMI();
john.calkBMI();

console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`);
} */

/* for (let i = 7; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

const robertArray = [
    'Robert',
    'Kirykowicz',
    2022 - 1991,
    'Freight Broker',
    ['Konrad', 'Alex', 'Jamie']
];

const types = [];

for (let round = 0; round <= robertArray.length; round++) {
    console.log(robertArray[round]);

    types[round] = typeof robertArray[round];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}

console.log(ages);

for (let round = 0; round <= robertArray.length; round++) {
    if (typeof robertArray[round] !== 'string') break;

    console.log(robertArray[round]);
} */

////////////LOOPING BACKWARDS AND LOOPS IN LOOPS///////

/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = 3; i >= 0; i--) {
    console.log(i, jonas[i]);
};

for (let exercise = 1; exercise <= 3; exercise++) {
    if (exercise === 1) {
        console.log(`Exercise #${exercise}`)
    } else if (exercise === 2) {
        console.log(`Exercise #${exercise}`)
    } else if (exercise === 3) {
        console.log(`Exercise #${exercise}`)
    }

    for (let rep = 1; rep < 7; rep++) {
        console.log(`Repetition #${rep} for Exercise#${exercise}`)
    }
}
 */

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Loop has ended, a 6 was rolled');
}

//////// CODING CHALLENGE ////////////

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * .15);
    } else {
        return (bill * .20);
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(totals));