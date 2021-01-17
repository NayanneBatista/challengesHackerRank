'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getDayName(dateString) {
    let dayName = new Date(dateString)
   
        switch(dayName.getDay()) {
          case 0: 
            dayName = "Sunday"
            break
          case 1: 
            dayName = "Monday"
            break
          case 2: 
            dayName = "Tuesday"
            break
          case 3: 
            dayName = "Wednesday"
            break
          case 4: 
            dayName = "Thursday"
            break
          case 5: 
            dayName = "Friday"
            break
          case 6: 
            dayName = "Saturday" 
         
    }
    
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}