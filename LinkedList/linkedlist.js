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
 */

 class LinkedListNode {
     constructor(data) {
        this.data = data;
        this.next = null;
     }
 }

 //create the first node
 const head = new LinkedListNode(12);

 //add a second node
 head.next = new LinkedListNode(99);

 //add a third node
 head.next.next = new LinkedListNode(37);
 
 //Print out all the nodes.
 let current = head; //via reference since it is an object. Not a copy. 

 while(current != null) {
    console.log(current.data); 
    current = current.next;
 }
