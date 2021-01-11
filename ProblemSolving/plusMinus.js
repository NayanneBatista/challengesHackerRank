'use strict';

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

function plusMinus(arr) {

    let n = arr.length
    let positivos = 0
    let negativos = 0
    let zeros = 0

    if(n > 0 && n <= 100){
        for(let i = 0; i < n; i++){
            if(arr[i] >= -100 && arr[i] <= 100){
                if(arr[i] > 0){
                    positivos++
                }else if(arr[i] < 0){
                    negativos++
                }else{
                    zeros++
                }  
            }
        }
    }

    let ratePositivos = (positivos/n).toFixed(6)
    let rateNegativos = (negativos/n).toFixed(6)
    let rateZeros = (zeros/n).toFixed(6)

    console.log(ratePositivos)
    console.log(rateNegativos)
    console.log(rateZeros)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
