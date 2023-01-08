/*
Given an integer x, return true if x is a palindrome, and false otherwise.


Parameters:
Given an integer called x
Will we always be given an integer? Yes
Can we be given a negative integer? Yes

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Returns:
Return a boolean.
Return true if x is a palindrome. False if x is not a palindrome

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Examples:
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.


Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Psuedocode:
Take the number and convert it to a string
Compare the string to a reversed string and check for equality 
Return the result of the conditional 
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strNum = String(x)
    return strNum === strNum.split('').reverse().join('');
};