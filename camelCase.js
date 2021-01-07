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

// Complete the camelcase function below.
function camelcase(s) {
    let n = s.length
    let numPalavras = 1
    
    if(n >= 1 && n <= Math.pow(10, 5)){
        for(let i = 0; i < n; i++){
            if(s.charAt(i) == s.charAt(i).toUpperCase()){
                numPalavras ++
            }
        }
    }
    
    return numPalavras
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = camelcase(s);

    ws.write(result + "\n");

    ws.end();
}
