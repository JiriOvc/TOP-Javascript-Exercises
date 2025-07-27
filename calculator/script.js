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

console.log(operate(operandA, operator, operandB));

let display = document.querySelector(".display-area")


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

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = "";
});

let btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    console.log(operate(operandA, operator, operandB))
});

let displayContent = display.textContent
displayContent = display.textContent
console.log(displayContent)