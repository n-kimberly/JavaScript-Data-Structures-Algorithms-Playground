// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head; 
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
    }

    removeLast() {
        // if there is none
        if (!this.head) {
            return null;
        }
        // if there is one
        if (!this.head.next) {
            this.head = null;
            return;
        }
        // if there is more than one
        let prev = this.head
        let node = prev.next;
        while(node) {
            if(!node.next) {
                prev.next = null;
                return;
            }
            prev = node;
            node = node.next;
        }
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
        }

        let prev = this.getAt(index-1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
