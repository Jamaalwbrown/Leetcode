/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/


//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-We are given an array of strings called strs
-1 <= strs.length <= 200
-0 <= strs[i].length <= 200
-strs[i] consists of only lowercase English letters.
What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
-Need to return the longest common prefix string that is in each string in the string array. Return value will be string
-If there is no common prefix then we return an empty string. ""
-One edge case to check for is if there is a common prefix but its not the longest common prefix
-Another edge case if we find the longest prefix but it is not a part of all of the strings

//----------Examples---------//
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Example 3:

Input: strs = []
Output: ""
Explanation: There is no common prefix among the input strings. The input was an empty array

Example 4:

Input: strs = ["dog"]
Output: ""
Explanation: There is no common prefix among the input strings. Not enough strings provided in the input array
  
//----------Psuedocode---------//
-Check if the array length is less than 2. If so return ""
-Start iterating through the array
-On each iteration we compare the current index and the next index and see how many characters match.
-Once we get a substring of characters that match (our prefix), we set that to our prefix for the rest of the iteration.
-Continue iterating over the rest of the words in the array
-On each word we check if the prefix exists in the word. If not then we reduce the prefix until we get a match. If the prefix is reduced all the way to an empty string then the prefix doesn't exist in every word.
-We return the result at the end of the function

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return "";
    }

    if(strs.length < 2) {
        console.log(strs[0])
        return strs[0]
    }

    console.log(strs);
    const firstWord = strs[0]
    const secondWord = strs[1]
    let prefix = ""
    // let prefixIndex = null;

    prefix = findPrefix(firstWord, secondWord, prefix);
    if (strs.length === 2) {
        return prefix;
    }

    for (let j = 2; j < strs.length; j++) {
        while(strs[j].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            console.log(prefix);
        }
    }

    console.log('Prefix is:' + prefix);
    return prefix;
    
};

function findPrefix(word1, word2, checkedPrefix = "") {
    const firstLength = word1.length
    const secondLength = word2.length
    const shortestLength = (firstLength > secondLength) ? firstLength : secondLength 

    for (let i = 0; i < shortestLength; i++) {
        if(word1[i] === word2[i]) {
            checkedPrefix += word1[i]
        }
        else {
            // prefixIndex = (i - 1)
            break;
        }
    }

    return checkedPrefix;
};

// longestCommonPrefix(["dog","racecar","car"]);
// longestCommonPrefix(["flower","flow","flight"]);
// longestCommonPrefix([]);
// longestCommonPrefix(["dog"]);