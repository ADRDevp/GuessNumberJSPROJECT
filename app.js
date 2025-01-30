// Variables
let maxNumberPossible = parseInt(prompt('Choose a maximum number: '))
let SecretNumber = Math.floor(Math.random() *parseInt(maxNumberPossible))+1
// console.log(SecretNumber)
let UserNumber = 0
let attempts = 1
let maxAttempts = 10
//let FirstTry = 'attempt'
// alert('Hello Bros');

// While Loop
while (UserNumber != SecretNumber){
    let UserNumber = parseInt(prompt(`Please enter a number from 1 to ${maxNumberPossible}:`))

    // Store variables
    console.log(UserNumber)

    /*
    Another type of comment is this one
    */ 
    // Compare variables
    if (UserNumber == SecretNumber) {
        // True
        alert(`Congratulations!, you found the secret number that was originally: ${UserNumber}. You got it in ${attempts} ${attempts == 1 ? 'attempt' : 'attempts'}`)
        break
    } else {
        if(UserNumber > SecretNumber) {
            alert('Your number was too high.')
            } else {
                alert('Your number was too low.')
        }
        // Increment attempt counter
        attempts++ 
        if (attempts > maxAttempts) {
            alert(`You reached the maximum number ${maxAttempts} of attempts`)
            break
        }
        // False 
        // alert('Sorry, the number you entered was incorrect.')
    }
    
}