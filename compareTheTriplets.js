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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var pontosA = 0
    var pontosB = 0
    
    for(let i = 0; i < a.length; i++){
        if(a[i] >= 1 && a[i] <=100 && b[i] >= 1 && b[i] <= 100){
            if(a[i] > b[i]){
                pontosA += 1
            }else if(b[i] > a[i]){
                pontosB += 1
            } 
        }  
    }
    
    a.push(pontosA)
    b.push(pontosB)
    
    var scoreFinal = [a[3], b[3]]
    return scoreFinal
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

