/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/



//PREP
//Parameters: An array of numbers. numbers can be negative or positive. Numbers are -10^6 <= nums[i] <= 10^6. Check for if array is empty

//Return: return an array of numbers. this array will be the running sum of the numbers passed into the function. 
//Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

//Examples: 
//runningSum([1,2,3,4])  ------> [1,3,6,10]

//runningSum([1,1,1,1,1]) -----> [1,2,3,4,5]

//runningSum([3,1,2,10,1]) ----> [3,4,6,16,17]
  
//Psuedocode: 
/*
1. Check if the array is empty using .length. If so then return message that passed in array is empty
2. If array is not empty then we iterate through the array using array method map
3. With each call of the map function we access the element, array, and index.
4. We add all the previous elements in the array that we've encountered to the current element
5. After the map function finishes we return the result array 
*/


//My Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  var runningSum = function(nums) {
//     if(nums.length === 0) {
//         return 'Number array is empty'
//     }

//     const resultArray = nums.map((element, index, array) => {
//         let sum = 0;
//         for(let i = 0; i <= index; i++) {
//             sum += array[i];
//             console.log(sum);
//         }
//         return sum;
//     });

//     console.log(nums);
//     console.log(resultArray);
//    // return resultArray;
// };

//Revised Solution (7/24/22)

var runningSum = function(nums) {
    if(nums.length === 0) {
        return 'Number array is empty'
    }

    const resultArray = []
    resultArray.push(nums[0]); //first element of the result array will always just be the first element of the nums array since no sum is needed yet

    //Here we push the result of the addition between the current element in the nums array and the previous sum/element in the result array.
    //Doing it this way reduces our space and complexity. 
    for (let i=1; i < nums.length; i++) {
        resultArray.push(nums[i] + resultArray[i-1])
        console.log(resultArray);
    }
    
};

runningSum([1,2,3,4]);

runningSum([1,1,1,1,1]);

runningSum([3,1,2,10,1])