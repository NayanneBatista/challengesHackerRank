'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function gamingArray(arr){
    let winner = "BOB"
    let biggest = foundBiggest(arr)

    removeElements(arr, biggest)

    while(arr.length > 0){
        biggest = foundBiggest(arr)
        removeElements(arr, biggest)
        winner = changeWinner(winner)
    }

    return winner
}

function foundBiggest(arr) {

    let biggest = arr.reduce((acumulator, current) => {
        if(acumulator > current) 
            return acumulator
        else
            return current    
    })
    
    return biggest
}

function removeElements(arr, biggest) {
    arr.splice(arr.indexOf(biggest))
}

function changeWinner(winner) {
    if(winner == "BOB")
        return "ANDY"
        
    if(winner == "ANDY")
        return "BOB"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const arrCount = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = gamingArray(arr);

        ws.write(result + '\n');
    }

    ws.end();
}