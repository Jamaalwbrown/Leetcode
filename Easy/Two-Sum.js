/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-Given an array of integers called nums
-Given a single integer called target

2 <= nums.length <= 104
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

//----------Return---------//
-We should return two different indices of the array called nums such that the elements of those indices add up to the single integer called target
-We can not use the same element twice

//----------Examples---------//
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
  
//----------Psuedocode---------//
Create loop for the passed in array called nums
-On each iteration we subtract the target integer by the current element in the array indicated by the index. searchNum = Target - nums[i]
-The result called searchNum is what we will search the rest of the array for
-If a match is found then we record the index
-If a match is not found then we go to the next iteration and repeat
-We keep iterating until we find an answer
-Note that everytime we iterate we start the search from the current index (i). This will reduce the size of the array to search which will reduce time complexity
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let searchNum = 0, index1 = 0, index2 = 0;
    for(let i=0; i < nums.length; i++) {
        let searchNum = target - nums[i];

        for (let j=(i+1); j < nums.length; j++) {
            if(searchNum === nums[j]) {
                index1 = i
                index2 = j;
            }
        }
    }

    return [index1, index2];
};

console.log(twoSum([2,7,11,15], 9));

console.log(twoSum([3,2,4], 6));

console.log(twoSum([3, 3], 6));

