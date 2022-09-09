//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
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
In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? 
Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. 
Good pseudocode only comes with practice.
*/