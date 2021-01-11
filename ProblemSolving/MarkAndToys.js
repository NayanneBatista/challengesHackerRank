
function maximumToys(prices, k) {
    let n = prices.length
    let maximumToys = 0
    let numberPrices = []
    let gifts = []

    for(let i = 0; i < n; i++){
        numberPrices[i] = Number(prices[i])
    }
    
    let ordenedPrices = numberPrices.sort(function(a, b){ 
        return a - b
    })

    if(n >= 1 && n <= Math.pow(10, 5) && k >= 1 && k <= Math.pow(10, 9)){
        for(let i = 0; i < n; i++){
            if(ordenedPrices[i] >= 1 && ordenedPrices[i] <= Math.pow(10, 9)){
                if(k >= ordenedPrices[i] && gifts.indexOf(ordenedPrices[i]) == -1){
                    
                    maximumToys++
                    k -= ordenedPrices[i]
                    gifts.push(ordenedPrices[i])

                }
            }    
        }
    }

    return maximumToys
}

//99383 806930886
//https://hr-testcases-us-east-1.s3.amazonaws.com/789/input06.txt?AWSAccessKeyId=AKIAR6O7GJNX5DNFO3PV&Expires=1610132614&Signature=8l1N1c5kzWs97WW%2Fw2HOMxGLuic%3D&response-content-type=text%2Fplain
