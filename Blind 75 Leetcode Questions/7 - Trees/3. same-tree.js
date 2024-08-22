/**
 * @article  : https://algo.monster/liteproblems/100
 * @article  : https://takeuforward.org/data-structure/check-if-two-trees-are-identical/
 * @question : https://leetcode.com/problems/same-tree/
 * @question : https://neetcode.io/problems/same-binary-tree
 */

/*
  ✅ Problem Statement: 

  Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.
  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

  Example 1:
  Input: p = [1,2,3], q = [1,2,3]
  Output: true

  Example 2:
  Input: p = [1,2], q = [1,null,2]
  Output: false

*/

// # Optimal Solution - 1

/*
  # Step-by-step approach:

  This function checks if two binary trees are the same.
  The approach used here is Breadth-First Search (BFS) using two queues.

  1. Initialize two queues, `queue1` and `queue2`, and push the root nodes of both trees into them.

  2. Enter a loop that continues as long as both queues are not empty.

  3. Dequeue the front nodes from both queues and compare them:
     - If both nodes are `null`, continue to the next iteration.
     - If one node is `null` and the other is not, return `false` as the trees are not the same.
     - If the values of the nodes are different, return `false`.

  4. If the nodes are the same, enqueue their left and right children to their respective queues.

  5. After the loop, check if both queues are empty. If they are, return `true` indicating the trees are the same. If not, return `false`.

  This approach ensures that both trees are traversed level by level and compared node by node.
*/

/**
 * Function to determine if two binary trees are the same.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * @param {TreeNode} p - The root node of the first binary tree.
 * @param {TreeNode} q - The root node of the second binary tree.
 * @returns {boolean} - Returns true if the two trees are the same, otherwise false.
 */
const isSameTreeSolution1 = (p, q) => {
  // Initialize two queues to perform a breadth-first search (BFS) on both trees.
  const queue1 = [];
  const queue2 = [];

  // Start by adding the root nodes of both trees to their respective queues.
  queue1.push(p);
  queue2.push(q);

  // Continue the BFS until either queue is empty.
  while (queue1.length > 0 && queue2.length > 0) {
    // Dequeue the front nodes from both queues.
    const node1 = queue1.shift();
    const node2 = queue2.shift();

    // If both nodes are null, continue to the next iteration.
    if (node1 === null && node2 === null) {
      continue;
    }

    // If one of the nodes is null and the other is not, the trees are not the same.
    if (node1 === null || node2 === null) {
      return false;
    }

    // If the values of the nodes are different, the trees are not the same.
    if (node1.value !== node2.value) {
      return false;
    }

    // Enqueue the left and right children of both nodes for further comparison.
    queue1.push(node1.left);
    queue1.push(node1.right);

    queue2.push(node2.left);
    queue2.push(node2.right);
  }

  // If both queues are empty, the trees are the same. Otherwise, they are not.
  return queue1.length === 0 && queue2.length === 0;
};

// # Optimal Solution - 2

/*
  # Step-by-step approach:

  This approach uses Depth-First Search (DFS) to traverse both trees simultaneously and compare their structure and values.

  1. Base Case: If both trees `p` and `q` are null, they are considered the same, so return true.

  2. If one of the trees is null and the other is not, they are not the same, so return false.

  3. If both trees are non-null, compare their root values:
     - If the root values are equal, recursively check the left subtrees and the right subtrees.
     - If the root values are not equal, return false.

  4. The function returns true only if the root values are equal and both the left and right subtrees are the same.
*/

/**
 * Checks if two binary trees are the same.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * @param {TreeNode} p - The root node of the first binary tree.
 * @param {TreeNode} q - The root node of the second binary tree.
 * @returns {boolean} - Returns true if the two binary trees are the same, otherwise false.
 */
const isSameTreeSolution2 = (p, q) => {
  // If both nodes are null, the trees are identical up to this point
  if (p === null && q === null) {
    return true;
  }

  // If one of the nodes is null and the other is not, the trees are not identical
  if (p === null || q === null) {
    return false;
  }

  // Check if the current nodes have the same value and recursively check the left and right subtrees
  return (
    p.value === q.value && // Compare the values of the current nodes
    isSameTreeSolution2(p.left, q.left) && // Recursively check the left subtrees
    isSameTreeSolution2(p.right, q.right) // Recursively check the right subtrees
  );
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
const p1 = root.bind({}, [1, 2, 3]);
const q1 = root.bind({}, [1, 2, 3]);

// Example 2 Input
const p2 = root.bind({}, [1, 2]);
const q2 = root.bind({}, [1, null, 2]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Are the binary trees same? : ", isSameTreeSolution1(p1(), q1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Are the binary trees same? : ", isSameTreeSolution1(p2(), q2()));

// # Time Complexity: O(n)
// The algorithm performs a breadth-first search (BFS) on both trees simultaneously. Each node is processed once, leading to a linear time complexity relative to the number of nodes in the trees.

// # Space Complexity: O(n)
// The space complexity is determined by the maximum size of the queues, which in the worst case can hold all the nodes of the tree. Therefore, the space complexity is linear relative to the number of nodes in the trees.

console.log("\n\n ------------Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Are the binary trees same? : ", isSameTreeSolution2(p1(), q1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Are the binary trees same? : ", isSameTreeSolution2(p2(), q2()));

// # Time Complexity: O(n)
// The function visits each node exactly once, where n is the number of nodes in the smaller of the two trees.

// # Space Complexity: O(h)
// The space complexity is determined by the depth of the recursion stack, which is O(h) where h is the height of the tree.
