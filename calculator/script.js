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


// Step 3: Calculate function
function calculate(operandA, operator, operandB) {
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
operator = "+";
operandB = 4;

console.log(calculate(operandA, operator, operandB))