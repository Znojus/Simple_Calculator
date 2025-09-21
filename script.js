function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function populate(text) {
    display.innerText += text;
}

function operate(a, b, oper) {
    return oper === "+" ? add(a, b) :
    oper === "-" ? subtract(a, b) :
    oper === "*" ? multiply(a, b) :
    divide(a, b);
}

function clearDisplay() {
    display.innerText = "";
}

function getSecond() {
    let displayArr = display.innerText.split(operator);
    alert(b);
    if (displayArr[1] !== 0) {
        return displayArr[1];
    }
    else return b;
}

function getResult() {
    if (operator === null) {
        let text = display.innerText;
        clearDisplay();
        return Number(text);
    }

    let displayArr = display.innerText.split(operator);
    a = Number(displayArr[0]);
    if (displayArr[1] !== undefined) {
        b = Number(displayArr[1]);
    }
    clearDisplay();
    isResult = true;
    return operate(a, b, operator);
}

function displayHasOperator() {
    const operatorString = "/*-+";
    let displayChars = display.innerText.split('');

    if(displayChars[0] === "-" && !isNaN(displayChars[1])) {
        displayChars.shift();
    }
    return displayChars
        .find(op => operatorString.includes(op));
}

let a, b, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");
let isResult = false;

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    
    let target = event.target;
    switch(target.innerText) {
        case "+":
            if(displayHasOperator()) {
                populate(getResult());
                break;
            }
            operator = "+";
            populate("+");
            break;

        case "-":
            if (displayHasOperator()) {
                populate(getResult());
                break;
            }
            operator = "-";
            populate("-");
            break;

        case "/":
            if (displayHasOperator()) {
                populate(getResult());
                break;
            }
            operator = "/";
            populate("/");
            break;

        case "*":
            if (displayHasOperator()) {
                populate(getResult());
                break;
            }
            operator = "*";
            populate("*");
            break;

        case "=":
            populate(getResult());
            break;

        case "C":
            clearDisplay();
            a, b, operator = null;
            break;

        default:
            // if (isResult) {
            //     a = Number(display.innerText);
            //     clearDisplay();
            //     isResult = false;
            // }
            populate(target.innerText);
            break;
    }
})