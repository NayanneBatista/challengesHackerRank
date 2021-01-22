'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function missingNumbers(arr, brr) {
    
    let array = brr.concat(arr)
    
    let counts = {}
    let finalArray = []

    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }   
    
    for (let property in counts){
        if(counts[property] % 2 !== 0)
        finalArray.push(property)
    }
        
    let fArray = finalArray.sort((a, b) => {
        return (a-b)
    })
    
    return fArray
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}