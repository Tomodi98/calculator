const operations = (() => {
    const add = (x, y) => {
        return x + y;
    }
    const subtract = (x, y) => {
        return x - y;
    }
    const multiply = (x, y) => {
        return x * y;
    }
    const divide = (x, y) => {
        return x / y;
    }

    const operate = (operator, x, y) => {
        if (operator === '+') {
            return Number(x) + Number(y);
        }
        else if (operator === '-') {
            return Number(x) - Number(y);
        }
        else if (operator === '*') {
            return Number(x) * Number(y);
        }
        else if (operator === '/') {
            setTimeout(function(){clear()},2000);
            if (Number(y) === 0) {
                return 'Hey! You can\'t divide by 0!';
            }
            else {
                return Number(x) / Number(y);
            }
        }
    }
    return {
        add,
        subtract,
        multiply,
        divide,
        operate
    }
})();

const numberButtons = document.getElementById('numberButtons').children;
const display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operatorClicked = false;
let operation;

//add function to numbers
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function(){clickNumber(this)};
}

function clickNumber (e) {
    display.textContent += e.textContent;
    if (!operatorClicked) {
        firstNumber += e.textContent;
    }
    else {
        secondNumber += e.textContent;
    }
}
const operatorButtons = document.getElementById('operatorButtons').children;
//add function to operators
for (let i = 0; i < operatorButtons.length -1; i++) {     // -1 so it excludes the '='
    operatorButtons[i].onclick = function(){clickOperator(this)};
}
function clickOperator (e) {
    if (operatorClicked) {
        calculate();
    }
    display.textContent += e.textContent;
    operation = e.textContent;
    operatorClicked = true;
}

const equalsSign = document.getElementById('operate');
equalsSign.onclick = function(){calculate()};

function calculate () {
    display.textContent = operations.operate(operation, firstNumber, secondNumber);
    //reset everything
    firstNumber = display.textContent;
    secondNumber = '';
    operatorClicked = false;
}
//clears and resets everything
const clearButton = document.getElementById('clear');
clearButton.onclick = function(){clear()};
function clear () {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operatorClicked = false;
}