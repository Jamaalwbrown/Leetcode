/*
Given the root of a binary tree, invert the tree, and return its root.

Parameters:
Given a binary tree with the below definition. We will be given it's root which will be pointer to the top of the binary treee

* Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 

Returns:
We return the root of the reversed binary tree. The binary tree must be traversed and reversed meaning the left side of the tree must be on the right and right side of the tree must
be on the left


Examples:
Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []


Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

// Runtime: 64 ms, faster than 92.88% of JavaScript online submissions for Invert Binary Tree.
var invertTree = function(root) {
    // Base case...
    if(root == null){
        return root
    }
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    //We swap values here
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root         // Return the root...  
};