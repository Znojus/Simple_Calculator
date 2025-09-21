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

function getResult() {
    if (operator === null) {
        let text = display.innerText;
        clearDisplay();
        return Number(text);
    }

    if (b === null) {
        b = Number(display.innerText);
    }

    clearDisplay();
    let result = operate(a, b, operator);
    a = null;
    return result;
}

function checkWhich(isEquals = false) {
    if (a === null) {
        a = Number(display.innerText);
    }
    else {
        b = Number(display.innerText);
    }

    if(!isEquals){
        needsClear = true;
    }
}

let a = null, b = null, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");
let needsClear = false;

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    if (needsClear) {
        clearDisplay();
        needsClear = false;
    }

    let target = event.target;
    switch(target.innerText) {
        case "+":
            checkWhich();
            operator = "+";
            break;

        case "-":
            operator = "-";
            populate("-");
            break;

        case "/":
            operator = "/";
            populate("/");
            break;

        case "*":
            operator = "*";
            populate("*");
            break;

        case "=":
            checkWhich(true);
            populate(getResult());
            break;

        case "C":
            clearDisplay();
            a = null, b = null, operator = null;
            break;

        default:
            populate(target.innerText);
            break;
    }
})