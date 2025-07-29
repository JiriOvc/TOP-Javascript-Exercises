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
let operator = "+-*/";
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


operandA = 10;
operator = "/";
operandB = 5;

let display = document.querySelector(".display-area");
let displayContent = display.textContent;
display.textContent = "";

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

let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = ` + `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
    let number = document.createElement("div")
    number.textContent = ` - `;
    display.appendChild(number)
    displayContent = display.textContent
    console.log(displayContent)
});

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = "";
});

let btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    displayContentSplit = displayContent.split(" ");
    operandA = parseInt(displayContentSplit[0], 10);
    operator = displayContentSplit[1]
    operandB = parseInt(displayContentSplit[2], 10);
    
    console.log(displayContentSplit)
    console.log(`${typeof operandA} ${operator} ${typeof operandB}`)
    console.log(operate(operandA, operator, operandB))
    display.textContent = operate(operandA, operator, operandB)
});

console.log(displayContent)
