const maxSubArrayOfSizeK = function(k, array){
    let maxSum = 0;
    let currentSum = 0;
    let startingPoint = 0;

    for(let endingPoint = 0; endingPoint < array.length; endingPoint++){
        currentSum += array[endingPoint];
        if(endingPoint >= k - 1){
            maxSum = Math.max(maxSum, currentSum);
            currentSum -= array[startingPoint];
            startingPoint ++;
        }
        return maxSum;
    }
}

