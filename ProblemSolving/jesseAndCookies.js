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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function cookies(k, A) {

    let secondMinimum = -1
    let iterations = 0

    for(let i = 0; i < A.length; i++){
        if(A[i] < k){
            iterations = 0
            break
        }else {
            iterations = -1
        }
    }

    if(iterations != -1){
        let arraySorted = A.sort((a, b) => a - b )
        let minimum = arraySorted[0]

        if(arraySorted[1] != arraySorted[0] && arraySorted[1] != k) {
            secondMinimum = arraySorted[1]
        }else{
            secondMinimum = 0
        }

        let result = minimum + 2 * (secondMinimum)
        let newArray = [...arraySorted]

        if(secondMinimum != 0){
            newArray.splice(minimum, secondMinimum)
        }else {
            newArray.splice(0, 1)
        }

        newArray.push(result)
        iterations ++
    }
    return iterations
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    let result = cookies(k, A);

    ws.write(result + "\n");

    ws.end();
}

