let display = document.getElementById("res")
let displayValue = ""

function processarInput(input) {
    if(input == "C") {
        display.innerText = ""
        displayValue = ""
    }
    else if(input == "=") {
        calcular(displayValue)
    }
    else {
        displayValue += input
        display.innerText = displayValue
    }  
}

let operandos = []
let result = 0

function calcular(displayValue) {
    
    if(displayValue.includes("+")){
        operandos = displayValue.split("+")
        let x = parseInt(operandos[0], 2)
        let y = parseInt(operandos[1], 2)
        let sum = x + y 
        result = sum.toString(2)
    }else if(displayValue.includes("-")){
        operandos = displayValue.split("-")
        let x = parseInt(operandos[0], 2)
        let y = parseInt(operandos[1], 2)
        let sub = x - y 
        result = sub.toString(2)
    }else if(displayValue.includes("*")){
        operandos = displayValue.split("*")
        let x = parseInt(operandos[0], 2)
        let y = parseInt(operandos[1], 2)
        let mul = x * y 
        result = mul.toString(2)
    }else{
        operandos = displayValue.split("/")
        let x = parseInt(operandos[0], 2)
        let y = parseInt(operandos[1], 2)
        let div = x / y 
        result = div.toString(2)
    }    
    display.innerHTML = result
}
