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

function convert(n) {
    let binaryString = n.toString(2)
    return binaryString
}

function findSequency(binaryString) {
    let numArm = 1
    let sequency = 0
    let array0And1 = binaryString.split("")
    let count = 0

    for(let i = 0; i < array0And1.length; i++){             
        if(array0And1[i] == numArm) {                 
            count ++                                                                 
            if(count > sequency)                                    
            sequency = count             
        }                          
        else {                                                               
            count = 0                                                               
        }                
    }                
    return sequency
}

function main() {
    const n = parseInt(readLine(), 10);
    let binaryString = convert(n)
    let result = findSequency(binaryString)
    console.log(Number(result))
}
