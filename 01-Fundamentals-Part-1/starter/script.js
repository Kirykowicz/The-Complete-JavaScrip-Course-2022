/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES';
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthyear = 1991;
birthyear = 1990; // this wont work

var job = 'programmer';
job = 'teacher';

lastName = 'Kirykowicz';
console.log(lastName);
 */

/* // Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);  */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageJonas, ageSarah);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge); */

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(jonasNew)
console.log(`I would say it is much easer using back tics`)

console.log("string with\n\multiple\n\lines");

console.log(`Or string
with
multiple
lines`); */

/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years`)
}

const birthYear = 1991;

let century;
if (birthYear <= 1999) {
    century = '20th';
} else {
    century = '21st';
}
console.log(century); */

/* // type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Robert'));

console.log(String(2003), 23);

// type coersion
console.log('I am ' + 30 + " years old");
console.log('I am ' + '30' + " years old");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; //'11'
n = n - 1; // 11 -1
console.log(n);  */

// 5 falsey values: 0, '', undefined, null, NaN, 

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Robert'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log("Don't spend it all!")
} else {
    console.log("You should get a job!")
}

let height = 1;
if (height) {
    console.log('Yay! height is defined')
} else {
    console.log('height is undefined')
} */

/* const age = 18;
if (age === 18) console.log('You just becaome and adult');
 */
// "18" == 18, this is coersion so it works (true)
// "18" === 18, but this would not work (false)

/* const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number')
} */

/* const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number')
} else if (favorite === 7) {
    console.log("7 is a great number too")
} else {
    console.log(`the number ${favorite} sucks!`)
}

if (favorite !== 23) {
    console.log('you were supposed to pick the number 23')
} else {
    console.log(`good pick`)
} */

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);

 if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should probably drive')
}

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should probably drive')
}
 */

/* const avDolphins = (4 + 108 + 89) / 3;
let avKoalas = (4 + 108 + 89) / 3;
//avKoalas = (96 + 108 + 89) / 3;

const avDolphinsGreater = avDolphins >= 100;
const avKoalasGreater = avKoalas >= 100;

console.log(avDolphins);
console.log(avKoalas);

if (avDolphins > avKoalas && avDolphinsGreater) {
    console.log('Dolphins Win!')
} else if (avDolphins < avKoalas && avKoalasGreater) {
    console.log('Koalas Win')
} else if (avDolphins === avKoalas && avDolphinsGreater && avKoalasGreater) {
    console.log(`It's a draw and over 100`)
} else {
    console.log(`Need to go into round 4`)
} */

/*const day = 'theday';

 switch (day) {
    case 'monday':
        console.log('Plan course structure')
        console.log('go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day!')
}
 */

/* let day = 'thursday';

if (day === 'monday') {
    console.log('Plan course structure')
    console.log('go to coding meetup')
} else if (day === 'tuesday') {
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day!')
} */

/* const age = 23;

//age >= 18 ? console.log('I like to dring wine') : console.log('got to stick with water....');

const drink = age >= 18 ? 'Drink wine' : 'Drink water';
console.log(drink); */

const bill = 50;
const tipRegular = .15;
const tipOtherwise = .20;

tipActual = bill >= 50 && bill <= 300 ? (bill * tipRegular) : (bill * tipOtherwise);
console.log(`Your bill was $${bill}, your tip was $${tipActual}, and your total was $${bill + tipActual}`);