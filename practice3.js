// Create a counter that starts at 1 and goes up to 10 using a 'while' loop. Display each number.

let counter1 = 1;
while (counter1 <= 10) {
    console.log(counter1);
    counter1++;
}

// Create a counter that starts at 10 and counts down to 0 using a 'while' loop. Display each number.

let counter2 = 10;
while (counter2 >= 0) {
    console.log(counter2);
    counter2--;
}

// Create a countdown program. Ask for a number and count down from that number to 0 using a 'while' loop in the browser console.

let maxNumber1 = prompt("Enter a number for the countdown:");

while (maxNumber1 >= 0) {
    console.log(maxNumber1);
    maxNumber1--;
}

// Create a count-up program. Ask for a number and count up from 0 to that number using a 'while' loop in the browser console.

let maxNumber = prompt("Enter a number for the count-up:");
let counter = 0;

while (counter <= maxNumber) {
    console.log(counter);
    counter++;
}
