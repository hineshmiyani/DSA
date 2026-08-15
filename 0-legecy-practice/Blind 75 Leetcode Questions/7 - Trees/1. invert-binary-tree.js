/**
 * @article  : https://algo.monster/liteproblems/226
 * @article  : https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/
 * @question : https://leetcode.com/problems/invert-binary-tree
 * @question : https://neetcode.io/problems/invert-a-binary-tree
 */

/*
  ✅ Problem Statement: 

  Given the root of a binary tree, invert the tree, and return its root.

  Example 1:
      4
     / \
    2   7
   / \ / \
  1  3 6  9
  Input: root = [4,2,7,1,3,6,9]
  Output: [4,7,2,9,6,3,1]

  Example 2:
    2
   / \
  1   3
  Input: root = [2,1,3]
  Output: [2,3,1]

  Example 3:
  Input: root = []
  Output: []
  
*/

// # Optimal Solution - 1

/*
  # Step-by-step approach:

  1. Base Case:
     - If the input `root` is `null`, return `null` immediately. This handles the edge case where the tree is empty.

  2. Initialization:
     - Create an empty queue to facilitate level-order traversal (BFS) of the tree.
     - Push the `root` node into the queue to start the traversal.

  3. Level-Order Traversal:
     - While the queue is not empty, repeat the following steps:
       - Dequeue the front node from the queue.
       - Swap the left and right children of the current node.
       - If the left child of the current node is not `null`, enqueue it.
       - If the right child of the current node is not `null`, enqueue it.

  4. Completion:
     - Once the queue is empty, all nodes have been visited and their children swapped.
     - Return the modified `root` node, which now represents the root of the inverted binary tree.

  This approach ensures that each node is visited once, and the children are swapped in a breadth-first manner.
*/

/**
 * Inverts a binary tree using an iterative approach with a queue.
 *
 * This function takes the root of a binary tree and inverts it, meaning that
 * the left and right children of all nodes are swapped. The inversion is done
 * iteratively using a queue to traverse the tree in a breadth-first manner.
 *
 * @param {TreeNode} root - The root node of the binary tree to invert.
 * @returns {TreeNode} - The root node of the inverted binary tree.
 */
const invertTreeSolution1 = (root) => {
  // If the tree is empty, return null
  if (!root) return null;

  // Initialize a queue and add the root node to it
  const queue = [];
  queue.push(root);

  // Process nodes in the queue until it is empty
  while (queue.length > 0) {
    // Remove the first node from the queue
    const node = queue.shift();

    // Swap the left and right children of the current node
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    // If the left child exists, add it to the queue for further processing
    if (node.left) {
      queue.push(node.left);
    }

    // If the right child exists, add it to the queue for further processing
    if (node.right) {
      queue.push(node.right);
    }
  }

  // Return the root of the inverted tree
  return root;
};

// # Optimal Solution - 2

/*
  # Step-by-step approach:

  1. Base Case: If the `root` is `null`, return `null`. This handles the edge case where the tree is empty.

  2. Recursive Inversion: 
     - Recursively call `invertTreeSolution1` on the left subtree (`root.left`).
     - Recursively call `invertTreeSolution1` on the right subtree (`root.right`).
     This ensures that all subtrees are inverted before the current node's children are swapped.

  3. Swap Children:
     - Store the left child of the current node in a temporary variable `temp`.
     - Assign the right child of the current node to the left child.
     - Assign the temporary variable `temp` (original left child) to the right child.
     This effectively swaps the left and right children of the current node.

  4. Return the `root` node after its children have been swapped.

  This approach uses a depth-first traversal to invert the tree. 
  It ensures that each node's children are swapped after their subtrees have been fully inverted.
*/

/**
 * Function to invert a binary tree.
 * This function takes the root of a binary tree and inverts it, meaning that
 * the left and right children of all nodes are swapped.
 *
 * @param {TreeNode} root - The root node of the binary tree to be inverted.
 * @returns {TreeNode} - The root node of the inverted binary tree.
 */
const invertTreeSolution2 = (root) => {
  // Base case: if the current node is null, return null.
  if (root === null) return null;

  // Recursively invert the left subtree.
  invertTreeSolution1(root.left);

  // Recursively invert the right subtree.
  invertTreeSolution1(root.right);

  // Swap the left and right children of the current node.
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Return the root node of the inverted tree.
  return root;
};

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null ? true : false;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNodeLevelOrder(this.root, node);
    }

    return this;
  }

  insertNodeLevelOrder(root, node) {
    const queue = [];

    queue.push(root);

    while (queue.length) {
      const current = queue.shift();

      if (!current.left) {
        current.left = node;
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = node;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }
}

// Example 1 Input
const root1 = () => {
  const values1 = [4, 2, 7, 1, 3, 6, 9];

  if (values1.length === 0) {
    return null;
  }

  const tree = new BinarySearchTree();

  for (const value of values1) {
    tree.insert(value);
  }

  return tree.root;
};

// Example 2 Input
const root2 = () => {
  const values2 = [2, 1, 3];

  if (values2.length === 0) {
    return null;
  }

  const tree = new BinarySearchTree();

  for (const value of values2) {
    tree.insert(value);
  }

  return tree.root;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Inverted Tree: ",
  JSON.stringify(invertTreeSolution1(root1()), null, 2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Inverted Tree: ",
  JSON.stringify(invertTreeSolution1(root2()), null, 2)
);

// # Time Complexity: O(n)
// - Each node in the binary tree is visited exactly once, where n is the number of nodes in the tree.

// # Space Complexity: O(n)
// - In the worst case, the queue will hold all the nodes at the deepest level of the tree, which can be up to n/2 nodes, resulting in O(n) space complexity.

console.log("\n\n ------------Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Inverted Tree: ",
  JSON.stringify(invertTreeSolution2(root1()), null, 2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Inverted Tree: ",
  JSON.stringify(invertTreeSolution2(root2()), null, 2)
);

// # Time Complexity: O(n)
// - Each node in the binary tree is visited exactly once, where n is the number of nodes in the tree.

// # Space Complexity: O(h)
// - The space complexity is determined by the recursion stack, which can go as deep as the height of the tree (h).
