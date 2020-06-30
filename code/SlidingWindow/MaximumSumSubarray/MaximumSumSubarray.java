package code.SlidingWindow.MaximumSumSubarray;

public class MaximumSumSubarray {
    public static int findMaxSumArrayOfSizeK(int k, int[] array){
        int maxSum = 0;
        int currentSum = 0;
        int startingPoint = 0;

        for(int endingPoint = 0; endingPoint < array.length; endingPoint ++){
            currentSum += array[endingPoint];
            if(endingPoint >= k - 1){
               maxSum = Math.max(currentSum, maxSum);
               currentSum -= array[startingPoint];
               startingPoint++; 
            }
        }
        return maxSum;
    }
}