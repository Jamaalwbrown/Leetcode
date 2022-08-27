/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
We are give an array of strings called "operations"
1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".


//----------Return---------//
We must return the final value of X after all of the operations in the "operations" array. It will be in the form of a number
Number we return can be negative, 0, or positive


//----------Examples---------//

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.


Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.


Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.

  
//----------Psuedocode---------//
We will loop through the array operation by operation.
For each operation we read the operation. Depending on what operation it is, we do that operation on the Variable X. We then move to the next operation

*/

/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let x = 0;
    if(operations.length === 0) {return x}

    for(let i=0; i < operations.length; i++) {
        if(operations[i] === '++X' || operations[i] === 'X++') {
            x++;
        }

        if(operations[i] === '--X' || operations[i] === 'X--') {
            x--;
        }
    }
    return x;
};

console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));