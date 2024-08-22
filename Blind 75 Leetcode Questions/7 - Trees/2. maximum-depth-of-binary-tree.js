/**
 * @article  : https://algo.monster/liteproblems/104
 * @article  : https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/
 * @question : https://leetcode.com/problems/maximum-depth-of-binary-tree
 * @question : https://neetcode.io/problems/depth-of-binary-tree
 */

/*
  ✅ Problem Statement: 

  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Example 1:
      3
     / \
    9   20
       /  \
      15   7
  Input: root = [3,9,20,null,null,15,7]
  Output: 3

  Example 2:
    1
     \
      2
  Input: root = [1,null,2]
  Output: 2

*/

// # Optimal Solution - 1

/*
  # Step-by-step approach:

  1. Base Case: If the root node is null, the tree is empty, and the maximum depth is 0.

  2. Breadth-First Search (BFS):
     - Use a queue to perform a level-order traversal of the tree.
     - Initialize the queue with the root node.
     - Initialize a counter `count` to keep track of the depth of the tree.

  3. Level Traversal:
     - While the queue is not empty, perform the following steps:
       - Determine the number of nodes at the current level (`size`).
       - For each node at the current level:
         - Dequeue the node from the front of the queue.
         - If the node has a left child, enqueue the left child.
         - If the node has a right child, enqueue the right child.
       - After processing all nodes at the current level, increment the depth counter `count`.

  4. Return Result: Once the queue is empty, all levels of the tree have been processed, and the counter `count` will hold the maximum depth of the tree.

  This approach ensures that each level of the tree is processed one at a time, and the depth counter is incremented accordingly, resulting in an accurate calculation of the tree's maximum depth.

*/

/**
 * Calculates the maximum depth of a binary tree using an iterative approach with a queue.
 * This function uses Breadth-First Search (BFS) to traverse the tree level by level.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} - The maximum depth of the binary tree.
 */
const maxDepthSolution1 = (root) => {
  // If the tree is empty, return a depth of 0.
  if (!root) return 0;

  // Initialize a queue to hold nodes at each level.
  const queue = [];
  queue.push(root);

  // Initialize a counter to keep track of the depth.
  let count = 0;

  // Continue processing nodes until the queue is empty.
  while (queue.length > 0) {
    // Get the number of nodes at the current level.
    const size = queue.length;

    // Process each node at the current level.
    for (let i = 0; i < size; i++) {
      // Remove the first node from the queue.
      const node = queue.shift();

      // If the node has a left child, add it to the queue.
      if (node?.left) {
        queue.push(node.left);
      }

      // If the node has a right child, add it to the queue.
      if (node?.right) {
        queue.push(node.right);
      }
    }

    // Increment the depth counter after processing all nodes at the current level.
    count = count + 1;
  }

  // Return the maximum depth of the binary tree.
  return count;
};

// # Optimal Solution - 2

/*
  # Step-by-step approach:

  This approach uses Depth-First Search (DFS) to traverse the tree and calculate the depth.

  1. Base Case: If the `root` node is null, return 0. This indicates that the tree is empty or we have reached a leaf node's child.
  
  2. Recursive Case:
     - Recursively calculate the height of the left subtree by calling `maxDepthSolution2` on `root.left`.
     - Recursively calculate the height of the right subtree by calling `maxDepthSolution2` on `root.right`.
  
  3. Combine Results:
  - The maximum depth of the current node is 1 (for the current node itself) plus the maximum of the heights of the  left and right subtrees.
  
  4. Return the calculated maximum depth.
  
*/

/**
 * Calculates the maximum depth of a binary tree.
 *
 * This function uses a recursive approach to determine the depth of the tree.
 * The depth of a node is the number of edges from the node to the tree's root node.
 * The maximum depth is the longest path from the root node to a leaf node.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} - The maximum depth of the binary tree.
 */
const maxDepthSolution2 = (root) => {
  // Base case: If the tree is empty, the depth is 0.
  if (!root) return 0;

  // Recursively find the height of the left subtree.
  const leftNodeHeight = maxDepthSolution2(root.left);

  // Recursively find the height of the right subtree.
  const rightNodeHeight = maxDepthSolution2(root.right);

  // The depth of the current node is 1 plus the maximum of the depths of its subtrees.
  return 1 + Math.max(leftNodeHeight, rightNodeHeight);
};

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
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
  const values1 = [3, 9, 20, null, null, 15, 7];

  if (values1.length === 0) {
    return null;
  }

  const tree = new BinaryTree();

  for (const value of values1) {
    tree.insert(value);
  }

  return tree.root;
};

// Example 2 Input
const root2 = () => {
  const values2 = [1, null, 2];

  if (values2.length === 0) {
    return null;
  }

  const tree = new BinaryTree();

  for (const value of values2) {
    tree.insert(value);
  }

  return tree.root;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Inverted Tree: ", maxDepthSolution1(root1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Inverted Tree: ", maxDepthSolution1(root2()));

// # Time Complexity: O(n)
// The algorithm processes each node exactly once, where `n` is the number of nodes in the binary tree.

// # Space Complexity: O(n)
// In the worst case, the queue will hold all the nodes at the deepest level, which can be up to `n/2` nodes, leading to O(n) space complexity.

console.log("\n\n ------------Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Inverted Tree: ", maxDepthSolution2(root1()));

console.log("\n ------------- Example 2: ------------- \n");
console.log("Inverted Tree: ", maxDepthSolution2(root2()));

// # Time Complexity: O(n)
// The function visits each node exactly once, where n is the number of nodes in the binary tree.

// # Space Complexity: O(n)
// The space complexity is determined by the height of the tree, h, due to the recursion stack.
// In the worst case (a skewed tree), the height can be n, making the space complexity O(n).
// In the best case (a balanced tree), the height is log(n), making the space complexity O(log(n)).
