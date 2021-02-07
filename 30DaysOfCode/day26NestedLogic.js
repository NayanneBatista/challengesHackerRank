function processData(input) {
    let date = input.split("\n")
    let returned = date[0]
    let due = date[1]
    let dateReturned = returned.split(" ")
    let dateDue = due.split(" ")
    
    if(Number(dateReturned[2]) > Number(dateDue[2])) 
        console.log(10000)
    else if(Number(dateReturned[2]) < Number(dateDue[2])) 
        console.log(Number(0))   
    else if(Number(dateReturned[1]) > Number(dateDue[1]) && (Number(dateDue[2]) - Number(dateReturned[2])) != 1) {
        let fine = Number(dateReturned[1]) - Number(dateDue[1])
        console.log(500*fine)
    }
    else if(Number(dateReturned[0]) > Number(dateDue[0]) && (Number(dateReturned[1]) - Number(dateDue[1])) != 11) {
        let fine = Number(dateReturned[0]) - Number(dateDue[0])
        console.log(15*fine)
    }
    else
        console.log(Number(0))
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
