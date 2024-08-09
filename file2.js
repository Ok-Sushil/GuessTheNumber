// Initialize the game
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Add event listener for button click
document.getElementById('submit').addEventListener('click', handleGuess);

// Add event listener for "Enter" key press on input field
document.getElementById('guess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default form submission if inside a form
        handleGuess(); // Call the function used for button click
    }
});

// Function to handle the guess
function handleGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (userGuess === secretNumber) {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        messageElement.style.color = 'green';
    } else if (userGuess < secretNumber) {
        messageElement.textContent = 'Too low! Try again.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Too high! Try again.';
        messageElement.style.color = 'red';
    }
}
