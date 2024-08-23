/**
 * @article  : https://algo.monster/liteproblems/102
 * @article  : https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/
 * @question : https://leetcode.com/problems/binary-tree-level-order-traversal
 * @question : https://neetcode.io/problems/level-order-traversal-of-binary-tree
 */

/*
  ✅ Problem Statement: 

  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

  Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]

  Example 2:
  Input: root = [1]
  Output: [[1]]

*/

// # Optimal Solution

/*
  This function performs a level-order traversal (also known as breadth-first traversal) on a binary tree.
  The approach involves using a queue to keep track of nodes at each level of the tree.

  # Step-by-step approach:

  1. Check if the root is `null`. If it is, return an empty array as there are no nodes to traverse.
  
  2. Initialize a queue and push the root node into it.

  3. Initialize an empty array `result` to store the result of the level-order traversal.

  4. While the queue is not empty, do the following:
     a. Get the current size of the queue, which represents the number of nodes at the current level.
     b. Initialize an empty array `currentLevelNodes` to store the values of nodes at the same level.
     c. Iterate over the nodes at the current level:
        i.   Dequeue a node from the front of the queue.
        ii.  If the node's value is not null, add it to `currentLevelNodes`.
        iii. If the node has a left child, enqueue the left child.
        iv.  If the node has a right child, enqueue the right child.
     d. After processing all nodes at the current level, add `currentLevelNodes` to `result`.

  5. Return the `result` array, which contains the values of nodes at each level of the tree.
*/

/**
 * Performs a level-order traversal (breadth-first traversal) on a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[][]} - A 2D array where each sub-array contains the values of the nodes at each level of the tree.
 */
const levelOrder = (root) => {
  // If the root is null, return an empty array as there are no levels to traverse.
  if (!root) return [];

  // Initialize a queue to keep track of nodes to visit, starting with the root node.
  const queue = [];
  queue.push(root);

  // Initialize the result array to store the values of nodes at each level.
  const result = [];

  // Continue the traversal until there are no more nodes to visit.
  while (queue.length > 0) {
    // Get the number of nodes at the current level.
    const queueSize = queue.length;

    // Initialize an array to store the values of nodes at the current level.
    const currentLevelNodes = [];

    // Iterate through all nodes at the current level.
    for (let i = 0; i < queueSize; i++) {
      // Remove the first node from the queue.
      const node = queue.shift();

      // If the node's value is not null, add it to the current level's array.
      if (node.val !== null) {
        currentLevelNodes.push(node.val);
      }

      // If the node has a left child, add it to the queue for the next level.
      if (node.left) {
        queue.push(node.left);
      }

      // If the node has a right child, add it to the queue for the next level.
      if (node.right) {
        queue.push(node.right);
      }
    }

    // Add the current level's array to the result array.
    result.push(currentLevelNodes);
  }

  // Return the result array containing the values of nodes at each level.
  return result;
};

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
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

  insert(val) {
    const node = new Node(val);

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

const root = (values) => {
  if (values.length === 0) {
    return null;
  }

  const tree = new BinaryTree();

  for (const value of values) {
    tree.insert(value);
  }

  return tree.root;
};

// Example 1 Input
const root1 = root.bind({}, [3, 9, 20, null, null, 15, 7]);

// Example 2 Input
const root2 = root.bind({}, [1]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Level Order Traversal of Tree : ", levelOrder(root1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Level Order Traversal of Tree : ", levelOrder(root2()));

// # Time Complexity: O(n)
// The algorithm visits each node exactly once, where n is the number of nodes in the binary tree.

// # Space Complexity: O(n)
// The space complexity is determined by the queue, which in the worst case can hold all the nodes at the deepest level.
