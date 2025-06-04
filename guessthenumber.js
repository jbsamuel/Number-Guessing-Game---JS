//Number to Guess + Upper and Lower Limits
let guessUpperLimit = 40;
let guessLowerLimit = 1;
let numberToGuess = Math.floor(Math.random() * 40) + 1;


//Game Loop
do {
    //Prompt user for number
    let userGuess = prompt("Find the secret number. Guess a number between 1-40");

    //Special Logic Checks
    if (numberToGuess - userGuess === 2 || userGuess - numberToGuess === 2) {
        alert("Getting Warmer!");
    }
    else if (userGuess === "") {
        alert("Enter a response"); 
    }
    else if (userGuess > guessUpperLimit) {
        alert("Above guess range"); //setting upper bound
    }
    else if (userGuess < guessLowerLimit) {
        alert("Below guess range"); //setting lower bound
    }

    //Core Game Logic
    else if (userGuess > numberToGuess) {
        alert("Too High!");
    }
    else if (userGuess < numberToGuess) {
        alert("Too Low!");
    }
    else {
        alert("You won!");
    }
}while (!userGuess === "quit");