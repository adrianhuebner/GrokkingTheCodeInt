# Section: Sliding Window

This is the first section of the grokking the coding interview.  
**Sliding Window** is a way to simplify the code that you are writing. A "window" is formed over some of the data, and you use that window to go through the data.

## Problems
----
### Maximum Sum Subarray of Size K

**Problem Domain :** Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'.

**Input and Output :**
```
Input: [2, 1, 5, 1, 3, 2], k = 3
Output: 9

Input: [2, 3, 4, 1, 5], k = 2
Output: 7
```

**Time and Space Complexity:**  
Space Complexity: O(N)
Time Complexity: O(1)

**Whiteboard Image:**  

![MaxSumSubarray](/assets/MaxSumSubarray.jpg)

-----
### Smallest Subarray of a Given Sum

**Problem Domain:** Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0, if no such subarray exists.

**Input and Output:**
```
Input: [2, 1, 5, 2, 3, 2], S = 7  
Output: 2

Input: [2, 1, 5, 2, 8], S = 7  
Output: 1

Input: [3, 4, 1, 1, 6], S = 8  
Output: 3

Input: [1, 1, 2, 3], S = 9  
Output: 0
```

**Time and Space Complexity:**  
Space Complexity:  
Time Complexity:

**Whiteboard Image:**

![SmallestSubarrayGivenSum](/assets/SmallestSubarrayGivenSum.jpg)

----