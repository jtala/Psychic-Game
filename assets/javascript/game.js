//There is a user input and a computer input.

// There is a wins and a loss counter.
var wins = 0;
var losses = 0;

// There are 10 guesses to start.
var guesses = 10;
var storeGuesses = [];



// Generating computer's array of letters.
 var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

 // An event is triggered when the user presses a button.

document.onkeyup = function(event) {
    var userGuess = event.key;
    storeGuesses.push(userGuess);
    

    // Computer input randomly generates an alphabet letter.
        // Checking what the computer guess is.

        console.log(compGuess);

    //  if user guess === computer guess
    if (userGuess === compGuess) {

        //increase wins by 1
        wins++;
        //reset lives to 10.
        guesses = 10;
        // clears currently stored User Guesses.
        storeGuesses = [];
         //computer generates new random letter, loop starts over again.
         compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        // compGuess;

    }
        
       
    else {

         // if user guess is not computer guess, decrease guesses by 1.
        guesses--;

        console.log("Incorrect entry");

        // store the incorrect guess into the userguess
        
         // if lives decrease to 0, add a loss.
         if (guesses === 0) {
             losses++;

            //Clear storage of guesses.
            storeGuesses = [];
        
            // computer genereates new random letter.
            // compGuess;

        }
    } 
    document.getElementById("wins-text").textContent = wins;
    document.getElementById("losses-text").textContent = losses;
    document.getElementById("guessesleft-text").textContent = guesses;
    document.getElementById("storeguesses-text").textContent = storeGuesses;

};
    // Display the wins, losses, guess count, and used guesses so far.

      
      
        // winsText.textContent = "wins: " + wins ;
        // lossesText.textContent = "losses: " + losses;
        // guessesLeftText.textContent = "Guesses Left: " + guesses;
        // storeGuessesText.textContent = "Your guesses so far: "+ storeGuesses;



