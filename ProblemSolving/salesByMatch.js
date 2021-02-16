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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let object = objectNumbers(ar)
    let pairs = findPairs(object)
    return pairs
}

function objectNumbers(arr){
    let result = arr.reduce(( object, item ) => {  
    
        if ( !object[item] ) {
           object[item] = 1
        } else {
           object[item]++
        }
        return object
    },{})  

    return result
}

function findPairs(obj){
    let values = Object.values(obj)
    let pairs = 0
    
    for(let i = 0; i < values.length; i++){
        if(values[i] != 1){
            if(values[i] % 2 == 0)
                pairs += (values[i]/2)
            else
                pairs += (values[i] - 1)/2    
        }
    }
    return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}




