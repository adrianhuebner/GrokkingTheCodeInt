const smallestSubarrayGivenSum = function(s, array){
    // handling edge case if there is an empty array
    if(!array.length) return 0;

    // instantiating all the variables needed 
    let left = 0;
    let right = 0;
    // using the global property of Infinity
    let minimumSize = Infinity;
    let currentSum = 0;
}