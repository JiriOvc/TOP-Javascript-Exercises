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



let btnOne = document.querySelector(".btn-one");
btnOne.addEventListener("click", () => {
    operandA = 1
    return console.log(`Operand A is ${operandA}`)
});

let btnTwo = document.querySelector(".btn-two");
btnTwo.addEventListener("click", () => {
    operandB = 2
    return console.log(operandB)
});

let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
    operator = "+"
    return console.log(operator)
});

let btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    console.log(operate(operandA, operator, operandB))
});