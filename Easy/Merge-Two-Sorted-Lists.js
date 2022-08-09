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

-We are given the heads of two sorted linkeds lists. list1 and list2.
-If either of these heads are null then the list is empty. We need to account for this possibility
-We will be able to move through each of the lists by accesssing the next property of the head node.

//----------Return---------//
We merge and sort the two provided linked lists and then return the head of the singular list. 
We will be returning the head node object of the list
-If both lists are empty, meaning that the head nodes are null, then return an empty node
-If one list is empty, meaning its head node is null, then return the head of the other list


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

-First we check if we have some empty linked lists by checking if the provided heads are equal to null.
-If both heads are null, then return an empty node/one of the lists.
-If only one head is null, return the head of the other list with values in it
-declare another list called mergedList. declare a temporary node pointer called tempNode and set it equal to the first node of mergedList
-Set up a loop that runs as long as both list1 and list2 are not null.
-On each iteration of the loop we check if the data in the current node in list1 is less than the data in the current node in list2
--if true then we assign tempNode.next to the current node in list1. Then we assign list1 to the next node in list1's list
--if false then we assign tempNode.next to the current node in list2. Then we assign list1 to the next node in list2's list
-We then assign tempNode to tempNode.next which will store our node in our merged list
*/


 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (!list1) {return list2}
    if (!list2) {return list1}
    if (!list1 && !list2) {return list1}

    //Here we create a new linked list called mergedList. There is only one node in the list right now (Our head Node)
    const mergedList = new ListNode()

    //tempNode declared and set to point at our mergedList. It's role is to build out the mergedList as we go through list1 and list2 and pull elements from them into our mergedList
    let tempNode = mergedList; 

    //Run while loop that terminates if either of the lists are empty
    while(list1 && list2) {

        //If the data in the current node of list 1 is less than the data in the current node of list 2, then have tempNode's next node pointer point to the current node of list 1. We don't want to orphan the current node of list 1
        //We then move to list1's next node
        if(list1.val < list2.val) {
            tempNode.next = list1;
            list1 = list1.next;
        }

        //If the above condition isn't satisfied, then either list 1's current node's data is greater than list 2's current node's data OR they are equal. In any case we will set tempNode's next pointer to list 2 and move list 2 to its next Node
        else {
            tempNode.next = list2;
            list2 = list2.next;
        }

        //At the end of this iteration of the loop we store the new node obtained by our conditional above, in our mergedList. (Remember that tempNode move's through the linked list but mergedList will point to the head of the linked list)
        tempNode = tempNode.next;
    }

    //To cover the edge case of any nodes left in the lists that arent empty, we have tempNode's next pointer point to either a list with nodes left in it or it will point to Null
    tempNode.next = list1 || list2;

    return mergedList.next;
};


