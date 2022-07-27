'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("it's empty");
  }
  // player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#90ee90';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when it's wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('you lost');
    }
  }
  /*
  // when number is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;

      
    }
  }
  //when number is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;

      document.querySelector('.message').textContent = 'you lost';
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing ....');
  let score = 20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/*
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

*/
