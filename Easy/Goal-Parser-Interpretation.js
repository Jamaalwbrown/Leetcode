/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Parameters:
We are given a string with multiple string commands as described below
String will have "G", "()", or "(al)"
"G" interpreted as "G", "()" interpreted as "o", "(al)" interpreted as "al"
Can string have characters other than those?, Can the string be an empty string?, Do the case of "G" or "al" matter?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Returns:
We return the interpreted string commands based on the rules given
Returns will be in the form a of a string
What should we return if an empty string is given, What should we return if we are given characters other than the three commands listed?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Examples:
Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".


Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"


Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Constraints:

1 <= command.length <= 100
command consists of "G", "()", and/or "(al)" in some order.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Psudeocode:

If string is empty, we return an empty string
Assuming case matters, we shouldn't mess with the case of the string passed into our function
We loop through the string starting from the end of the string
We pop each character off of the string and check if it matches any of the commands
If there is a match then we copy the interpretation into a new array
If there isn't a match then we keep going (we need to store the value we just read in order to complete the command)
Once the command is complete then we store the interpretation in a new array
We reverse the array and join it to make one string of our interpreted command
*/

// /**
//  * @param {string} command
//  * @return {string}
//  */
 var interpret = function(command) {

    //~~~~~~~~~~~First Solution~~~~~~~~~~~~~~~~~//
    // let tempArr = [];
    // let resultArr = [];
    // for(let i = 0; i < command.length;  i++) {
    //     tempArr.push(command[i]);
        
    //     if (tempArr.includes('G')) {
    //         tempArr.splice(0, 1)
    //         resultArr.push('G');
    //     }

    //     if (tempArr.join('').includes('(al)')) {
    //         tempArr.splice(0, 4)
    //         resultArr.push('al');
    //     }

    //     if (tempArr.join('').includes('()')) {
    //         tempArr.splice(0, 2)
    //         resultArr.push('o');
    //     }
    // }


    //~~~~~~~~~~~~~~~~~~Second Solution, Slower but less space usage~~~~~~~~~~~~~~~//
    // return command.replaceAll('()', 'o').replaceAll('(al)', 'al')


    //~~~~~~~~~~~~~~~~~~Third Solution, Faster Solution~~~~~~~~~~~~~~~//
    return command.split('()').join('o').split('(al)').join('al');
};

console.log(interpret("G()(al)"), "Goal");
console.log(interpret("G()()()()(al)"), "Gooooal")
console.log(interpret("(al)G(al)()()G"), "alGalooG")
