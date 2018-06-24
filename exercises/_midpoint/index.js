// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    // initialize on pointer which moves twice as fast as the other, such that the faster one will reach the end when the slower when hits the middle of the list
    let slow = list.getFirst();
    let fast = list.getFirst();
    // evaluate for fast.next first and then follow up with check for fast.next.next, since we don't want to call next on null
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        console.log("slow pointer is at " + slow.data);
        console.log("fast pointer is at " + fast.data);
    }
    // we break out of the loop when there are no items left to check; return slow pointer here since it is now sitting on the midpoint (rule: choose left value when list is of even length)
    return slow;
}

module.exports = midpoint;
