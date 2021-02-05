function processData(input) {
    let numbers = input.split("\n")
    numbers.shift()
    let temDivisor = 0

    numbers.forEach(value => {
        
        if(value % 2 == 0 && value != 2)
            console.log('Not prime')
        else {
            for(let i = 2; i <= Math.floor(value/2); i++){
                if(value % i == 0){
                    temDivisor = 1
                    break 
                }    
            }  
            
            if(value > 1 && !temDivisor)
                console.log("Prime") 
            else
                console.log("Not prime")       
        }  
    })
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});