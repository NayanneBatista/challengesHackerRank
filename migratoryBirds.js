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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
   
    let bird1 = 0
    let bird2 = 0
    let bird3 = 0
    let bird4 = 0
    let bird5 = 0
    
    if(arr.length >= 5 && arr.length <= 2*(Math.pow(10, 5))){
    
        for(let i = 0; i < arr.length; i++){
        
            switch (arr[i]){
                case 1:
                    bird1 += 1
                    break
                case 2:
                    bird2 += 1
                    break
                case 3:
                    bird3 += 1
                    break
                case 4:
                    bird4 += 1
                    break
                case 5:
                    bird5 += 1
                    break                
            }
        }    
    }

    let typeBirds = [bird1, bird2, bird3, bird4, bird5]
    let maiorFrequencia = 1
    
    for(let i = 0; i < typeBirds.length; i++){
        if(typeBirds[i] > maiorFrequencia){
            maiorFrequencia = typeBirds[i]
        } 
    }

    let tipoMaisFrequente = typeBirds.indexOf(maiorFrequencia) + 1
    return tipoMaisFrequente
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
