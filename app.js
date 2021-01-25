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
            return Number(x) / Number(y);
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

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function(){clickNumber(this)}
}

function clickNumber (e) {
    display.textContent += e.textContent;
}