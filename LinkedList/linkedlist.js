/**
 * What is a linked list?
 * This is a single linked list
 * - node1->node2->node3->node4->null
 * 
 * This is a doubly linked list
 * null<->node1<->node2<->node3<->node4<->null
 * 
 * What is the benefit of using a linked list?
 * - It's benefits were mainly used to save memory by having an object handle an arbitrary number of values. 
 * - Nowadays we use linkedlists when we do not know how many items we would need to store. 
 * 
 * Where to add new elements on a single linkedlist?
 * - You add new nodes at the end of the list. 
 */

 /**
  * VERSION 1
  */

//  class LinkedListNode {
//      constructor(data) {
//         this.data = data;
//         this.next = null;
//      }
//  }

//  //create the first node
//  const head = new LinkedListNode(12);

//  //add a second node
//  head.next = new LinkedListNode(99);

//  //add a third node
//  head.next.next = new LinkedListNode(37);
 
//  //Print out all the nodes.
//  let current = head; //via reference since it is an object. Not a copy. 

//  while(current != null) {
//     console.log(current.data); 
//     current = current.next;
//  }

 /**
  * VERSION 2
  */
 class LinkedListNode {
     constructor(data) {
        this.data = data;
        this.next = null;
     }
 }
const head = Symbol("head");
const tail = Symbol("tail");

class LinkedList {
    constructor() {
        this[head] = null;
        this[tail] = this[head];
        this.length = 0;
    }

    #getNode = (index) => {
        //Ensure index is a positive value.
        if(index > -1) {
            //Pointer used for traversal.
            let current = this[head];

            //Set our traversal index.
            let i  = 0;
            while(current != null && i < index) {
                current = current.next;
                i++;
            }

            return current !== null ? current:undefined;
        } else {
            return undefined;
        }
    }

    //O(n) has to navigate through all the nodes. 
    addHead(data) {
        //create a new node
        const newNode = new LinkedListNode(data);

        //special case: no items in the list yet. 
        if(this[head] === null) {
            // just set the head to the new node
            this[head] = newNode;
            this[tail] = this[head];
        } else {
            //start by looking at the first node. 
            let current = this[head];

            //Loop through the nodes until you reach null. 
            while(current.next != null) {
                current = current.next;
            }

            //Add new node. 
            current.next = newNode;

            //Update tail node.
            this[tail] = newNode;
        }

        //Increment Node length.
        this.length++;
    }

    //O(1) insert at the end of the list. 
    addTail(data) {

        //create new node.
        const newNode = new LinkedListNode(data);

        //Special Case: no nodes. 
        if(this[tail] === null) {
            this[head] = newNode
            this[tail] = this[head];
        } else {
            this[tail].next = newNode;
            this[tail] = newNode;
        }

        //Increment Node length.
        this.length++;
    }

    get(index) {
        return this.#getNode(index).data;
    }

    remove(index) {
        
        //List is empty or Index is less than 0 or Index is greater than all length 
        if(this[head] === null || index < 0 || index >= this.length) { 
            return undefined;
        } else if(index === 0) { //Removing the head. 
            //update the head. 
            let removeNode = this[head]; //Store a reference to the node we are about to delete. 
            this[head] = this[head].next; //update head to be the second node's value.

            return removeNode.data;
        } else if(index === this.length - 1) { //Removing the tail. 
            const removeNode = this[tail]; //Store a reference to the tail node. 
            this[tail] = this.#getNode(index - 1); //update the tail to be the previous node.
            this[tail].next = null; //update the tail's next node. 

            //Delete remove node.
            return removeNode.data;

        } else {
            const removeNode = this.#getNode(index);
            const prevNode = this.#getNode(index - 1);

            prevNode.next = removeNode.next; //update prevNode new next node. 
            
            //Delete Remove Node.
            removeNode.next = null;
            return removeNode.data;
        }
    }

    *values() {
        let current = this[head];
        while(current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    print() {
        let current = this[head];
        while(current != null) {
            console.log(current);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.addTail("red");
list.addTail("orange");
list.addTail("yellow");

for(const color of list) {
    console.log(color);
}



