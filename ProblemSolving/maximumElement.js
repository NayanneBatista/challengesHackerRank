function processData(input) {
    
    let myStack = []
    let queries = input.split("\n")
    let nQueries = queries[0]
    
    for(let i = 1; i <= nQueries; i++){
        if(queries[i].startsWith("1")){
            let querieOne = queries[i].split(" ")
            myStack.unshift(querieOne[1])
        }else if(queries[i].startsWith("2")){
            myStack.shift()
        }else{
            let maximum = myStack.reduce((a, b) => {
                return Math.max(a, b)
            })
            console.log(maximum)  
        } 
    }   
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