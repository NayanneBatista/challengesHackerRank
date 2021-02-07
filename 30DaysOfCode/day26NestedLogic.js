function processData(input) {
    let date = input.split("\n")
    let dateReturned = date[0]
    let dateDue = date[1]
    
    console.log(dateDue)
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