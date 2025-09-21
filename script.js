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
    return displayArr[1];
}

let a, b, operator = null;
let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    
    let target = event.target;
    switch(target.innerText) {
        case "+":
            a = Number(display.innerText);
            operator = "+";
            populate("+");
            break;

        case "-":
            a = Number(display.innerText);
            operator = "-";
            populate("-");
            break;

        case "/":
            a = Number(display.innerText);
            operator = "/";
            populate("/");
            break;

        case "*":
            a = Number(display.innerText);
            operator = "*";
            populate("*");
            break;

        case "=":
            b = Number(getSecond());
            clearDisplay();
            populate(operate(a, b, operator));
            break;

        default:
            populate(target.innerText);
            break;
    }
})