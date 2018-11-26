//There is a user input and a computer input.

// There is a wins and a loss counter.
var wins = 0;
var losses = 0;

// There are 10 guesses to start.
var guesses = 10;
var storeGuesses = " ";

// We need to create variables that hold references to the HTML where we display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var storeGuessesText = document.getElementById("storeguesses-text");


// Generating computer's array of letters.
 var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// An event is triggered when the user presses a button.

document.onkeyup = function(event) {
    var userGuess = event.key;

    // Computer input randomly generates an alphabet letter. Hidden to user.
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    //  if user guess === computer guess
    if (userGuess === compGuess) {

        //increase wins by 1
        wins++;
        //reset lives to 10.
        guesses = 10;
        // clears currently stored User Guesses.
        storeGuesses = " ";
         //computer generates new random letter, loop starts over again.
        compGuess;

    }
        
       
    else {

         // if user guess is not computer guess, decrease guesses by 1.
        guesses--;

        console.log("Incorrect entry");

        // store the incorrect guess into the userguess
        storeGuesses = userGuess + ",";
        
         // if lives decrease to 0, add a loss.
         if (guesses = 0){
             losses++;

        //Clear storage of guesses.
        storeGuesses = " ";
        
        // computer genereates new random letter.
            compGuess;

         }
    
    
     }  
    
    }


    // Display the wins, losses, guess count, and used guesses so far.

      
      
        winsText.textContent = "wins: " + wins ;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guesses;
        storeGuessesText.textContent = "Your guesses so far: "+ storeGuesses;



