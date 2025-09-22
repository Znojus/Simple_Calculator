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

function save() {
    a = Number(display.innerText);
    clearDisplay();
    needSave = false;
}

let a = null, b = null, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");
let needSave = true;
let hasNewOperand = false;

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;


    let target = event.target;
    switch(target.innerText) {
        case "+":
            if (operator === null) {
                a = Number(display.innerText);
            }
            else if (hasNewOperand){
                b = Number(display.innerText);
                clearDisplay();
                populate(operate(a, b, operator));
                hasNewOperand = false;
            }
            needSave = true;
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
            if(a !== null && operator !== null) {
                b = Number(display.innerText);
                clearDisplay();
                populate(operate(a, b, operator));   
                hasNewOperand = false;
            }
            break;

        case "C":
            clearDisplay();
            a = null, b = null, operator = null;
            break;

        default:
            hasNewOperand = true;
            if(needSave) save();
            populate(target.innerText);
            break;
    }
})