// Javascript extension

// Function to randomly choose between RPS for computer player
function computerPlay() {
    moves = ['rock','paper','scissor'];
    randMove = Math.floor(Math.random()*3); //returns index of 1 , 2 or 3
    return moves[randMove];
}

// Function to give game outcomes for user and computer input
function playRound(playerSelection,computerSelection){
    let result;
    let draw = "Draw, try again!";

    switch(computerSelection){
        case "rock":
            if (playerSelection == "rock"){
                result = draw;
            } else if (playerSelection == "paper"){
                result = "You Win!  Paper beats rock.";
            } else if (playerSelection == "scissors"){
                result = "You Lose!  Rock beats scissors";
            }  else {
                result = "Oops...can you try again?";
            }
            break;
        case "paper":
            if (playerSelection == "rock"){
                result = "You Lose! Paper beats rock.";
            } else if (playerSelection == "paper"){
                result = draw;
            } else if (playerSelection == "scissors"){
                result = "You Win! Scissors beats paper.";
            } else {
                result = "Oops...can you try again?";
            }
            break;
        case "scissors":
            if (playerSelection == "rock"){
                result = "You Win! Rock beats scissors.";
            } else if (playerSelection == "paper"){
                result = "You Lose! Scissors beats paper.";
            } else if (playerSelection == "scissors"){
                result = draw;
            } else {
                result = "Oops...can you try again?";
            }
            break;
    }
    return result;
}