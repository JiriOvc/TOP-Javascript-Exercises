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
let operator = "";
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
display.textContent = "";

// Number buttons
let btnZero = document.querySelector(".btn-zero");
btnZero.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 0;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnOne = document.querySelector(".btn-one");
btnOne.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 1;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnTwo = document.querySelector(".btn-two");
btnTwo.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 2;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnThree = document.querySelector(".btn-three");
btnThree.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 3;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnFour = document.querySelector(".btn-four");
btnFour.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 4;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnFive = document.querySelector(".btn-five");
btnFive.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 5;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnSix = document.querySelector(".btn-six");
btnSix.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 6;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnSeven = document.querySelector(".btn-seven");
btnSeven.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 7;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnEight = document.querySelector(".btn-eight");
btnEight.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 8;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnNine = document.querySelector(".btn-nine");
btnNine.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = 9;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});


// Operators
let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {

    displayContentSplit = displayContent.split(" ");
    if (displayContentSplit.length === 3) {
        operandA = parseFloat(displayContentSplit[0], 10);
        operator = displayContentSplit[1]
        operandB = parseFloat(displayContentSplit[2], 10);
        display.textContent = operate(operandA, operator, operandB).toFixed(10).replace(/0+$/, "");
    }
    
    console.log(operator)
    let number = document.createElement("div")
    number.textContent = ` + `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
    displayContentSplit = displayContent.split(" ");
    if (displayContentSplit.length === 3) {
        operandA = parseFloat(displayContentSplit[0], 10);
        operator = displayContentSplit[1]
        operandB = parseFloat(displayContentSplit[2], 10);
        display.textContent = operate(operandA, operator, operandB).toFixed(10).replace(/0+$/, "");
    }
    let number = document.createElement("div")
    number.textContent = ` - `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", () => {
    displayContentSplit = displayContent.split(" ");
    if (displayContentSplit.length === 3) {
        operandA = parseFloat(displayContentSplit[0], 10);
        operator = displayContentSplit[1]
        operandB = parseFloat(displayContentSplit[2], 10);
        display.textContent = operate(operandA, operator, operandB).toFixed(10).replace(/0+$/, "");
    }
    let number = document.createElement("div")
    number.textContent = ` * `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", () => {
    displayContentSplit = displayContent.split(" ");

    if (displayContentSplit.length === 3) {
        operandA = parseFloat(displayContentSplit[0], 10);
        operator = displayContentSplit[1]
        operandB = parseFloat(displayContentSplit[2], 10);
        display.textContent = operate(operandA, operator, operandB).toFixed(10).replace(/0+$/, "");
    }
    let number = document.createElement("div")
    number.textContent = ` / `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});


// Other buttons
let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = "";
});

let btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    displayContentSplit = displayContent.split(" ");
    operandA = parseFloat(displayContentSplit[0], 10);
    operator = displayContentSplit[1]
    operandB = parseFloat(displayContentSplit[2], 10);
    
    console.log(displayContentSplit)
    console.log(`${operandA} ${operator} ${operandB}`)

    if (displayContentSplit === 1) {
        display.textContent = operandA
    }

    if (operandB === 0 && operator === "/") {
        display.textContent = "Critical hit!"
    } else {
        console.log(operate(operandA, operator, operandB))
        display.textContent = operate(operandA, operator, operandB).toFixed(10).replace(/0+$/, "");
    }
});

let btnPoint = document.querySelector(".btn-point");
btnPoint.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = ".";
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});



