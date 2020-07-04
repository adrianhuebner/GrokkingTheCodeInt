const smallestSubarrayGivenSum = function(s, array){
    // handling edge case if there is an empty array
    if(!array.length) return 0;

    // instantiating all the variables needed 
    let right = 0;
    let left = 0;
    // using the global property of Infinity
    let minimumSize = Infinity;
    let currentSum = 0;

    while (right != array.length){
        currentSum += array[right];
        while (currentSum >= s){
            minimumSize = Math.min(minimumSize, right - left + 1);
            currentSum -= array[left];
            left ++;
        }
        right ++;
    }
    return minimumSize;
}