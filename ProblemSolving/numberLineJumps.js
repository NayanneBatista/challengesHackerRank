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

function kangaroo(x1, v1, x2, v2) {
       
    if(x1 < x2 && v1 <= v2 || x1 > x2 && v1 > v2)
        return "NO"
    else {
        let i = 1
        let result1 = 0
        let result2 = 0
        do{
          result1 += x1 + (i * v1)
          result2 += x2 + (i * v2)
          i++
        } while (result1 < result2)
        
        if(result1 == result2)
            return "YES"
        else
            return "NO"
    }   
}   


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}