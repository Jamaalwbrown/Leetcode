/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
We are give a string s which will be a phrase/sentence.
string s may contain non-alphanumeric characters, be empty, or contain ONLY non-alphanumeric characters 

What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
We must return the result of testing if paramater s is a valid palindrome
Return value will be a boolean type of true or false
If string s is empty or only full of non-alphanumeric characters, then we know it is a vaild palindrome immediately and can return true

//----------Examples---------//
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.


Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.


Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
  
//----------Psuedocode---------//


In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? 
Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. 
Good pseudocode only comes with practice.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //This tests for the edge case of if the string s is empty
    if(s.length === 0) {
        return true
    }

    //Creates string and array of alphaNumeric characters for comparison
    let alphaNumericString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let alphaNumericArray = alphaNumericString.split('');

    //Here we filter the array for only alphanumeric characters
    const filteredArr = s.split('').filter(element => {
        let flag = 0;
        for (let i = 0; i < alphaNumericArray.length; i++) {
            if (element === alphaNumericArray[i]) {
                flag = 1;
            }
        }

        if (flag) {
            return true
        }
        else {
            return false
        }
    });

    //This tests for the edge case of if s was only full of nonalphanumeric characters
    if(filteredArr.length === 0) {
        return true
    }

    //Create a reversedArr to test for the palindrome by comparing to our original filteredArr
    const reversedArr = []
    for (let i = filteredArr.length - 1; i >= 0; i--) {
        reversedArr.push(filteredArr[i]);
    }

    console.log(filteredArr.join(''))
    console.log(reversedArr.join(''));

    if (filteredArr.join('').toLowerCase() == reversedArr.join('').toLowerCase()) {
        return 'We have a valid palindrome';
    }
    else {
        return 'We do not have a valid palindrome'
    }
};

console.log(isPalindrome(''));
console.log(isPalindrome(',:"^$#@'));
console.log(isPalindrome('How old are you?'));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));