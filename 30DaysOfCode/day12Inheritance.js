'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this.scores = scores
    }
    
    calculate(){
        
        let sum = 0
        let size = this.scores.length
        
        for(let i = 0; i < size; i++){
            sum += this.scores[i]
        }

        let average = (sum/size)
        let grade = ""
        
        if(average >= 90) grade = "O"
        else if(average >= 80) grade = "E"  
        else if(average >= 70) grade = "A"
        else if(average >= 55) grade = "P" 
        else if(average >= 40) grade = "D"
        else grade = "T" 
        
        return grade
    }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}