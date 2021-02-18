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
        result = (parseInt(operandos[0])) + (parseInt(operandos[2]))
    }else if(displayValue.includes("-")){
        operandos = displayValue.split("-")
        result = (parseInt(operandos[0])) - (parseInt(operandos[2]))
    }else if(displayValue.includes("*")){
        operandos = displayValue.split("-")
        result = (parseInt(operandos[0])) * (parseInt(operandos[2]))
    }else(displayValue.includes("/")){
        operandos = displayValue.split("-")
        result = (parseInt(operandos[0])) / (parseInt(operandos[2]))
    }    
    display.innerText = result
}
