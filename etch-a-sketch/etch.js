
// Default Grid Size
let gridContainer = document.querySelector("#grid-container");
let square = document.createElement("div");
let squareNum = 20;

// Change Grid Size Button
let gridSizeBtn = document.querySelector(".grid-size")

// Calculate Square Size
let squareSize = gridContainer.clientWidth / squareNum;

// Crate Grid
for (let i = 1; i <= squareNum * squareNum; i++) {
    let gridContainer = document.querySelector("#grid-container");
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.style.width = Math.floor(squareSize) + "px";
    square.style.height = Math.floor(squareSize) + "px";
}

// Change Square Color on Mouse Enter

// Erase Grid
