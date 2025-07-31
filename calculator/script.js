// Step 1: Operations

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


// Step 2: Variables for operations
let operandA = 0;
let operator = " ";
let operandB = 0;


// Step 3: Operate function
function operate(operandA, operator, operandB) {
    if(operator === "+") {
        return add(operandA, operandB)
    }
    if(operator === "-") {
        return subtract(operandA, operandB)
    }
    if(operator === "*") {
        return multiply(operandA, operandB)
    }
    if(operator === "/") {
        return divide(operandA, operandB)
    }
}

// Display default settings
let display = document.querySelector(".display-area");
let displayContent = display.textContent;
let displayContentSplit = displayContent.split(" ");
display.textContent = "";

// Digit buttons
let btnZero = document.querySelector(".btn-zero");
btnZero.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(0)
});

let btnOne = document.querySelector(".btn-one");
btnOne.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(1)
});

let btnTwo = document.querySelector(".btn-two");
btnTwo.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(2)
});

let btnThree = document.querySelector(".btn-three");
btnThree.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(3)
});

let btnFour = document.querySelector(".btn-four");
btnFour.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(4)
});

let btnFive = document.querySelector(".btn-five");
btnFive.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(5)
});

let btnSix = document.querySelector(".btn-six");
btnSix.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(6)
});

let btnSeven = document.querySelector(".btn-seven");
btnSeven.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(7)
});

let btnEight = document.querySelector(".btn-eight");
btnEight.addEventListener("click", () => {
    checkForResult()
    displayDigitOrOperator(8)
});

let btnNine = document.querySelector(".btn-nine");
btnNine.addEventListener("click", () => {
    checkForResult()
    console.log(displayContentSplit)
    displayDigitOrOperator(9)
});


// Operator buttons
let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "+"} `
    }
    displayDigitOrOperator(" + ")
});

let btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "-"} `
    }
    displayDigitOrOperator(" - ")
});

let btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", () => {
    rollingOperator()
     if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "*"} `
    }
    displayDigitOrOperator(" * ")
});

let btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", () => {
    rollingOperator()
     if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "/"} `
    }
    displayDigitOrOperator(" / ")
});


// Other buttons
let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = "";
    displayContent = "";
    displayContentSplit = "";
});

let btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    calculate();
    displayContentSplit = "result";
});

let btnPoint = document.querySelector(".btn-point");
btnPoint.addEventListener("click", () => {
    if (displayContent.includes(".") && display.textContent.split(" ").length < 2){
        return console.log("already has a dot")
    }
    displayDigitOrOperator(".")
});

// Supporting Functions

function calculate() {
    displayContentSplit = displayContent.split(" ");
    operandA = parseFloat(displayContentSplit[0], 10);
    operator = displayContentSplit[1]
    operandB = parseFloat(displayContentSplit[2], 10);

    if (!operator) {
        return display.textContent = operandA
    } else if (!operandA && operandA != 0) {
        return display.textContent = `Error`
    } else if (!operandB && operandB != 0) {
        return display.textContent = `Error`
    } else if (operandB === 0 && operator === "/") {
        display.textContent = "Critical hit!"
    } else {
        display.textContent = operate(operandA, operator, operandB).toFixed(5).replace(/\.?0+$/, '');
    }
}

function rollingOperator() {
    displayContentSplit = displayContent.split(" ");
    if (displayContentSplit.length === 3) {
        calculate()
    }
}

function displayDigitOrOperator(digitOrOperator) {
    let number = document.createElement("div")
    number.textContent = digitOrOperator;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
}

function checkForResult(digit) {
    if (displayContentSplit === "result") {
        display.textContent = "";
        displayContentSplit = digit;
    }
}

// Keyboard support

document.addEventListener("keyup", event => {
    if (event.keyCode === 96) {
    checkForResult()
    displayDigitOrOperator(0)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 97) {
    checkForResult()
    displayDigitOrOperator(1)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 98) {
    checkForResult()
    displayDigitOrOperator(2)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 99) {
    checkForResult()
    displayDigitOrOperator(3)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 100) {
    checkForResult()
    displayDigitOrOperator(4)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 101) {
    checkForResult()
    displayDigitOrOperator(5)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 102) {
    checkForResult()
    displayDigitOrOperator(6)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 103) {
    checkForResult()
    displayDigitOrOperator(7)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 104) {
    checkForResult()
    displayDigitOrOperator(8)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 105) {
    checkForResult()
    displayDigitOrOperator(9)
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 107) {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "+"} `
    }
    displayDigitOrOperator(" + ")
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
    calculate();
    displayContentSplit = "result";
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 109) {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "-"} `
    }
    displayDigitOrOperator(" - ")
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 106) {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "*"} `
    }
    displayDigitOrOperator(" * ")
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 111) {
    rollingOperator()
    if (displayContentSplit[2] === "") {
        return display.textContent = `${displayContentSplit[0]} ${displayContentSplit[1] = "/"} `
    }
    displayDigitOrOperator(" / ")
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 110) {
    if (displayContent.includes(".") && display.textContent.split(" ").length < 2){
        return console.log("already has a dot")
    }
    displayDigitOrOperator(".")
    }
})

document.addEventListener("keyup", event => {
    if (event.keyCode === 46) {
    display.textContent = "";
    displayContent = "";
    displayContentSplit = "";
    }
})

document.addEventListener("keyup", event => {
    console.log(event.keyCode)
})

