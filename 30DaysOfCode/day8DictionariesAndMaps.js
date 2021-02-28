function processData(input) {
    let people = new Map()
    
    let inputArray = input.split("\n")

    for(let i = 0; i < inputArray[0]; i++){
        let phoneBook = inputArray[i + 1].split(" ")
        people.set(phoneBook[0], phoneBook[1])
    }

    for(let i = Number(inputArray[0]) + 1; i < inputArray.length; i++) {
        if(people.has(inputArray[i])){
            let number = people.get(inputArray[i])
            console.log(`${inputArray[i]}=${number}`)
        }else {
            console.log('Not found')
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