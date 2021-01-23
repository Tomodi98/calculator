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
            return x + y;
        }
        else if (operator === '-') {
            return x - y;
        }
        else if (operator === '*') {
            return x * y;
        }
        else if (operator === '/') {
            return x / y;
        }
    }

    return {
        add,
        subtract,
        multiply,
        divide,
        operate
    };
})();

const DOMmanipulation = (() => {
    let displayText = '';
    let numberButtons = document.getElementById('numberButtons').children;

    const deleteButton = document.getElementById('del');
    deleteButton.onclick = function() {backspace()};

    const clearButton = document.getElementById('clear');
    clearButton.onclick = function() {clear()};

    //adding functions to number buttons
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].onclick = function() {
            clickNumber (this);
        };
    }
    //write the number clicked into the display area
    const clickNumber = (e) => {
        displayText += e.textContent;
        document.getElementById('display').textContent = displayText;
        operatorInDisplay = false;
    }

    const backspace = () => {
        displayText = displayText.slice(0, -1);
        document.getElementById('display').textContent = displayText;
    }

    const clear = () => {
        displayText = '';
        document.getElementById('display').textContent = displayText;
    }
    //add function to operator buttons
    let operatorButtons = document.getElementById('operatorButtons').children;
    let operatorInDisplay = false; //keeps check that no more operators can be added after one is already there
    for (let i = 0; i < operatorButtons.length - 1; i++) {
        operatorButtons[i].onclick = function() {
            clickOperator (this);
        };
    }
    const clickOperator = (e) => {
        if (!operatorInDisplay) {
            displayText += e.textContent;
            document.getElementById('display').textContent = displayText;
            operatorInDisplay = true;
        }
        else {
            backspace();
            displayText += e.textContent;
            document.getElementById('display').textContent = displayText;
        }
    }

})();