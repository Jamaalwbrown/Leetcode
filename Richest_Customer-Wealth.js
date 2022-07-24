/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

//PREP
//Parameters: 
We are given a 2 dimensional array called "accounts". The length of the 2-d array in both directions will be no greater than 50 entries.
//The money stored in any one account accounts[i][j] is between 1 and 100 dollars(assuming currency)

//Return: 
//We will need to return to return the wealth (money) that the richest customer has. So we need to return the greatest number of accounts[i][j]

//Examples: 
Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.


Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.


Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
  
//Psuedocode:
Go through each element in the i dimension of the array.
For each element in the i dimension, sum all the elements in the j dimension. Store the result in another array.
When done with each element in the i dimension we will have an array of sums
We simply return the greatest one
*/

//My Solution
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    const sumsArray = accounts.map((innerArray, index, outerArray) => {
        return innerArray.reduce((p, c) => p + c, 0);
    })
    
    sumsArray.sort((a, b) => b - a);
    return sumsArray[0];
};

accounts1 = [[1,2,3],[3,2,1]]
maximumWealth(accounts1);

accounts2 = [[1,5],[7,3],[3,5]]
maximumWealth([[1,5], [7,3], [3,5]]);

accounts3 = [[2,8,7],[7,1,3],[1,9,5]]
maximumWealth([[2,8,7], [7,1,3], [1,9,5]]);
