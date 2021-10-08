// add square to divs to make game grid and add event listener to squares
window.onload = function() {
    var squares = document.getElementById("board").children;
    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].classList.add("square"); // add class square
        squares[i].addEventListener("click", makeMove, false); // addson click even listener
        squares[i].setAttribute('id', i); // add index loop as id to squares
    }
};

// When a square is clicked add X or O to it
var prevMove = null;
function  makeMove(e) {
    if (prevMove == null) {
        // first move of the game
        e.target.innerHTML = "X";
        prevMove = 1;        
    }else{
        // alternate bettween 'X' and 'O'
        if (prevMove == 1) {
            e.target.innerHTML = "O";
            prevMove = 0;
        }
        else if (prevMove == 0) {
            e.target.innerHTML = "X";
            prevMove = 1;
        }
    }
}



// when new game button is clicked clear the squares and start new game