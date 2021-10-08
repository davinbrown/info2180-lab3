// add square to divs to make game grid and add event listener to squares
window.onload = function() {
    var squares = document.getElementById("board").children;
    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].classList.add("square"); // add class square
        squares[i].addEventListener("click", makeMove, false); // add click even listener
        squares[i].addEventListener("mouseover", squareHover, false);
        squares[i].addEventListener("mouseout", squareExit, false);  
        squares[i].setAttribute('id', i); // add index loop as id to squares
    }
};

// When a square is clicked add X or O to it
var prevMove = null;
function  makeMove(e) {
    // Check if the square is empty
    if (e.target.innerHTML == "") {
        // first move of the game
        if (prevMove == null) {
            e.target.innerHTML = "X";
            e.target.classList.add("X");
            prevMove = 1;        
        }else{
            // alternate bettween 'X' and 'O'
            if (prevMove == 1) {
                e.target.innerHTML = "O";
                e.target.classList.add("O");
                prevMove = 0;
            }
            else if (prevMove == 0) {
                e.target.innerHTML = "X";
                e.target.classList.add("X");
                prevMove = 1;
            }
        }
    }
   
}

// add hover effect to squares
function squareHover(e) {
    e.target.classList.add("hover");
}
function squareExit(e) {
    e.target.classList.remove("hover");
}
// when new game button is clicked clear the squares and start new game