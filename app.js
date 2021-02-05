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
            if (Number(y) === 0) {
                setTimeout(function(){clear()},2*1000);
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
const operators = ['+', '-', '/', '*'];
let firstNumber = '';
let secondNumber = '';
let operatorClicked = false;
let operation;

//add function to numbers
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function(){clickNumber(this)};
}

function clickNumber (e) {
    if (display.textContent.length < 20) {
        display.textContent += e.textContent;
        if (!operatorClicked) {
            firstNumber += e.textContent;
        }
        else {
            secondNumber += e.textContent;
        }
    }
}
const operatorButtons = document.getElementById('operatorButtons').children;
//add function to operators
for (let i = 0; i < operatorButtons.length -1; i++) {     // -1 so it excludes the '='
    operatorButtons[i].onclick = function(){clickOperator(this)};
}
function clickOperator (e) {
    if (display.textContent.length < 20) {
        if (operatorClicked) {
            calculate();
        }
        display.textContent += e.textContent;
        operation = e.textContent;
        operatorClicked = true;
    }
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
//deletes last number / operator input
const deleteButton = document.getElementById('del');
deleteButton.onclick = function(){backspace()};
function backspace () {
    for (let i = 0; i < operators.length; i++) {
        if (display.textContent[display.textContent.length-1] === operators[i]) {
            operatorClicked = false;
            operation = 0;
        }
    }
    if (!operatorClicked && !(Number.isNaN(display.textContent[display.textContent.length - 1] / 1))) {
        firstNumber = firstNumber.slice(0, -1);
    }
    else if (operatorClicked && !(Number.isNaN(display.textContent[display.textContent.length - 1] / 1))) {
        secondNumber = secondNumber.slice(0, -1);
    }
    display.textContent = display.textContent.slice(0, -1);
    console.log(firstNumber);
    console.log(secondNumber);
}
//decimal separator '.'
const decimalButton = document.getElementById('decimalPoint');
decimalButton.onclick = function(){decimal()};
function decimal () {
    if (display.textContent.length < 20) {
        if (!operatorClicked && ( firstNumber.indexOf('.') === -1 ) ) {
            display.textContent += '.';
            firstNumber += '.';
        }
        else if (operatorClicked && ( secondNumber.indexOf('.') === -1 ) ) {
            display.textContent += '.';
            secondNumber += '.';
        }
    }
}

//keyboard support
window.onkeypress = function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
    else if (event.key === 'c' || event.key === 'C') {
        clear();
    }
    if (display.textContent.length < 20) {
        //keyboard support for numbers
        if ( !(Number.isNaN(event.key / 1)) ) {
            display.textContent += event.key;
            if (!operatorClicked) {
                firstNumber += event.key;
            }
            else {
                secondNumber += event.key;
            }
        }
        else {
            //operator keyboard support
            for (let i = 0; i < operators.length; i++) {
                if (event.key === operators[i]) {
                    if (display.textContent.length < 20) {
                        if (operatorClicked) {
                            calculate();
                        }
                        display.textContent += event.key;
                        operation = event.key;
                        operatorClicked = true;
                    }
                }
            }
        }
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log (operation);
}