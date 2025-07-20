
// Default Grid Size
let gridContainer = document.querySelector("#grid-container");
let square = document.createElement("div");
let squareNum = 80;

// Calculate Square Size
let squareSize = gridContainer.clientWidth / squareNum;

// Create Default Grid
for (let i = 1; i <= squareNum * squareNum; i++) {
    let gridContainer = document.querySelector("#grid-container");
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.style.width = Math.floor(squareSize) + "px";
    square.style.height = Math.floor(squareSize) + "px";
};

// Change Grid Size
function createGrid(squareNum) {
    gridContainer.innerHTML = "";
    squareNum = prompt("Set number of squares in top row. Ideally between 70 and 120");

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

    // Change Square Color on Mouse Enter
    let squareSelect = document.querySelectorAll(".square")
    squareSelect.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "darkseagreen"
        })
    })

    // Erase Grid
    let eraseBtn = document.querySelector(".erase")
    eraseBtn.addEventListener("click", () => {
    squareSelect.forEach(element => {
        element.style.backgroundColor = "lightgray"
    })
})

}

// Change Square Color on Mouse Enter
let squareSelect = document.querySelectorAll(".square")
squareSelect.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "darkseagreen"
        })
    })

// Change Grid Size Button
let gridSizeBtn = document.querySelector(".grid-size")
gridSizeBtn.addEventListener("click", () => {
    createGrid();
})

// Erase Grid
let eraseBtn = document.querySelector(".erase")
eraseBtn.addEventListener("click", () => {
    squareSelect.forEach(element => {
        element.style.backgroundColor = "lightgray"
    })
})
