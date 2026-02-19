import {Tree} from "./BinarySearchTree.js";

// Function to Visualize Binary Search Tree
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


// Function to generate random size of array with random numbers
const randomArrayGenerator = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}



/*----------------------------------------------------------------------------------------------------------------------------*/



// Creation of Binary Search Tree (Visualization using prettyPrint Function)
const randomArray = randomArrayGenerator(10);
const testTree = new Tree(randomArray);
console.log(testTree);
console.log(prettyPrint(testTree.root));


// Confirm that the tree is balanced by calling isBalanced().

console.log(testTree.isBalanced());
console.log(testTree);
console.log(prettyPrint(testTree.root));

// Print out all elements in Level, Pre, Post, and In-Order.

console.log(`Level-Order Traversal: `)
testTree.levelOrderForEach((node) => {
    console.log(node.data);
});


console.log(`Pre-Order Traversal: `)
testTree.preOrderForEach((node) => {
    console.log(node.data);
});


console.log(`Post-Order Traversal: `)
testTree.postOrderForEach((node) => {
    console.log(node.data);
});


console.log(`In-Order Traversal: `)
testTree.inOrderForEach((node) => {
    console.log(node.data);
});


// Unbalance tree by adding several numbers > 100


testTree.insert(161);
testTree.insert(948);
testTree.insert(562);
testTree.insert(435);
testTree.insert(391);
console.log(testTree);
console.log(prettyPrint(testTree.root));


// Confirm that the tree is unbalanced by calling isBalanced().


console.log(testTree.isBalanced());


// Balance the tree by calling rebalance


console.log(testTree.rebalance());
console.log(prettyPrint(testTree.rebalance()));


// Confirm that the tree is balanced by calling isBalanced().


console.log(testTree.isBalanced());


// Print out all elements in Level, Pre, Post & In-Order


console.log(`Level-Order Traversal: `)
testTree.levelOrderForEach((node) => {
    console.log(node.data);
});


console.log(`Pre-Order Traversal: `)
testTree.preOrderForEach((node) => {
    console.log(node.data);
});


console.log(`Post-Order Traversal: `)
testTree.postOrderForEach((node) => {
    console.log(node.data);
});


console.log(`In-Order Traversal: `)
testTree.inOrderForEach((node) => {
    console.log(node.data);
});


/*-----------------------------------------------------------------------------------------------------------------------------*/

