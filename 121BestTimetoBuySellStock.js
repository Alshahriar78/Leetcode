function MaximumProfite(arr){
    let profit = 0;
    let min = arr[0];
    let maxProfit = 0;
    for(let i = 0; i<arr.length ; i++){
       min = Math.min(min,arr[i]);
       profit = arr[i]-min;
       maxProfit = Math.max(maxProfit,profit);
        
    } 
    return maxProfit;
    // let n = arr.length;
    // let res = 0;
    // for (let i = 0; i < n - 1; i++) {
    //     console.log("outer :",i,"res :",res);

    //     for (let j = i + 1; j < n; j++) {
    //         console.log("Arr[",i,"]:", arr[i] );
    //         console.log("Arr[",j,"]:", arr[j] )
            
    //         res = Math.max(res, arr[j] - arr[i]);
    //         console.log(res);
            
    //     }
    // }
    // return res;
}

console.log(MaximumProfite([7,1,5,3,6,4]));