// Select DOM elements
const statusEl = document.getElementById("status");
const startBtn = document.getElementById("startBtn");

// Game settings
const answer = 7; // you can change this or randomize it
let attempts = 3;

startBtn.addEventListener("click", function () {

  statusEl.textContent = "Game started! You have 3 guesses.";

  // simple loop using attempts
  while (attempts > 0) {

    let guess = prompt(`Guess a number (1-10). Attempts left: ${attempts}`);

    // if user cancels
    if (guess === null) {
      alert("Game cancelled.");
      return;
    }

    guess = Number(guess);

    // DOM update feedback
    if (guess === answer) {
      statusEl.textContent = "🎉 Correct! You win!";
      alert("Correct!");
      return;
    }

    attempts--;

    if (guess < answer) {
      alert("Too low!");
      statusEl.textContent = `Too low. Attempts left: ${attempts}`;
    } else {
      alert("Too high!");
      statusEl.textContent = `Too high. Attempts left: ${attempts}`;
    }
  }

  // if user runs out of attempts
  statusEl.textContent = "💀 Game over. You lost.";
  alert("Game over! The correct answer was " + answer);
});

const startBtn = document.getElementById("startBtn");
console.log(startBtn);