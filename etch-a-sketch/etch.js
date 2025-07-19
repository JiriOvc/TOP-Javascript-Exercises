
// Default Grid Size
let gridContainer = document.querySelector("#grid-container");
let square = document.createElement("div");
let squareNum = 30;

// Change Grid Size Button
let gridSizeBtn = document.querySelector(".grid-size")

function getGridSize() {
    return squareNum = prompt("Set number of squares in top row. Ideally between 30 - 50");
}

gridSizeBtn.addEventListener("click", createGrid);

// Create Grid
function createGrid() {
    squareNum = getGridSize();

    // Calculate Square Size
    let squareSize = gridContainer.clientWidth / squareNum;

    for (let i = 1; i <= squareNum * squareNum; i++) {
    let gridContainer = document.querySelector("#grid-container");
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.style.width = Math.floor(squareSize) + "px";
    square.style.height = Math.floor(squareSize) + "px";
    };

}

// Change Square Color on Mouse Enter


// Erase Grid
console.log(squareNum)