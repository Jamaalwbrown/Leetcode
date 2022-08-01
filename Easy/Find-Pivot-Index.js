/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/*
//----------PREP---------//
//----------Parameters---------//
-We are given an array of integers called "nums"
1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

//----------Return---------//
-We must return the pivot index. It will be the index in the given array in which all of the values to left of the index is equal to all the values to the right of the index
-If there is no index in which the above condition is true then we return -1

//----------Examples---------//
Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11


Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.


Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
  
//----------Psuedocode---------//
-Check if array length of num is 1. If so return 0.
-Set up an iteration for the num array
-On each iteration sum the elements to the left and to the right of i. 
-Compare the left sum with the right sum and return true or false
    - The above two steps will be done with a helper function called checkforPivot
-if the two sums match then we return i
-if the two sums do not match then we continue the iteration
-if we reach the end of the array with the checkforPivot function not returning true then we return -1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    if(nums.length === 1) {return 0}
    let result = -1;
    
    for (let i=0; i < nums.length; i++) {
        if(checkForPivot(i, nums)) {
            result = i;
            break;
        }
    }
    
    return result;
};



let checkForPivot = function(index, array) {
    let leftSum = 0, rightSum = 0;
    for(let j=0; j < index; j++) {
        leftSum += array[j]
    }
    
    for(let k=(array.length - 1); k > index; k-- ) {
        rightSum += array[k]
    }
    
    if (rightSum === leftSum) {
        return true
    }
    
    else {
        return false
    }
}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));


