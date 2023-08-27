//Set up variables
let resultValue = 10;
let operatorValue = 0;
var activeOperation = add;

// Set up functions to change the activeOperation to the correct operation

function setAdd() {
    activeOperation = add
}

function setSubtract() {
    activeOperation = subtract
}

function setMultiply() {
    activeOperation = multiply
}

function setDivide() {
    activeOperation = divide
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

// UI Elements

const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

const equals = document.querySelector('#equals')

const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')