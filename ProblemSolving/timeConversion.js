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

function timeConversion(s) {
    let result = ""
    let hour = ""
    let final = ""
    let newString = ""

    if(s.includes('PM')){
        
        newString = s.replace("PM", "")
        result = newString.split(":")

        if(result[0] == '12'){
            final = result.toString().replace(/,/g, ":")
        } else {
            hour = (Number(result[0]) + 12).toString()
            final = hour.concat(`:${result[1]}:${result[2]}`)
        }
    }else {
        newString = s.replace("AM", "")
        result = newString.split(":")

        if(result[0] == '12'){
            hour = '00'
            final = hour.concat(`:${result[1]}:${result[2]}`)
        } else {
            final = result.toString().replace(/,/g, ":")
        } 
    }
    return final
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}