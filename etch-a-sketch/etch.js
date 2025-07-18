let gridContainer = document.querySelector("#grid-container");
let square = document.createElement("div");
let squareNum = 33;

let squareSize = gridContainer.clientWidth / squareNum;

for (let i = 1; i <= squareNum * squareNum; i++) {
    let gridContainer = document.querySelector("#grid-container");
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.style.width = Math.floor(squareSize) + "px";
    square.style.height = Math.floor(squareSize) + "px";
}

console.log(gridContainer.clientWidth)
console.log(gridContainer.clientHeight)
console.log(squareSize);

