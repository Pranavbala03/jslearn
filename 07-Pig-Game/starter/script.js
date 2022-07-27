'use strict';

//variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let finalScores, currentScore, activePlayer, playing;
const init = function () {
  const resetScore = function (id) {
    document.querySelector(id).textContent = '0';
  };
  resetScore('#score--0');
  resetScore('#score--1');
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//actions

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('hold');
    finalScores[activePlayer] += currentScore;
    console.log(finalScores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    if (finalScores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
// btnHold.addEventListener('click', function () {
//     if (playing) {
//       // 1. Add current score to active player's score
//       scores[activePlayer] += currentScore;
//       // scores[1] = scores[1] + currentScore

//       document.getElementById(`score--${activePlayer}`).textContent =
//         scores[activePlayer];

//       // 2. Check if player's score is >= 100
//          // 2. Check if player's score is >= 100
//          if (scores[activePlayer] >= 20) {
//           // Finish the game
//           playing = false;
//           diceEl.classList.add('hidden');

//           document
//             .querySelector(`.player--${activePlayer}`)
//             .classList.add('player--winner');
//           document
//             .querySelector(`.player--${activePlayer}`)
//             .classList.remove('player--active');
//         } else {
//           // Switch to the next player
//           switchPlayer();
//         }
//     }
//   });
