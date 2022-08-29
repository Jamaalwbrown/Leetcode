/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/


//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
- The IP address. Type is a string
- The given address is a valid IPv4 address
- A valid IP address will have . in the middle


What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
-Defanged version of that IP address. Type of string


//----------Examples---------//
Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"


Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"


Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? 
Aim for at least 3 examples.
  
//----------Psuedocode---------//
-Split the string up by the '.'
-Join the string back together with the '[.]'

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]');
};