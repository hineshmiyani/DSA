/**
 * @article  : https://algo.monster/liteproblems/124
 * @article  : https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
 * @article  : https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/
 * @question : https://leetcode.com/problems/binary-tree-maximum-path-sum
 * @question : https://neetcode.io/problems/binary-tree-maximum-path-sum
 */

/*
  ✅ Problem Statement: 

  A `path` in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence `at most once`. Note that the path does not need to pass through the root.

  The `path sum` of a path is the sum of the node's values in the path.

  Given the root of a binary tree, return the maximum `path sum` of any `non-empty` path.

  Example 1:
  Input: root = [1,2,3]
  Output: 6
  Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

  Example 2:
  Input: root = [-10,9,20,null,null,15,7]
  Output: 42
  Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Initialization:
     - Initialize a variable `maxSum` to negative infinity. This will store the maximum path sum found during the traversal.

  2. Depth-First Search (DFS) Function:
     - Define a helper function `dfs` that takes a node as an argument and performs a depth-first search.
     - If the node is `null`, return 0. This handles the base case for leaf nodes.

  3. Recursive Calculation:
     - Recursively call `dfs` on the left and right children of the current node to calculate the maximum path sums for the left and right subtrees.
     - Use `Math.max(0, dfs(node.left))` and `Math.max(0, dfs(node.right))` to ensure that negative path sums are not included. This means if a subtree path sum is negative, it is considered as 0.

  4. Current Node Contribution:
     - Calculate the maximum path sum that passes through the current node by adding the node's value to the maximum path sums of its left and right subtrees.
     - Update `maxSum` if the current path sum is greater than the previously recorded maximum path sum.

  5. Return Value for Parent Calculation:
     - Return the value of the current node plus the maximum of the left or right subtree path sums. This value will be used by the parent node's calculation to determine its maximum path sum.

  6. Start DFS:
     - Call the `dfs` function with the root node to start the traversal.

  7. Result:
     - Return the `maxSum` which now contains the maximum path sum found in the binary tree.

  This approach ensures that we explore all possible paths in the tree and keep track of the maximum path sum encountered during the traversal.

*/

/**
 * Calculates the maximum path sum in a binary tree. The path can start and end at any node in the tree.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} The maximum path sum.
 */
const maxPathSum = (root) => {
  // Initialize the maximum sum to negative infinity to handle trees with all negative values.
  let maxSum = -Infinity;

  // Depth-first search helper function to calculate the maximum path sum.
  const dfs = (node) => {
    // Base case: If the node is null, return 0 as it contributes nothing to the path sum.
    if (node === null) {
      return 0;
    }

    // Recursively calculate the maximum path sum for the left and right subtrees.
    // If the sum is negative, we take 0 instead (ignore the subtree).
    const leftMax = Math.max(0, dfs(node.left));
    const rightMax = Math.max(0, dfs(node.right));

    // Calculate the maximum path sum with the current node as the highest node in the path.
    const currentMax = node.val + leftMax + rightMax;

    // Update the global maximum path sum if the current path sum is greater.
    maxSum = Math.max(maxSum, currentMax);

    // Return the maximum path sum including the current node and one of its subtrees.
    // This value will be used by the parent node's path sum calculation.
    return node.val + Math.max(leftMax, rightMax);
  };

  // Start the depth-first search from the root node.
  dfs(root);

  // Return the global maximum path sum found.
  return maxSum;
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
const root1 = root.bind({}, [1, 2, 3]);

// Example 2 Input
const root2 = root.bind({}, [-10, 9, 20, null, null, 15, 7]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Maximum Path Sum : ", maxPathSum(root1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Maximum Path Sum : ", maxPathSum(root2()));

// # Time Complexity: O(n)
// The function performs a depth-first search, visiting each node exactly once, where n is the number of nodes in the tree.

// # Space Complexity: O(h)
// The space complexity is determined by the recursion stack, which can go as deep as the height of the tree `h`.
// In the worst case, h can be n (for a skewed tree), but on average, it is log(n) for a balanced tree.
