'use strict';

/* const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
const check = document.querySelector('.check');
const message = document.querySelector('.message');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'You won!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

function sayHello(name) {

  console.log(`hello ${name}`);

} */
