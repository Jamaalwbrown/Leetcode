/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order
*/


//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-We are given a string s. s will have just brackets (, ), {, }, [, and ]
-1 <= s.length <= 104
-s consists of parentheses only '()[]{}'.

//----------Return---------//
-We return a boolean: true or false.
-We return true if the input string s is valid, meaning:
    -Open brackets must be closed by the same type of brackets
    -Open brackets must be closed in the correct order.
-We will return false otherwise

//----------Examples---------//
Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? 
Aim for at least 3 examples.

Example 1:

Input: s = "()"
Output: true


Example 2:

Input: s = "()[]{}"
Output: true


Example 3:

Input: s = "(]"
Output: false
  
//----------Psuedocode---------//
-First we check if the length of s is odd. If so we already know we have an invalid string because we must have an even number of charcters for there to be a matching opening and closing bracket
-We will need to iterate through the string character by character
-For each character that is an opening bracket we take its value and store it on a stack we declare
-When we get to a closing bracket, we pop the previous value on the stack and check if it matches.
    --if there is no match then we have an invalid string and we return false
    --if there is a matching opening tag then we keep going
-popping the value before comparing will essentially allow us to work backwards through any opening tags we already encountered while moving forward through the string to compare more end brackets


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 !== 0) {
        return false
    }

    let tempStack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(tempStack);
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            tempStack.push(s[i]);
        }

        if(s[i] === ')') {
            if(tempStack.pop() !== '(') {
                console.log(false);
                return false
            }
        }

        if(s[i] === ']') {
            if(tempStack.pop() !== '[') {
                console.log(false);
                return false
            }
        }

        if(s[i] === '}') {
            if(tempStack.pop() !== '{') {
                console.log(false);
                return false
            }
        } 
    }
    console.log(tempStack.length != 0 ? false: true);
    return tempStack.length != 0 ? false: true
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("{[]}");


