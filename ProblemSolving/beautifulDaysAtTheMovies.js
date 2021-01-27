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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let initArr = createArray(i, j)
    let finalArr = createArrayWithReversedNumbers(initArr)
    let arrSub = createArraySubtracted(initArr, finalArr)
    return verifyDivisibility(arrSub, k)
}

function createArray(i, j){
    let numberArray = []

    for(let x = i; x <= j; x++){
        numberArray.push(x)
    }
    return numberArray
}

function createReverseNumber(n){
    let reverseNumber = n.toString().split("").reverse().join("")
    return reverseNumber
}

function createArrayWithReversedNumbers(arr){
    let arrayWithReversedNumbers = arr.map(value => createReverseNumber(value))
    return arrayWithReversedNumbers
}

function createArraySubtracted(numberArray, arrayWithReversedNumbers){
    let arraySubtracted = numberArray.map(function(element, index) {
        return Math.abs(element - arrayWithReversedNumbers[index])
    })

    return arraySubtracted
}

function verifyDivisibility(arraySubtracted, k){
    let beautifulDays = 0

    for(let i = 0; i < arraySubtracted.length; i++){
        if(arraySubtracted[i] % k == 0) beautifulDays++
    }
    return beautifulDays
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}

