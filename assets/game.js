var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess;
var guessed=[];
var computerGuess;
var userChoiceText;
var guessesLeftText;
var guessesLeft=10;
var winsStore;
var lossesStore;
var wins=0;
var losses=0;
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function reset() {
    this.computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessed = [];
    guessesLeft=10;   
};

document.onkeyup = function(event) {   
userGuess = event.key;

if(userGuess!==computerGuess)
{
    guessed.push(userGuess);
    userChoiceText = document.getElementById("userchoice-text");
    userChoiceText.textContent = "Guessed so far: " +guessed;   
    
    guessesLeft--;
    if(guessesLeft===0) 
    {
    losses++;
    lossesStore = document.getElementById("losses");
    lossesStore.textContent = "Losses: " +losses; 
    reset();
    }
}

else if(userGuess===computerGuess)
{
    wins++;
    winsStore = document.getElementById("wins");
    winsStore.textContent = "Wins: " +wins; 
    reset();
}

guessesLeftText = document.getElementById("guesses-left")
guessesLeftText.textContent = "Guesses Left: " +guessesLeft;
};



