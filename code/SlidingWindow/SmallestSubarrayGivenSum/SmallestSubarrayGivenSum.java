package code.SlidingWindow.SmallestSubarrayGivenSum;

public class SmallestSubarrayGivenSum {
    public int smallSubArrayLength(int s, int[] array){
        int minimumLength = Integer.MAX_VALUE;
        int right = 0;
        int currentSum = 0;

        if(array.length == 0) return 0;

        // did js with while and java with for loop to change it up
        
        for(int left = 0; left < array.length; left++){
            currentSum += array[left];
            while(currentSum >= s){
                minimumLength = Math.min(minimumLength, left - right + 1);
                currentSum -= array[left];
                left++;
            }
        }
        return minimumLength;
    }
}