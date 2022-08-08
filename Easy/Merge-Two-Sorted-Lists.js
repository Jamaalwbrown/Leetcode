/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

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
Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? 
Aim for at least 3 examples.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


Example 2:

Input: list1 = [], list2 = []
Output: []


Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

//----------Psuedocode---------//
In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? 
Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. 
Good pseudocode only comes with practice.
*/