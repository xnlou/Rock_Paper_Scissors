// Javascript extension
let playScore = 0;
let compScore = 0;
let container = document.querySelector('.container');
let log = document.querySelector('#log');
let result = document.createElement('h1');
log.textContent = "First to score 5 wins! Choose your move!";

// Function to randomly choose between RPS for computer player
function computerPlay() {
    moves = ['Rock','Paper','Scissors'];
    randMove = Math.floor(Math.random()*3); //returns index of 1 , 2 or 3
    return moves[randMove];
}

// Function to give game outcomes for user input
function playRound(playSel){
    // randomize computer selection
    let compSel = computerPlay();
    
    // game scenarios

    // player wins
    if ((playSel === "Rock" && compSel === "Scissors") || (playSel === "Scissors" && compSel === "Paper") ||  (playSel === "Paper" && compSel === "Rock")){
        playScore ++;
        log.textContent = "You Win! " + playSel + " beats " + compSel;
        console.log("You Win! " + playSel + " beats " + compSel);
    } 
    // computer wins
    else if ((playSel === "Paper" && compSel === "Scissors") || (playSel === "Rock" && compSel === "Paper") || (playSel === "Scissors" && compSel === "Rock")){
        compScore ++;
        log.textContent = "You Lose! " + compSel + " beats " + playSel;
        console.log("You Lose! " + compSel + " beats " + playSel);
    } 
    // draw scenario
    else if (playSel === compSel){
        log.textContent = "You chose: " + playSel + " -- Computer chose: " + compSel + ", it's a DRAW! Try again!";
        console.log("You chose: " + playSel + " -- Computer chose: " + compSel + ", it's a DRAW! Try again!");
    }

    //end game logic check if either user/comp reached 5 wins; log a message and disable buttons
    if (playScore == 5){
        result.textContent = 'You beat the machine! You Win!';
        result.style.color = "green";
        container.insertBefore(result,rbtn);
        rbtn.disabled = true; 
        pbtn.disabled = true; 
        sbtn.disabled = true; 

    } else if (compScore == 5){
        result.textContent = 'Not today friend.  You Lose!';
        result.style.color = "red";
        container.insertBefore(result,rbtn);
        rbtn.disabled = true; 
        ptbn.disabled = true; 
        sbtn.disabled = true; 
    }

}

//event listeners for choice selection followed by score logging
let scoreboard = document.querySelector('#scoreboard');
let pScore = document.createElement('h3');

var rbtn = document.querySelector("#rbtn");
rbtn.addEventListener('click', function() {
    playRound("Rock");
    pScore.textContent = "YOU (" + playScore + ") - Computer (" + compScore + ")";

});
var pbtn = document.querySelector("#pbtn");
pbtn.addEventListener('click', function() {
    playRound("Paper");
    pScore.textContent = "YOU (" + playScore + ") - Computer (" + compScore + ")";

});
var sbtn = document.querySelector("#sbtn");
sbtn.addEventListener('click', function() {
    playRound("Scissors");
    pScore.textContent = "YOU (" + playScore + ") - Computer (" + compScore + ")";
});

scoreboard.appendChild(pScore);