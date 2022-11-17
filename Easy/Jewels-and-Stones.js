/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.


//Paramters: 
-given two strings, jewels: one representing the types of stones that are jewels, stones: another for the stones we have
-You will always have at least one jewel and stone
-All the characters of jewels are unique
-jewels and stones strings are only English letters, not numbers, not special characters, no funny business

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Returns:
-return a number that represents how many stones in the stones array are also jewels
-If jewels and stones are the same length, that doesn't necessarily mean that the stone you have is a jewel


~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Examples:

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

~~~~~~~~~~~~~~~~~~~~~~~

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

~~~~~~~~~~~~~~~~~~~~~~~
Psuedocode:
-We can iterate through each character of the stones array and check if that char is in jewels array using indexOf
-If it is in the jewels string, increment a count variable
-If its not in the jewels string, do nothing and move to next character in stones array
-At the end we return our total count. 
*/



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0;
    
    for(let i=0; i < stones.length; i++ ) {
        if (jewels.indexOf(stones[i]) !== -1) {
            jewelCount++;
        }
    }

    return jewelCount;
};