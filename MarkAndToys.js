function compararNumeros(a, b) {
    return a - b;
}

function maximumToys(prices, k) {
    let n = prices.length
    let maximumToys = 0
    let numberPrices = []

    for(let i = 0; i < n; i++){
        numberPrices[i] = Number(prices[i])
    }
    
    let ordenedPrices = numberPrices.sort(compararNumeros)

    if(n >= 1 && n <= Math.pow(10, 5) && k >= 1 && k <= Math.pow(10, 9)){
        for(let i = 0; i < n; i++){
            if(ordenedPrices[i] >= 1 && ordenedPrices[i] <= Math.pow(10, 9)){

                if(k >= ordenedPrices[i]){

                    maximumToys++
                    //console.log("Brinquedos " + maximumToys)
                    
                    k -= prices[i]
                    //console.log("Dinheiro " + k)
                    
                }
            }    
        }
    }

    console.log(maximumToys)
}

maximumToys([12, 84, 51, 6, 7, 8, 13, 8, 9, 3], 150)