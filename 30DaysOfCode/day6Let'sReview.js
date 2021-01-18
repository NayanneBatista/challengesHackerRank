function processData(input) {
    
    var evenName = ""
    var oddName = ""
    var finalName = ""
    
    var inputs = input.split("\n")
    var n = inputs[0]
    inputs.shift()
    
    
    for(var i = 0; i < n; i++){
        for(var j = 0; j < inputs[i].length; j++){
                if(j == 0 || j % 2 == 0) {
                    evenName += inputs[i].charAt(j)
                
                } else if (j % 2 != 0) {
                    oddName += inputs[i].charAt(j)  
            }
            
        }     
        finalName = evenName + " " + oddName
        console.log(finalName)
        evenName = ""
        oddName = ""
        finalName = ""          
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