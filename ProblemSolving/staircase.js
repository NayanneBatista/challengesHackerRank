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

// Complete the staircase function below.
function staircase(n) {
    
    let spaces = " "
    let hastags = ""
    
    for(let i = n; i > 0; i--){
        spaces = spaces.repeat(i - 1)
        hastags += "#"
        console.log(spaces.concat(hastags))
        spaces = " "
    }
    
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
