/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-An array of arrays, called intervals. Each interval has two elements/numbers. This array is sorted in ascending order
-Given another 2 element array called newInterval
-data types on these will be an array of numbers

Constraints:
0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^5
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 10^5


//----------Return---------//
-Return an array of intervals. This array will be the result of inserting the newInterval array into the intervals array. However we must insert it in a way such that if it overlaps any of the pre-existing intervals then it changes which intervals we have for that overlap. If there is an overlap, we define a new interval taking the lowest number from all of the numbers involved in the overlap and the highest number from all the numbers involved in the overlap. We only use numbers explicitly listed in the array, not any numbers that are between numbers listed in the array
-It will still be an array of numbers

What do they want me to return? Are they expecting a string? array? object? Is there a certain format the return is expected in? 
Will the expected return ever change for invalid inputs or edge cases?

//----------Examples---------//
Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]


Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? 
Aim for at least 3 examples.
  
//----------Psuedocode---------//
declare an empty array called combinedInterval that will hold any combined interval we have
declare an empty array called result
Loop through the intervals array
Compare each element/interval array in intervals to the newInterval array
    check if startI of the element interval in intervals array is less than the startI in the newInterval array
    if so then we know the interval in the intervals array starts before the interval in the newInterval array
        So we then check if the endI in the element/interval in the intervals array is greater than the startI in the newInterval array
        if so then we know that we have an overlap between the interval in the intervals array and the newInterval array
            We take startI in the interval in the intervals array and the endI in the newInterval array and create a new interval to account for the overlap
            store the new interval in the result array
        else then we don't have an overlap
            We move onto the next element in the intervals array
    else then we know the interval in the newInterval array starts before the interval in the intervals array
        So we then check if the endI in the newInterval array is greater than startI in the intervals array
        if so then we know that we have an overlap between the the newInterval array and the interval in the intervals array 
            We take startI in the newInterval array and endI in the interval in the intervals array and create a new interval to account for the overlap
        else then we don't have an overlap.
            We move onto the next element in the intervals array


In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? 
Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. 
Good pseudocode only comes with practice.
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let combinedInterval = []
    let noOverlap = []
    let overlap = []
    if (intervals.length === 0) {
        return [newInterval];
    }
    for (let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] < newInterval[0]) {
            if(intervals[i][1] >= newInterval[0]) {
                console.log(`We have an overlap on iteration ${i} with ${intervals[i][0]}`)
                if(combinedInterval.length === 0) {
                  combinedInterval.push(intervals[i][0], Math.max(intervals[i][1], newInterval[1]));  
                }
                else {
                    combinedInterval = [combinedInterval[0], Math.max(intervals[i][1], newInterval[1])]
                }
                overlap.push(i);
                console.log(`combinedInterval is ${combinedInterval}`);
            }
            else {
                console.log(`No overlap on iteration: ${i}`)
                noOverlap.push(i + 1);
            }
        }
        
        if(intervals[i][0] > newInterval[0]) {
            if(newInterval[1] >= intervals[i][0]) {
                console.log(`We have an overlap on iteration ${i}`)
                if(combinedInterval.length === 0) {
                  combinedInterval.push(newInterval[0], Math.max(intervals[i][1], newInterval[1]));  
                }
                else {
                    combinedInterval = [combinedInterval[0], Math.max(intervals[i][1], newInterval[1])]
                }
                overlap.push(i);
                console.log(`combinedInterval is ${combinedInterval}`);
            }
            else {
                console.log(`No overlap on iteration: ${i}`)
                noOverlap.push(i);
            }
        }
        
        if(intervals[i][0] === newInterval[0]) {
            if(newInterval[1] > intervals[i][0]) {
                console.log(`We have an overlap on iteration ${i}`)
                if(combinedInterval.length === 0) {
                  combinedInterval.push(newInterval[0], Math.max(intervals[i][1], newInterval[1]));  
                }
                else {
                    combinedInterval = [combinedInterval[0], Math.max(intervals[i][1], newInterval[1])]
                }
                overlap.push(i);
                console.log(`combinedInterval is ${combinedInterval}`);
            }
            else {
                console.log(`No overlap on iteration: ${i}`)
                noOverlap = i;
            }
        }     
    }
    
    if(overlap.length !== 0) {
        console.log(`We have a overlap that will be returned`)
        intervals.splice(overlap[0], overlap.length, combinedInterval);
        return intervals;
    }
    console.log(noOverlap);
    
    intervals.splice(noOverlap.length - 1, 0, newInterval)
    return intervals;
};