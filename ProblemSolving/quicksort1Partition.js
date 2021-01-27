'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function quickSort(arr) {
    let p = arr[0]
    let finalArray = []
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < p)
            finalArray.unshift(arr[i])
    }
    finalArray.push(p)
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > p)
            finalArray.push(arr[i])
    }
    
    return finalArray
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}