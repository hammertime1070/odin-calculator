//Set up variables
let resultValue = 0;
let operatorValue = 0;
let activeOperation = add()

// Set up functions to change the activeOperation to the correct operation

function setAdd() {
    activeOperation = add()
}

function setSubtract() {
    activeOperation = subtract()
}

function setMultiply() {
    activeOperation = multiply()
}

function setDivide() {
    activeOperation = divide()
}

// Set up Operations
function add() {
    resultValue += operatorValue
}

function subtract() {
    resultValue -= operatorValue
}

function multiply() {
    resultValue = resultValue * operatorValue
}

function divide() {
    resultValue = resultValue / operatorValue
}

function evaluate() {
    updateOperatorValue()
    activeOperation()
    updateResultValue()
}

// Function to get operatorValue
// Eventually will need to wait for a new button press
// and set the value of operatorValue
// May want a separate function to wait for the value within the operations

function updateOperatorValue() {
    operatorValue = parseInt(prompt('operatorValue'))
}

function updateResultValue() {
    console.log(resultValue)
}

