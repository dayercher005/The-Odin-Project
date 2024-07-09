const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const modulus = document.querySelector("#modulus");
const percentage = document.querySelector("#percentage");
const digits = document.querySelectorAll(".digits");
const equality = document.querySelector("#equality");
const operatorButtons = document.querySelectorAll(".operatorButtons");
let num1;
let num2;
let result;
let operator;
let boolean;
let boolean_;
let variable;


clear.addEventListener("click",() => {
    display.textContent = "0";
    num1 = null;
    num2 = null;
    operator = null;
})

percentage.addEventListener("click", () => {
    let result = Number(display.textContent)
    display.textContent = `${result/100}`;
})

modulus.addEventListener("click", () =>{
    if(Number(display.textContent) > 0){
        display.textContent = `-${display.textContent}`
    } else if(Number(display.textContent) < 0){
        variable = Number(display.textContent)
        display.textContent = `${Math.abs(variable)}`
    } else {display.textContent = "0"};
})

digits.forEach((digit) =>{
    digit.addEventListener("click", () => {
            if (display.textContent == 0){                    
                display.textContent = "";
                display.textContent += digit.value
            } else if(boolean == true){
                display.textContent = "";
                display.textContent += digit.value
                boolean = false;
            }else{
                display.textContent += digit.value
            }

    })
})


function Addition(num1, num2){
    result = Number(num1) + Number(num2)
    if (String(result).length > 5){
        display.textContent = result.toFixed(3)
    } else{
        return display.textContent = result
    }
}

function Subtraction(num1, num2){
    result = num1 - num2
    if (String(result).length > 5){
        display.textContent = result.toFixed(3)
    } else{
        return display.textContent = result
    }
}

function Multiplication(num1, num2){
    result = num1 * num2
    if (String(result).length > 5){
        display.textContent = result.toFixed(2)
    } else{
        return display.textContent = result
    }
}

function Division(num1, num2){
    result = num1 / num2
    if(num2 == 0){
       return result = "Error";
    }
    if (String(result).length > 5){
        display.textContent = result.toFixed(4)
    } else{
        return display.textContent = result
    }
}


function Operate(num1, num2, operator){
    switch(operator){
        case '+':
            return Addition(num1, num2);
        case '-':
            return Subtraction(num1, num2);
        case '*':
            return Multiplication(num1, num2);
        case '/':
            return Division(num1, num2);
}
}

operatorButtons.forEach((Operator) => {
    Operator.addEventListener("click", () => {
        boolean = true;
        if (num1 == null){
            num1 = display.textContent;
        } else {
            if(boolean_ == true){
                num2 = display.textContent;
                Operate(num1, num2, operator);
                num1 = result;
                console.log(num1, num2);
            } else{
                num1 = display.textContent;
            }
        } 
        operator = Operator.value;
        boolean_ = true;
    
    })
})

equality.addEventListener("click", () => {
    if(boolean_ == true){
        num2 = Number(display.textContent)
        Operate(num1, num2, operator)
        console.log(result)
        console.log(num1, num2, operator)
    }
    boolean_ = false;
})
