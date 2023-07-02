// Declare functions for all of the basic math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Initialize variables for two numbers and an operator

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let result = 0;

// Declare calculator function

function operate(calcOperator, calcfirstNumber, calcsecondNumber) { // consider reordering
    
    switch (calcOperator) {
        case "add":
            return add(calcfirstNumber, calcsecondNumber);
        case "subtract":
            return subtract(calcfirstNumber, calcsecondNumber);
        case "multiply":
            return multiply(calcfirstNumber, calcsecondNumber);
        case "divide":
            return divide(calcfirstNumber, calcsecondNumber);
    }
}

// Display value logic

let displayValue = "0";
const display = document.querySelector(".display_numbers");
const buttons = document.querySelectorAll(".button");

console.log("Starting")

buttons.forEach((button) => {

    button.addEventListener("click", () => {
    
        if (button.classList.contains("number")) {
            console.log("Number button clicked");
            displayValue += button.id;
            display.textContent = displayValue;
        } else if (button.classList.contains("operator")) {

            console.log("Operator button clicked");

            
            if (firstNumber == 0) {
                console.log("First number saved");
                firstNumber = displayValue;
                displayValue = 0;
            } else { 
                console.log("Second number saved");
                secondNumber = displayValue;
                operator = button.id;
                result = operate(operator,firstNumber,secondNumber);
                console.log("result saved")

            }
        };
    });
});

