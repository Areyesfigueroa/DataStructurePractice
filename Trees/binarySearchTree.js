/**
 * What is a tree?
 * A tree is a non-linear data structure. 
 * 
 * What is a Binary Search Tree?
 * A tree in which nodes which have lesser value are stored left while nodes with higher value are on the right.
 */

 class Node {
     constructor(data) {
         this.data = data;
         this.left = null;
         this.right = null;
     }
 }

 class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //function to be implemented
    insert(data) {
    let newNode = new Node(data);

    if(this.root === null) {
        this.root = newNode;
    } else {
        //traverse the tree.
        this.#insertNode(newNode, this.root);
    }
    }

    #insertNode = (newNode, node) => {
        if(newNode.data < node.data) {
        if(node.left === null) {
            //Insert on left side
            node.left = newNode;
        } else {
            //Traverse Left Node
            this.#insertNode(newNode, node.left);
        }

        } else {
        //going right
        if(node.right === null) {
            //Insert on the right side. 
            node.right = newNode;
        } else {
            //Traverse Right Node
            this.#insertNode(newNode, node.right);
        }
        }
    }

    remove(data) {
    //Re-initialize the root. 
    this.root = this.#removeNode(data, this.root);
    }

    #removeNode = (data, node) => {
    if(node === null) {
        return null;
    } else if(data < node.data) {
        //Go left
        node.left = this.#removeNode(data, node.left);
        return node;
    } else if(data > node.data) {
        //Go right
        node.right = this.#removeNode(data, node.right);
        return node;
    } else {
        //We have a match, delete the node. 
        //No Children
        if(node.left === null && node.right === null) {
            node = null;
            return null;
        }

        //deleting node with one children
        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
    }

    }

    //Helper Function
    print() {
        this.#printNode(this.root);
    }

    #printNode = (node) => {
    if(node === null) {
        return;
    }

    //Process right child first
    this.#printNode(node.left);

    //Log Data
    console.log(node.data);

    //Process left child
    this.#printNode(node.right);
    }
    
    findMinNode(node) {
        //Search for a node with the minimum value.
        if(node.left === null) {
            return node;
        } else {
            //Go left
            return this.findMinNode(node.left);
        }
    }
    
    getRootNode() {
    return this.root;
    }

    search(data) {
        return this.#searchNode(data, this.root);
    }

    #searchNode = (data, node) => {
        if(node === null) {
            return null;
        } else if(data < node.data) {
            return this.#searchNode(data, node.left);
        } else if (data > node.data) {
            return this.#searchNode(data, node.right);
        } else if(data === node.data) {
            return node;
        }
    }

 }

 const bst = new BinarySearchTree();

 bst.insert(10);
 bst.insert(5);
 bst.insert(11);
 bst.insert(2);
 bst.insert(15);
 bst.insert(13);
 bst.insert(6);
 bst.insert(7);

 //console.log(bst.search(1));
 //console.log(bst.findMinNode(bst.getRootNode()));
 //bst.remove(7);
 bst.print();