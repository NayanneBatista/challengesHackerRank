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

function findShortest(arr){
    let shortest = 1001

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < shortest)  
            shortest = arr[i]   
    }          

    return shortest
}

function subtractedArray(array, shortest){
    let result = []

    for(let i = 0; i < array.length; i++){
        result.push(array[i] - shortest) 
    } 

    return result
}

function withoutZerosArray(arr){
   return arr.filter((value) => value != 0)
}

function cutTheSticks(arr) {
    
    let length = 0
    let result = [arr.length]

    do{

        let menor = findShortest(arr)
        arr = subtractedArray(arr, menor)
        arr = withoutZerosArray(arr)
        length = arr.length
        if(length != 0)
            result.push(length)

    }while(length != 0)
    
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

