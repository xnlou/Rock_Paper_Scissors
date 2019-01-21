// Javascript extension

function computerPlay() {
    moves = ['rock','paper','scissor'];
    randMove = Math.floor(Math.random()*3); //returns index of 1 , 2 or 3
    return moves[randMove];
}
