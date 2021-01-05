function menor(arr){

    let n = arr.length
    let smallestStick = 1000

    if(n >=1 && n <= 1000){
        for(let i = 0; i < n; i++){
            if(arr[i] >= 1 && arr[i] <= 1000){
                if(arr[i] < smallestStick){
                    smallestStick = arr[i]
                }
            }
        }
    }

    return smallestStick
}


function finalArray(arr){
    let m = menor(arr)
    let finalArray =[]
    let n = arr.length

    if(n >=1 && n <= 1000){
        for(let i = 0; i < n; i++){
            finalArray[i] = arr[i] - m    
        }
    }

    return finalArray
}

function vetorSize(arr){
    let size = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            size++ 
        }
    } 
    return size   
}


function cutTheSticks(arr) {
    
    let n = vetorSize(arr)
    let answer = [n]
    let vetorAtual = finalArray(arr)

    do{
        
        n = vetorSize(vetorAtual)
        if(n != 0){
            answer.push(n)   
        }
        vetorAtual = finalArray(vetorAtual)

        console.log(n)
        
    } while (n != 0)

            
    console.log(answer)       
}

cutTheSticks([5, 3, 2])