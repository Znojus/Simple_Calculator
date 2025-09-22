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

let a = null, b = null, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");
let hasNewOperand = false;
let lastB = null;

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;


    let target = event.target;
    switch(target.innerText) {
        case "+":
            if (operator === null) {
                a = Number(display.innerText);
                hasNewOperand = false;
            }
            else if (hasNewOperand){
                b = Number(display.innerText);
                clearDisplay();
                display.innerText =(operate(a, b, operator));
                hasNewOperand = false;
            }
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
            if(hasNewOperand) {
                b = Number(display.innerText);
                lastB = b;
            }
            else {
                b = lastB;
            }
            let result = display.innerText = operate(a, b, operator);
            a = result;
            hasNewOperand = false;
            break;

        case "C":
            clearDisplay();
            a = null, b = null, operator = null;
            break;

        default:
            if(!hasNewOperand) {
                clearDisplay();
            }
            populate(target.innerText);
            hasNewOperand = true;
            break;
    }
})