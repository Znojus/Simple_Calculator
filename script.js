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

function applyOperator(opSymbol) {
    let result = null;

    if (operator === null) {
        a = Number(display.innerText);
    }
    else if (hasNewOperand) {
        b = Number(display.innerText);
        result = (operate(a, b, operator));
        a = result;
        lastB = b;
    }

    operator = opSymbol;
    decimalIsThere = false;
    hasNewOperand = false;
    return result;
}

let a = null, b = null, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");
let hasNewOperand = false;
let lastB = null;
let decimalIsThere = false;

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;


    let target = event.target;
    switch(target.innerText) {
        case "+":
        case "-":
        case "/":
        case "*":
            let operation = applyOperator(target.innerText);
            if (operation !== null) {
                display.innerText = operation;
            }
            break;

        case "=":
            if(hasNewOperand) {
                b = Number(display.innerText);
                lastB = b;
            }
            else if (lastB != null){
                b = lastB;
            }
            else {
                break;
            }
            let result = operate(a, b, operator);
            display.innerText = result;
            a = result;
            hasNewOperand = false;
            break;

        case "C":
            clearDisplay();
            a = null, b = null, operator = null;
            decimalIsThere = false;
            hasNewOperand = false;
            break;

        case ".":
            if (!decimalIsThere){
                if(!hasNewOperand){
                    clearDisplay();
                    hasNewOperand = true;
                }
                if(display.innerText === "") {
                    populate("0");
                }
                populate(target.innerText);
                decimalIsThere = true;
            }
            break;

        default:
            if(!hasNewOperand) {
                clearDisplay();
                decimalIsThere = false;
            }
            populate(target.innerText);
            hasNewOperand = true;
            break;
    }
})