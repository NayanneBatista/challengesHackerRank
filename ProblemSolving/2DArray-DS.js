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

function hourglassSum(arr) {
    let hourglasses = []

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
             let sum = 0;
             
             sum += arr[row][col];
             sum += arr[row][col + 1];
             sum += arr[row][col + 2];
             sum += arr[row + 1][col + 1];
             sum += arr[row + 2][col]; 
             sum += arr[row + 2][col + 1];
             sum += arr[row + 2][col + 2];
             
            hourglasses.push(sum) 
        } 
    }

    hourglasses.sort((a, b) => {
        return a - b
    })
        
    let maxSum = hourglasses[hourglasses.length - 1]
    
    return maxSum

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}