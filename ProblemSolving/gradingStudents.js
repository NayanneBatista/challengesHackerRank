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

function gradingStudents(grades) {
    let difference = 0
    let result = []
    
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 38 ){
            while(grades[i] % 5 != 0){
                grades[i]++ 
                difference++   
            }
            result.push(difference < 3 ? grades[i] : grades[i] - difference) 
            difference = 0 
        } 
        else   
            result.push(grades[i])   
    }   
    return result 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}