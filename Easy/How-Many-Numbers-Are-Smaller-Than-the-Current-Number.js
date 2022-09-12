//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-We are given an array of numbers called nums
-The numbers in the nums array nums[i] range from 0 <= nums[i] <= 100
-The length of the nums array is 0 <= nums[i] <= 100


What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
-We return an array of counts. Each count in the array represents the count of numbers that are smaller than the number in the same position as the count in the passed in array
- 

What do they want me to return? Are they expecting a string? array? object? Is there a certain format the return is expected in? 
Will the expected return ever change for invalid inputs or edge cases?

//----------Examples---------//
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).


Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]


Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]

//----------Psuedocode---------//
Check if the array nums is empty. If so return an empty array (assumption).
Iterate through the array
    For each number we check if all the other numbers in the array are less than the element we are on
    For each element that is less than the element we are on, increment a count variable
    Once we are done checking all the other numbers, we place the count variable on a result array in the same position that we are in, in the passed in array
    If there are no numbers less than our current number then we store 0 in the array

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const resultArr = [];
    for (let i = 0; i < nums.length; i++) {

        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[j] < nums[i]) {
                    count++;
                } 
            }
        }
        resultArr.push(count);
    }

    return resultArr;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));