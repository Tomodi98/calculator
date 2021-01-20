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

    return {
        add,
        subtract,
        multiply,
        divide
    };
})();

const DOMmanipulation = (() => {
    let displayText = '';
    let numberButtons = document.getElementById('numberButtons').children;

    const deleteButton = document.getElementById('del');
    deleteButton.onclick = function() {backspace()};

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
        console.log(display);
    }

    const backspace = () => {
        displayText = displayText.slice(0, -1);
        document.getElementById('display').textContent = displayText;
    }
})();