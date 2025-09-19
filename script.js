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

let a = 4, b = 2;
let operator = null;

function operate(a, b, oper) {
    return oper === "+" ? add(a, b) :
    oper === "-" ? subtract(a, b) :
    oper === "*" ? multiply(a, b) :
    divide(a, b);
}

let buttons = document.querySelector(".button-container");
let display = document.querySelector(".display-div");

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.innerText) {
        case "+":
            a = Number(display.innerText);
            operator = "+";
            break;
    }
    // switch (target.innerText) {
    //     case "-":
    //         operate(a, b, "-");
    //         break;
    // }
    // switch (target.innerText) {
    //     case "/":
    //         operate(a, b, "/");
    //         break;
    // }
    // switch (target.innerText) {
    //     case "*":
    //         operate(a, b, "*");
    //         break;
    // }
})