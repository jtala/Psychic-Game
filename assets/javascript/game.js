// There is a wins and a loss counter.
var wins = 0;
var losses = 0;

// There are 10 guesses to start.
var guesses = 10;

// There is an array with the user's incorrect guesses.
var storeGuesses = [];



// Generating computer's array of letters + the letter it stores.
 var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

 // The game starts when the user presses a button.

document.onkeyup = function(event) {
    var userGuess = event.key;

    // This stores the user's guess into an empty array.
    storeGuesses.push(userGuess);

        // Checking what the computer guess is.
        console.log("The computer is thinking of: "+ compGuess);

    //  What happens if user guesses correctly.
    if (userGuess === compGuess) {
        // Alert the user that his guess was correct.
        alert("Yes, " + userGuess +" was what the computer was thinking about!");
        //increase wins by 1
        wins++;
        //reset lives to 10.
        guesses = 10;
        // clears currently stored User Guesses.
        storeGuesses = [];
         //computer generates new random letter to play again.
         compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    }
        
       
    else {

         // if user guess is not computer guess, decrease guesses amount by 1.
        guesses--;

        // To check if 
        console.log("Incorrect entry: This isn't the computer's Guess");
        
         // What happens if guesses decreases to 0.
         if (guesses === 0) {
            // Alert the user what the computer was thinking.
             alert("Nope! The computer was thinking of "+ compGuess +" !");

            // Increase losses by 1.
             losses++;

             //Reset guesses back to 10.
             guesses = 10;

            //Clear storage of guesses.
            storeGuesses = [];

            // Sets up a new letter for user to guess.
            compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    } 
    // Display the wins, losses, guess count, and used guesses so far, linking to HTML. Make sure this is within the keyclick event.

    document.getElementById("wins-text").textContent = "Points: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
    document.getElementById("guessesleft-text").textContent ="You have " + guesses + "  guesses left!";
    document.getElementById("storeguesses-text").textContent = "Your guesses so far: "+ storeGuesses;

};



