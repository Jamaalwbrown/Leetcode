/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

//-----------MY SOLUTION--------------//

/*
PREP
//----------Parameters---------//
I am given a number n. 

//----------Return---------//

I need to return an array of strings. 
"FizzBuzz" if n is divisible by 3 and 5.
"Fizz" if n is divisible by 3.
"Buzz" if n is divisible by 5.
n (as a string) if none of the above conditions are true.

//----------Examples---------//

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]


Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]


Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

  
//----------Psuedocode---------//
Declare an empty result array
Take the input integer and create a loop with the same number of iterations as that integer
For each iteration i, we will check i for divisibility of 3 and 5

First we check for divisibilty by both 3 and 5 by doing the following calculation. Input number (n % 3 === 0 & n % 5 === 0)
If that passes then we push "FizzBuzz" onto the array

If the FizzBuzz test fails then we check for divisibility with just (n % 3 === 0)
If that passes then we push "Fizz" onto the array

If the Fizz test fails then we check for divisibility with just (n % 5 === 0)
If that passes then we push "Buzz" onto the array

If all of the tests fail then we will just push the iteration number i onto the array

Let the for loop run to completion and then we return the resultArray;

*/

/**
 * @param {number} n
 * @return {string[]}
 */
//  var fizzBuzz = function(n) {
//     const resultArray = []
    
//     for (let i = 1; i <= n; i++) {

//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             resultArray.push('FizzBuzz')
//         }
//         else if (i % 3 === 0) {
//             resultArray.push('Fizz')
//         }
//         else if (i % 5 === 0) {
//             resultArray.push('Buzz')
//         }
//         else {
//             resultArray.push(String(i));
//         }
//     }

//     console.log(resultArray);
// };

// fizzBuzz(3);

// fizzBuzz(5);

// fizzBuzz(15);


//-----------------Another Solution-----------------//
//This solution is more adapatable to handle addition of conditions to check

var fizzBuzz = function(n) {
    const resultArray = []
    
    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = (i % 3 === 0);
        let divisibleBy5 = (i % 5 === 0);

        let currStr = "";

        if (divisibleBy3) {
            currStr += 'Fizz';
        }

        if (divisibleBy5) {
            currStr += 'Buzz';
        }

        if (currStr.length === 0) {
            currStr += String(i)
        }

        resultArray.push(currStr);
    }

    console.log(resultArray);
};

fizzBuzz(3);

fizzBuzz(5);

fizzBuzz(15);