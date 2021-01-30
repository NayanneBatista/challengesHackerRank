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

function designerPdfViewer(hp, word) {
    
    let obj = {
        a: hp[0],
        b: hp[1],
        c: hp[2],
        d: hp[3],
        e: hp[4],
        f: hp[5],
        g: hp[6],
        h: hp[7],
        i: hp[8],
        j: hp[9],
        k: hp[10],
        l: hp[11],
        m: hp[12],
        n: hp[13],
        o: hp[14],
        p: hp[15],
        q: hp[16],
        r: hp[17],
        s: hp[18],
        t: hp[19],
        u: hp[20],
        v: hp[21],
        w: hp[22],
        x: hp[23],
        y: hp[24],
        z: hp[25]
    }

    let splitWord = word.split("")
    let result = 1
    let maximum = 1
    
    for(let i = 0; i < splitWord.length;i++){
        if(obj[splitWord[i]] > maximum){
            maximum = obj[splitWord[i]]
        }
    }
    
    result = maximum * word.length
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}
