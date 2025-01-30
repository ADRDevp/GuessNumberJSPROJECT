// 1. **Welcome message**

console.log('Welcome!');

// 2. **Personalized greeting**

let name = 'Gui Lima';
console.log(`Hello, ${name}!`);

// 3. **Personalized greeting with alert**

name = 'Gui Lima';
alert(`Hello, ${name}!`);

// 4. **Question and response using prompt**

let favoriteLanguage = prompt('What is your favorite programming language?');
console.log(favoriteLanguage);

// 5. **Sum of two values**

let value1 = 42;
let value2 = 8;
let result1 = value1 + value2;
console.log(`The sum of ${value1} and ${value2} is ${result1}.`);

// 6. **Subtraction of two values**

let value3 = 10;
let value4 = 8;
let result2 = value3 - value4;
console.log(`The difference between ${value3} and ${value4} is ${result2}.`);

// 7. **Determine if of legal age or minor**

let age = prompt('Enter your age:');
if (age > 17) {
    console.log('You are of legal age.');
} else {
    console.log('You are a minor.');
}

// 8. **Check if a number is positive, negative, or zero**

let number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 9. **Print numbers from 1 to 10 using a while loop**

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

// 10. **Determine if a grade is passing or failing**

let grade = 8; // Replace with the grade value you want to test
if (grade >= 7) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// 11. **Random number with Math.random**

let randomNumber = Math.random();
console.log(randomNumber);

// 12. **Random integer between 1 and 10 with Math.random**

let randomInt = parseInt(Math.random() * 10) + 1;
console.log(randomInt);

// 13. **Random integer between 1 and 1000 with Math.random**

let randomIntLarge = parseInt(Math.random() * 1000) + 1;
console.log(randomIntLarge);
