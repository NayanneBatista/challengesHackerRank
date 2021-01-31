process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    
    let numberOfSwaps = 0
    let aux = 0
    
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(a[i] > a[j]){
                aux = a[i]
                a[i] = a[j]
                a[j] = aux
                numberOfSwaps++
            }
        }
    }

    console.log(`Array is sorted in ${numberOfSwaps} swaps. `)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n-1]}`)
}