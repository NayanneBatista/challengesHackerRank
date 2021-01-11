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

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    
    // Write your code here
    let maiorVela = 0
    let numVelasMaiores = 0
    
    for(let i = 0; i < candles.length; i++) {
        if(candles.length >= 1 && candles.length <= Math.pow(10, 5) 
        && candles[i] >= 1 && candles[i] <= Math.pow(10, 7)){
                if(candles[i] > maiorVela){
                    maiorVela = candles[i]
                }
        }
    }

    for(let i = 0; i < candles.length; i++){
        if(candles[i] == maiorVela){
            numVelasMaiores += 1
        }
    }
    
    return numVelasMaiores
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
