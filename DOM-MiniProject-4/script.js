// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select Elements
const submit = document.querySelector("#submitbtn");
const userInput = document.querySelector("#guessInput");

const guessSlot = document.querySelector(".Guesses");
const remaining = document.querySelector(".lastResult");
const lowerHi = document.querySelector(".lowOrhi");

const startOver = document.querySelector(".result");

// Create Play Again button dynamically
const p = document.createElement("p");

// Game Variables
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Start Game
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        // Convert input into number
        const guess = parseInt(userInput.value);

        // Validate user's input
        validateGuess(guess);
    });
}

// ------------------------------
// Validate User Input
// ------------------------------
function validateGuess(guess) {

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    }

    else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    }

    else if (guess > 100) {
        alert("Please enter a number less than or equal to 100.");
    }

    else {

        // Store guess into array
        prevGuess.push(guess);

        // Display Guess
        displayGuess(guess);

        // Check if guess is correct
        if (guess === randomNumber) {

            displayMessage("🎉 Congratulations! You guessed it right.");
            endGame();

        }

        // Check if attempts finished
        else if (numGuess > 10) {

            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame();

        }

        // Continue Game
        else {

            checkGuess(guess);

        }

    }

}

// ------------------------------
// Check Guess
// ------------------------------
function checkGuess(guess) {

    if (guess < randomNumber) {

        displayMessage("📉 Number is Too Low");

    }

    else {

        displayMessage("📈 Number is Too High");

    }

}

// ------------------------------
// Display Previous Guesses
// ------------------------------
function displayGuess(guess) {

    // Clear input field
    userInput.value = "";

    // Show previous guesses
    guessSlot.innerHTML += `${guess} ,`;

    // Increase attempt count
    numGuess++;

    // Update Remaining Attempts
    remaining.innerHTML = `${11 - numGuess}`;

}

// ------------------------------
// Display Message
// ------------------------------
function displayMessage(message) {

    lowerHi.innerHTML = `<h2>${message}</h2>`;

}

// ------------------------------
// End Game
// ------------------------------
function endGame() {

    // Disable Input
    userInput.value = "";
    userInput.setAttribute("disabled", "");

    // Create Play Again Button
    p.innerHTML = `<button id="newGame">Start New Game</button>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();

}

// ------------------------------
// Restart Game
// ------------------------------
function newGame() {

    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click", function () {

        // Generate new random number
        randomNumber = parseInt(Math.random() * 100 + 1);

        // Reset Variables
        prevGuess = [];
        numGuess = 1;
        playGame = true;

        // Clear UI
        guessSlot.innerHTML = "";
        remaining.innerHTML = "10";
        lowerHi.innerHTML = "";
        userInput.value = "";

        // Enable Input
        userInput.removeAttribute("disabled");

        // Remove Play Again Button
        startOver.removeChild(p);

    });

}