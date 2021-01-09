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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    
    let minSum = 0
    let maxSum = 0

    let ordenedArray = arr.sort(function(a, b) {
        return a - b
    })

    for(let i = 0; i < 4; i++){
        if(ordenedArray[i] >=1 && ordenedArray[i] <= Math.pow(10, 9)){
            minSum += ordenedArray[i]
        }
    }
    
    let reverseArray = ordenedArray.reverse()

    for(let i = 0; i < 4; i++){
        if(reverseArray[i] >=1 && reverseArray[i] <= Math.pow(10, 9)){
            maxSum += reverseArray[i]
        }
    }

    console.log(`${minSum} ${maxSum}`)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}