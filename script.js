//Set up variables
let resultValue = 0;
let operatorValue = 0;
let inputArray = []
var activeOperation = add;

// Set up functions to change the activeOperation to the correct operation

function setAdd() {
    activeOperation = add
    setInputsAsResult()
    inputArray = []
}

function setSubtract() {
    activeOperation = subtract
    setInputsAsResult()
    inputArray = []
}

function setMultiply() {
    activeOperation = multiply
    setInputsAsResult()
    inputArray = []
}

function setDivide() {
    activeOperation = divide
    setInputsAsResult()
    inputArray = []
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

function clearCalculator() {
    resultValue = 0;
    operatorValue = 0;
    inputArray = [];
    activeOperation = add;
    updateResultValue()
}

function pushToArray(n) {
    inputArray.push(n)
    handleDisplay()
}

function setInputsAsResult(){
    resultValue = +inputArray.join("")
}


// Function to get operatorValue

function updateOperatorValue() {
    // + in this function ensures the result will be numeric
    operatorValue = +inputArray.join("")
}

function updateResultValue() {
    console.log(resultValue)
}

// UI Elements

const addBtn = document.querySelector('#add')
const subtractBtn = document.querySelector('#subtract')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const clearBtn = document.querySelector('#clear')

const equalsBtn = document.querySelector('#equals')

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

const result = document.querySelector('#result')

// UI On Clicks

addBtn.onclick = () => setAdd()
subtractBtn.onclick = () => setSubtract()
multiplyBtn.onclick = () => setMultiply()
divideBtn.onclick = () => setDivide()
clearBtn.onclick = () => clearCalculator()

equalsBtn.onclick = () => evaluate()

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

// UI Methods

function handleDisplay() {
    inputArrayValue = +inputArray.join("")
    const content = document.createElement('div')
    content.classList.add('content')
    content.textContent = inputArrayValue
    result.appendChild(content)
}
