/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
We are given an array of sentences. The sentences are strings.
1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and ' ' only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.

Some edge cases will be to handle the empty input

//----------Return---------//
Return a number (integer). This number represents the highest number of words in a sentence encountered in the sentences array
If the array is empty we return 0


//----------Examples---------//
Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.


Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? 
Aim for at least 3 examples.
  
//----------Psuedocode---------//
Look at each sentence in the array and count how many words are in them. If the total amount of words in a sentence exceeds the max we already have replace it.

In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? 
Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. 
Good pseudocode only comes with practice.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    if (sentences.length === 0) {
        return 0
    }

    let max = 0, sentenceLength = 0;
    for(let i = 0; i < sentences.length; i++) {
        sentenceLength = sentences[i].split(' ').length
        console.log(sentenceLength)
        if (sentenceLength > max) {
            max = sentenceLength;
        } 
    }

    console.log(max);
};

mostWordsFound(["please wait", "continue to fight", "continue to win"]);
