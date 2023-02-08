/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Parameters:
-Array of numbers/integers

Returns:
-Return a boolean (true or false)
-True if any value appears more than once /at least twice in the array
-False if every element is distinct

Examples
Example 1:

Input: nums = [1,2,3,1]
Output: true


Example 2:

Input: nums = [1,2,3,4]
Output: false


Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Psuedocode
-First we create an object/hashmap to record our data
-We iterate through the array of numbers.
-We check each number against our hashmap. If the number is not in there then we add it to our hashmap/object as a property with the value of true
-If the number is already in our hashmap then we know that there is a duplicate in the array of numbers given to us
-At that point we return true from the function
-If we iterate through the whole array without seeing a num already in our hashmap then we conclude that the array only has distinct numbers and return false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap = {}
    for(let i = 0; i < nums.length; i++)
    {
      let num = nums[i]
      if(numsMap[num]) {
        return true
      }
      else {
        numsMap[num] = true
      }
    }
  return false
};


console.log(containsDuplicate([1,2,3,1]),'true')
// console.log(containsDuplicate([1,2,3,4]),'false')
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]),'true')