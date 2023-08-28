//Set up variables
let resultValue = 0;
let operatorValue = 0;
let inputArray = []
var activeOperation = add;
var consecutiveOperationsFlag = false;

// Set up functions to change the activeOperation to the correct operation

function setAdd() {
    if (consecutiveOperationsFlag == true) {
        updateOperatorValue()
        activeOperation()
        updateResultValue()
        inputArray = []
    }
    else {
        setInputsAsResult()
        inputArray = []
    }
    activeOperation = add
    consecutiveOperationsFlag = true
}

function setSubtract() {
    if (consecutiveOperationsFlag == true) {
        updateOperatorValue()
        activeOperation()
        updateResultValue()
        inputArray = []
    }
    else {
        setInputsAsResult()
        inputArray = []
    }
    activeOperation = subtract
    consecutiveOperationsFlag = true
}

function setMultiply() {
    if (consecutiveOperationsFlag == true) {
        updateOperatorValue()
        activeOperation()
        updateResultValue()
        inputArray = []
    }
    else {
        setInputsAsResult()
        inputArray = []
    }
    activeOperation = multiply
    consecutiveOperationsFlag = true
}

function setDivide() {
    if (consecutiveOperationsFlag == true) {
        updateOperatorValue()
        activeOperation()
        updateResultValue()
        inputArray = []
    }
    else {
        setInputsAsResult()
        inputArray = []
    }
    activeOperation = divide
    consecutiveOperationsFlag = true
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
    inputArray = []
    consecutiveOperationsFlag = false
}

function clearCalculator() {
    resultValue = 0;
    operatorValue = 0;
    inputArray = [];
    activeOperation = add;
    updateResultValue()
}

function handleNumberInputs(n) {
    pushToArray(n)
    let inputNumber = +inputArray.join("")
    console.log(`resultValue=${resultValue}`)
    console.log(`operatorValue=${operatorValue}`)
    updateDisplay(inputNumber)
}


function pushToArray(n) {
    inputArray.push(n)
}

function setInputsAsResult(){
    if (inputArray.length > 0){
        resultValue = +inputArray.join("")
    }
}


// Function to get operatorValue

function updateOperatorValue() {
    // + in this function ensures the result will be numeric
    operatorValue = +inputArray.join("")
}

function updateResultValue() {
    updateDisplay(resultValue)
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

zero.onclick = () => handleNumberInputs(0)
one.onclick = () => handleNumberInputs(1)
two.onclick = () => handleNumberInputs(2)
three.onclick = () => handleNumberInputs(3)
four.onclick = () => handleNumberInputs(4)
five.onclick = () => handleNumberInputs(5)
six.onclick = () => handleNumberInputs(6)
seven.onclick = () => handleNumberInputs(7)
eight.onclick = () => handleNumberInputsv(8)
nine.onclick = () => handleNumberInputs(9)

// UI Methods

function updateDisplay(displayValue) {
    // Clear Display
    pendingRemovalContent = document.getElementsByClassName('content')
    while (pendingRemovalContent.length > 0){
        pendingRemovalContent[0].parentNode.removeChild(pendingRemovalContent[0])
    }
    const content = document.createElement('div')
    content.classList.add('content')
    content.textContent = displayValue
    result.appendChild(content)
}
