/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
*/

//-----------MY SOLUTION--------------//

/*
//----------PREP---------//
//----------Parameters---------//
-Paramaters will be creating a new MyQueue() object
-Parameters will also be calling push, pop, peek, and empty methods on the MyQueue object
-MyQueue.push method will have a push variable of x

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.
What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? 
Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//----------Return---------//
-Our return should have a MyQueue object with the push, pop, peek, and empty methods that are implemented using only stack operations of push to top, peek/pop from top, size, and is empty
-We are basically returning an object with methods


//----------Examples---------//
Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

  
//----------Psuedocode---------//


// var MyQueue = function() {
//     this.stack1 = []
//     this.stack1Size = 0
//     this.stack2 = []
//     this.stack2Size = 0
//     this.front = null
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     if(this.stack1Size === 0 && this.stack2Size === 0) {
//         this.front = x;
//     }
//     if(this.stack1Size > 0) {
//         this.stack1.push(x);
//         this.stack1Size++
//         console.log(this.stack1)
//         return
//     }
    
//     if (this.stack2Size > 0) {
//         this.stack2.push(x)
//         this.stack2Size++;
//         console.log(this.stack2)
//         return
//     }
    
//     this.stack2.push(x)
//     this.stack2Size++;
//     console.log(this.stack2)
//     return
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//      if(this.stack1Size > 0) {
//        while(this.stack1Size > 1) {
//            this.stack2.push(this.stack1.pop());
//            this.stack1Size--
//            this.stack2Size++
//        }
//          console.log(this.stack1)
//          this.stack1Size--
//         return this.stack1.pop()
//     }
    
//     if (this.stack2Size > 0) {
//        while(this.stack2Size > 1) {
//            this.stack1.push(this.stack2.pop());
//            this.stack2Size--
//            this.stack1Size++
//        }
//         let result = this.stack2.pop()
//         this.stack2Size--
//         this.front = this.stack1[this.stack1Size - 1];
        
//         if(this.stack1Size > 0) {
//        while(this.stack1Size > 0) {
//            this.stack2.push(this.stack1.pop());
//            this.stack1Size--
//            this.stack2Size++
//        }
//         }
//         console.log(this.stack2)
       
//         return result
        
//     }
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//    return this.front
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     if(this.stack1Size === 0 && this.stack2Size === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// };

/*----------------SOLUTION REFACTORED----------FASTER RUNTIME----------------*/

var MyQueue = function() {
    this.stack1 = []
    this.stack1Size = 0
    this.stack2 = []
    this.stack2Size = 0
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.stack1Size === 0 && this.stack2Size === 0) {
        this.front = x;
    }
    
    if(this.stack1Size > 0) {
         while(this.stack1Size > 0) {
           this.stack2.push(this.stack1.pop())
           this.stack2Size++
           this.stack1Size--
       }
    }
    
    this.stack2.push(x)
    this.stack2Size++;

    while(this.stack2Size > 0) {
           this.stack1.push(this.stack2.pop());
           this.stack1Size++
           this.stack2Size--
       }
    //console.log(this.stack1)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.stack1Size--
    return this.stack1.pop()

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stack1Size === 0 && this.stack2Size === 0) {
        return true
    }
    else {
        return false
    }
};


 
 var obj = new MyQueue()
 obj.push(1)
 console.log(obj)
 obj.push(2);
 console.log(obj)
 console.log(obj.peek())
 console.log(obj.pop())
 console.log(obj.empty())
 
  
//----------BEST PRACTICES SOLUTION----------//