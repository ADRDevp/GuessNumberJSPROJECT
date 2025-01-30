// Ask the user what day of the week it is. If the answer is "Saturday" or "Sunday", display "Have a great weekend!". Otherwise, display "Have a great week!".

let dayOfTheWeek = prompt('What day of the week is it?');
if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    alert('Have a great weekend!');
} else {
    alert('Have a great week!');
}

// Check if a number entered by the user is positive or negative. Display an informational alert.

let number = prompt('Enter a positive or negative number');
if (number > 0) {
    alert('Positive number');
} else if (number < 0) {
    alert('Negative number');
} else {
    alert('The number is zero');
}

// Create a scoring system for a game. If the score is 100 or higher, display "Congratulations, you won!". Otherwise, display "Try again to win."

let score = 105;
if (score >= 100) {
    console.log('Congratulations, you won!');
} else {
    console.log('Try again to win.');
}

// Create a message informing the user about the account balance, using a template string to include the balance value.

let accountBalance = 500; // Example balance
alert(`Your balance is ${accountBalance}.`);

// Ask the user to enter their name using prompt. Then, display a welcome alert using that name.

let name = prompt('Please enter your name');
alert(`Welcome, ${name}!`);
