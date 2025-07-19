let gridContainer = document.querySelector("#grid-container");
let square = document.createElement("div");
let squareNum = 15;
let squareSize = gridContainer.clientWidth / squareNum;

for (let i = 1; i <= squareNum * squareNum; i++) {
    let gridContainer = document.querySelector("#grid-container");
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.style.width = Math.floor(squareSize) + "px";
    square.style.height = Math.floor(squareSize) + "px";
}

console.log(gridContainer.clientWidth);
console.log(gridContainer.clientHeight);
console.log(squareSize);

// Grid Size button
let gridSizeBtn = document.querySelector(".grid-size")
gridSizeBtn.addEventListener("click", () => {
   prompt("How many squares do you want in the top row?")
   return squareNum
})

console.log(squareNum)
