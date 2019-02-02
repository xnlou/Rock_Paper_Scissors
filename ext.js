// Javascript extension

// Function to randomly choose between RPS for computer player
function computerPlay() {
    moves = ['rock','paper','scissors'];
    randMove = Math.floor(Math.random()*3); //returns index of 1 , 2 or 3
    return moves[randMove];
}

// Function to give game outcomes for user and computer input
function playRound(playerSelection,computerSelection){
    let result = "";
    let draw = "Draw, try again!";
    playerSelection = playerSelection.toString().toLowerCase();

    switch(computerSelection){
        // rock  cases
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
        // paper cases
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
        // scissor cases
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

// Function to simulate 5 rounds of RPS
function game(){
    let playerScore = 0;
    let computerScore= 0;
    let msg = "";
    let msg_fin = "";
    
    // loop to play 5 games
    for (var i=1;i<6;i++){
        let playerSelection = prompt("Choose RPS!").toLowerCase();
        let computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection);
        console.log("Round " + i + ": " + result);

    // Keep track of digital score
        if(result.includes("Win")){
            playerScore += 1;
            msg = "You win this round!";
        } else if (result.includes("Lose")){
            computerScore += 1;
            msg = "You lose this round :(";
        } else {
            msg = "Draw!"
        }
    }

    // Calculate final outcome message
    if (playerScore > computerScore){
        msg_fin = "You won the series!"
    }   else if (computerScore > playerScore){
        msg_fin = "You lost the series."
    }   else{
        msg_fin = "Draw...really?"
    }
    // display scores with message
console.log("Your score: " + playerScore + "\ncomputerScore:" + computerScore + "\n" + msg_fin);
}