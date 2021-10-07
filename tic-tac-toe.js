// add square to divs to make game grid
window.onload = function() {
    var squares = document.getElementById("board").children;
    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].classList.add("square");
    }
};

// when new game button is clicked