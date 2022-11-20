   //A bunch of COMPLETELY NECESSARY variables for the PC's speech lines
   let wins = 0;
   let losses = 0;
   let ties = 0;
   let totalMatches = 0;

   let previousTies = 0;
   let previousWins = 0;
   let previousLosses = 0;
   let previousTotalMatches = 0;

   let tieStreak = 0;
   let winStreak = 0;
   let looseStreak = 0;

   let matchResult;
   let userRPS;
   let roundsNumber;

   let match = 0;

   let streakElement = 0;



       // THE ENDLESSLY HELLISH PC DIALOGUE'S FUNCTION STARTS HERE  
    
       function pcDialogue() {
        //user's RPS input
        previousTotalMatches = totalMatches;



//Starting the match 
        if (wins + losses + ties == 0) {
            pcMatchComment.textContent = "Very well, lets start with these " + roundsNumber + " rounds, shall we? Click one of the lucky buttons below to make your choice.";
        }

//TIES        
        else if (ties > previousTies) {
            previousTies = ties;
            tieStreak = tieStreak + 1;
            winStreak = 0;
            looseStreak = 0;
            streakElement = "Ties: " + tieStreak + " in a row!";


            if (tieStreak == 3) {
                pcMatchComment.textContent = "Three ties in a row... Rock, Paper, Scizzors SHOOT!";
            }

            else if (tieStreak == 4) {
                pcMatchComment.textContent = "Four ties in a row... Are we psychics?... Rock, Paper, Scizzors SHOOT!";
            }

            else if (tieStreak == 5) {
                pcMatchComment.textContent = "FIVE TIES IN A ROW, FORGET ABOUT THE GAME, WE ARE TOO GOOD FOR IT! LET'S CONQUER THE WORLD RIGHT NOW!!!";

                scoreDisplay.textContent = "These are your final scores!";
            }
            else {
                pcMatchComment.textContent = "This match was a tie... let's continue. Rock, Paper, Scizzors SHOOT!";
            }
        }



//LOOSING    

        else if (losses > previousLosses) {
            previousLosses = losses;
            tieStreak = 0;
            winStreak = 0;
            looseStreak = looseStreak + 1;
            streakElement = "Losses: " + looseStreak + " in a row!";


            if (looseStreak == 3) {
                pcMatchComment.textContent = "Three losses in a row, you're having some bad luck... Rock, Paper, Scizzors SHOOT!";
            }

            else if (looseStreak == 4) {
                pcMatchComment.textContent = "OOOF four losses in a row, am I seriosly that good at this?... Rock, Paper, Scizzors SHOOT!";
            }

            else if (looseStreak == 5) {
                pcMatchComment.textContent = " FIVEEEE, FIVEEEEEE, I just crushed you! Maybe I could challenge the Demon's Wheel and win... I'm joking, that's a whole different level.";
                scoreDisplay.textContent = "These are your final scores!";
            }

            else if (losses - wins == 3) {
                pcMatchComment.textContent = "Winning by 3?... No, it's me who's winning, not you, so lets keep going. Rock, Paper, Scizzors SHOOT!";
            }

            else if (losses - wins == 4) {
                pcMatchComment.textContent = "I won again, I have a really good advantage, so you better win this time... Rock, Paper, Scizzors SHOOT!";
            }

            else if (losses - wins == 5) {
                scoreDisplay.textContent = "These are your final scores!";
                pcMatchComment.textContent = "... It's ok... Loosing is part of... I'm not very good at this you know, so find some energy to challenge me again, ok?";
            }

            else if (losses > wins) {
                match = losses - wins;
                pcMatchComment.textContent = "Looks like I'm winning by " + match + ", can you catch up to me? Rock, Paper, Scizzors SHOOT!";
            }

            else if (wins == losses && wins + losses != 0) {
                pcMatchComment.textContent = "Our scores are currently tied! Rock, Paper, Scizzors SHOOT!";
            }    
            else if (losses < wins) {
                match = wins - losses;
                pcMatchComment.textContent = "I won this one, but you're ahead of me by " + match + ". I will have lead soon... Rock, Paper, Scizzors SHOOT!";
            }    
        }




//WINNING

        else if (wins > previousWins) {
            previousWins = wins;
            tieStreak = 0;
            winStreak = winStreak + 1;
            looseStreak = 0;
            streakElement = "Wins: " + winStreak + " in a row!";


            if (winStreak == 3) {
                pcMatchComment.textContent = "Three wins in a row, are you serious!?... Rock, Paper, Scizzors SHOOT!";
            }

            else if (winStreak == 4) {
                pcMatchComment.textContent = "YOU DARE WIN AGAIN!? If you win once more I swear... Rock, Paper, Scizzors SHOOT!";
            }

            else if (winStreak == 5) {
                pcMatchComment.textContent = "UGH you're unbelievable! \"I win!\", \"I win!\" Yeah? Why don't you go challenge the Demon's Wheel instead!?    *Ragequits*";
                scoreDisplay.textContent = "These are your final scores!";
            }

            else if (wins - losses == 3) {
                pcMatchComment.textContent = "Oh?... OOOOH????? Winning by 3? I see how it is! Rock, Paper, Scizzors SHOOT!";
            }

            else if (wins - losses == 4) {
                pcMatchComment.textContent = "Winning to me by 4? You better not win again... Rock, Paper, Scizzors SHOOT!";
            }

            else if (wins - losses == 5) {
                scoreDisplay.textContent = "These are your final scores!";
                pcMatchComment.textContent = "... Next time IIIII will win! *Throws a chair to the window*";
            }

            else if (wins > losses) {
                match = wins - losses;
                pcMatchComment.textContent = "So far you're winning by " + match + ", but we'll see who wins on the next one. Rock, Paper, Scizzors SHOOT!";
            }
            else if (wins == losses && wins + losses != 0) {
                pcMatchComment.textContent = "Our scores are currently tied! Rock, Paper, Scizzors SHOOT!";
            }
            else if (wins < losses) {
                match = losses - wins;
                pcMatchComment.textContent = "You win this round, but I'm still ahead by " + match + ". Let's see how things keep going. Rock, Paper, Scizzors SHOOT!";
            }    
        }

    }

if(previousTotalMatches == roundsNumber) {
    pcMatchComment.textContent = "Our games are over! Do you consider yourself worthy of challenging the Demon's Wheel?";
            scoreDisplay.textContent = "These are your final scores!";
}


//GRABBING ALL THE STUFF THAT'S IN THE HTML'S DOC
//GRABBING ALL THE STUFF THAT'S IN THE HTML'S DOC
//GRABBING ALL THE STUFF THAT'S IN THE HTML'S DOC

//Related to scores and the SCORE FUNTION
let pcMatchComment = document.querySelector("#pcMatchComment");


let scoreDisplay = document.querySelector("#scoreDisplay");
scoreDisplay.textContent = "Score Display:";

function scoreDisplayFunction(){
    let winsScoreDisplay = document.querySelector("#wins");
winsScoreDisplay.textContent = "Your Wins: " + wins;

let lossesScoreDisplay = document.querySelector("#losses");
lossesScoreDisplay.textContent = "Your Losses: " + losses;

let tiesScoreDisplay = document.querySelector("#ties");
tiesScoreDisplay.textContent = "Your Ties: " + ties;

let streaks = document.querySelector("#streaks");
streaks.textContent = "Wins / Losses / Ties Streak: " + streakElement;
}

scoreDisplayFunction();

//RPS buttons here

let rockPaperScizzorsButtons = document.querySelector("#rockPaperScissors");

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

let pcRPSChoice = document.querySelector("#pcRPSChoice");




//THIS IS THE MOST BEAUTIFUL FUNCTION THAT YOU WILL EVER SEE
//THIS IS THE MOST BEAUTIFUL FUNCTION THAT YOU WILL EVER SEE
//THIS IS THE MOST BEAUTIFUL FUNCTION THAT YOU WILL EVER SEE

function rockPaperScizzors(userChoice) {

    // Converting user's RPS into number
    let userChoiceNumber;
    let result;
    if (userChoice == "R" || userChoice == "P" || userChoice == "S") {
        if (userChoice == "R") {
            userChoiceNumber = 0;
        }
        else if (userChoice == "P") {
            userChoiceNumber = 1;
        }
        else if (userChoice == "S") {
            userChoiceNumber = 2;
        }
    // Making the PC choose R/P/S
        let rng = Math.floor(Math.random() * 3);
    
        if (rng == 0) {
            alert("I choose ROCK!");
            pcRPSChoice.textContent = "Enemy's Previous Choice:    ROCK";
        }
        else if (rng == 1) {
            alert("I choose PAPER!");
            pcRPSChoice.textContent = "Enemy's Previous Choice:    PAPER";
        }
        else {
            alert("I choose SCISSORS!");
            pcRPSChoice.textContent = "Enemy's Previous Choice:    SCISSORS";
        }
    // The result of the match
        let shoot = userChoiceNumber - rng;
    
        if (shoot == 0) {
            result = "t";
            ties = ties + 1;
        }
        else if (shoot == 1 || shoot == -2) {
            result = "w";
            wins = wins + 1;
        }
        else if (shoot == -1 || shoot == 2) {
            result = "l";
            losses = losses + 1;
        }
    }
    
    
    // Function's return
        console.log(result);
    }
    


//THE REST OF THE CODE
//THE REST OF THE CODE
//THE REST OF THE CODE

    // THIS IS WHERE THE GAME'S WORKING STARTS
     

        rockButton.addEventListener("click", function(){
            userRPS = "R";
            rockPaperScizzors(userRPS);
            totalMatches = totalMatches + 1;
            pcDialogue();
            scoreDisplayFunction();
        })
        paperButton.addEventListener("click", function(){
            userRPS = "P";
            rockPaperScizzors(userRPS);
            totalMatches = totalMatches + 1;
            pcDialogue();
            scoreDisplayFunction();
        })
        scissorsButton.addEventListener("click", function(){
            userRPS = "S";
            rockPaperScizzors(userRPS);
            totalMatches = totalMatches + 1;
            pcDialogue();
            scoreDisplayFunction();
        })


    
    
