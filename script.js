//Set up variables
let resultValue = 10;
let operatorValue = 0;
let inputArray = []
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

function pushToArray(n) {
    inputArray.push(n)
}


// Function to get operatorValue
// Eventually will need to wait for a new button press
// and set the value of operatorValue
// May want a separate function to wait for the value within the operations

function updateOperatorValue() {
    // + in this function ensures the result will be numeric
    operatorValue = +inputArray.join("")
}

function updateResultValue() {
    console.log(resultValue)
}

// UI Elements

const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

const pressEquals = document.querySelector('#pressEquals')

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

// UI On Clicks

add.onclick = () => setAdd()
subtract.onclick = () => setSubtract()
multiply.onclick = () => setMultiply()
divide.onclick = () => setDivide()

pressEquals.onclick = () => evaluate()

zero.onclick = () => pushToArray(0)
one.onclick = () => pushToArray(1)
two.onclick = () => pushToArray(2)
three.onclick = () => pushToArray(3)
four.onclick = () => pushToArray(4)
five.onclick = () => pushToArray(5)
six.onclick = () => pushToArray(6)
seven.onclick = () => pushToArray(7)
eight.onclick = () => pushToArray(8)
nine.onclick = () => pushToArray(9)

