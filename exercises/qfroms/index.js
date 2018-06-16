// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.sOne = new Stack();
        this.sTwo = new Stack();
    }
    add(record) {
        while(this.sTwo.peek()) {
            this.sOne.push(this.sTwo.pop());
        }
        this.sOne.push(record);
    }
    remove() {
        while(this.sOne.peek()) {
            this.sTwo.push(this.sOne.pop());
        }
        return this.sTwo.pop();
    }
    peek() {
        while(this.sOne.peek()) {
            this.sTwo.push(this.sOne.pop());
        }
        return this.sTwo.peek();
    }
}

module.exports = Queue;
