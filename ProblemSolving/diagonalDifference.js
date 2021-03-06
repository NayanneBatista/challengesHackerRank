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

function diagonalDifference(arr) {
    
    let somaDiagonalPrincipal = 0
    let somaDiagonalSecundaria = 0
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i == j) {
                somaDiagonalPrincipal += arr[i][j]
            }
            if( j == (arr.length - 1 - i)) {
                somaDiagonalSecundaria += arr[i][j]
            }   
        }             
    }
    let resultado = somaDiagonalPrincipal - somaDiagonalSecundaria
    return Math.abs(resultado)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}