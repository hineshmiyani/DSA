/**
 * @article  : https://algo.monster/liteproblems/230
 * @article  : https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/
 * @article  : https://takeuforward.org/data-structure/kth-largest-smallest-element-in-binary-search-tree/
 * @question : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @question : https://neetcode.io/problems/kth-smallest-integer-in-bst
 */

/*
  ✅ Problem Statement: 

  Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 
  Example 1:
  Input: root = [3,1,4,null,2], k = 1
  Output: 1

  Example 2:
  Input: root = [5,3,6,2,4,null,null,1], k = 3
  Output: 3

*/

// # Optimal Solution - 1

/*
  # Step-by-step approach:

  1. In-order Traversal:
     - The in-order traversal of a BST visits nodes in ascending order. This means that if we traverse the tree in-order,
       we can count the nodes as we visit them and find the kth smallest element.

  2. Helper Function:
     - We define a helper function `inOrderTraversal` that performs the in-order traversal.
     - This function takes three parameters: the current node (`root`), the target count (`k`), and an object (`result`)
       that keeps track of the current count and the kth smallest value.

  3. Base Case:
     - If the current node is `null`, we simply return. This is the base case for our recursion.

  4. Recursive Traversal:
     - First, we recursively call `inOrderTraversal` on the left subtree.
     - After returning from the left subtree, we increment the count in the `result` object.
     - If the current count matches `k`, we set the `value` in the `result` object to the current node's value and return.
     - Finally, we recursively call `inOrderTraversal` on the right subtree.

  5. Main Function:
     - The main function `kthSmallestSolution1` initializes the `result` object with `value` as `null` and `count` as `0`.
     - It then calls the `inOrderTraversal` function with the root node, `k`, and the `result` object.
     - Finally, it returns the `value` from the `result` object, which will be the kth smallest element in the BST.

  This approach ensures that we efficiently find the kth smallest element by leveraging the properties of BST and in-order traversal.

*/

/**
 * Finds the k-th smallest element in a Binary Search Tree (BST).
 * This function uses in-order traversal to find the k-th smallest element.
 *
 * @param {TreeNode} root - The root node of the BST.
 * @param {number} k - The k-th position to find the smallest element.
 * @returns {number} - The value of the k-th smallest element in the BST.
 */
const kthSmallestSolution1 = (root, k) => {
  // Initialize an object to store the result value and the current count of nodes visited.
  let result = { value: null, count: 0 };

  // Perform in-order traversal to find the k-th smallest element.
  inOrderTraversal(root, k, result);

  // Return the k-th smallest value found.
  return result.value;
};

/**
 * Performs in-order traversal on the BST to find the k-th smallest element.
 *
 * @param {TreeNode} root - The current node in the BST.
 * @param {number} k - The k-th position to find the smallest element.
 * @param {Object} result - An object to store the current count of nodes visited and the k-th smallest value.
 */
const inOrderTraversal = (root, k, result) => {
  // Base case: if the current node is null, return.
  if (!root) return;

  // Recursively traverse the left subtree.
  inOrderTraversal(root.left, k, result);

  // Increment the count of nodes visited.
  result.count = result.count + 1;

  // If the current count matches k, store the current node's value as the k-th smallest.
  if (k === result.count) {
    result.value = root.val;
    return;
  }

  // Recursively traverse the right subtree.
  inOrderTraversal(root.right, k, result);
};

// # Optimal Solution - 2

/*
  # Step-by-step approach:

  1. Initialize an empty stack to help with the in-order traversal of the BST.

  2. Set the `current` node to the root of the BST.

  3. Initialize a counter `count` to keep track of the number of nodes processed.

  4. Use a while loop to traverse the tree. The loop continues as long as the stack is not empty or the `current` node is not null.
     - Within the loop, use another while loop to traverse the left subtree of the current node:
       - Push the `current` node onto the stack.
       - Move to the left child of the `current` node.
     - Once the leftmost node is reached (i.e., `current` is null), pop the node from the stack and set it as the `current` node.
     - Increment the `count` by 1.
     - If `count` equals `k`, return the value of the `current` node as it is the kth smallest element.
     - Move to the right child of the `current` node to continue the in-order traversal.

  5. If the loop completes without finding the kth smallest element, return null.

  This approach leverages the properties of in-order traversal in a BST, which visits nodes in ascending order.
*/

/**
 * Finds the k-th smallest element in a Binary Search Tree (BST).
 * This function uses an iterative in-order traversal to achieve this.
 *
 * @param {TreeNode} root - The root node of the BST.
 * @param {number} k - The k-th position to find the smallest element.
 * @returns {number|null} - The value of the k-th smallest element, or null if not found.
 */
const kthSmallestSolution2 = (root, k) => {
  // Initialize an empty stack to simulate the recursive in-order traversal.
  const stack = [];

  // Start with the root node.
  let current = root;

  // Counter to keep track of the number of nodes processed.
  let count = 0;

  // Continue the traversal while there are nodes in the stack or the current node is not null.
  while (stack.length > 0 || current) {
    // Traverse the left subtree.
    while (current) {
      // Push the current node onto the stack.
      stack.push(current);
      // Move to the left child.
      current = current.left;
    }

    // Pop the node from the stack and process it.
    current = stack.pop();

    // Increment the count of processed nodes.
    count = count + 1;

    // If the count matches k, return the value of the current node.
    if (count === k) {
      return current.val;
    }

    // Move to the right child to continue the in-order traversal.
    current = current.right;
  }

  // If the k-th smallest element is not found, return null.
  return null;
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

  /**
   * Inserts a value into the binary search tree.
   * @param {number} val - The value to insert.
   * @returns {BinarySearchTree} The binary search tree instance.
   */
  insert(val) {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNodeRecursively(this.root, node);
    }

    return this;
  }

  /**
   * Recursively inserts a node into the tree.
   * @param {Node} root - The root node of the tree.
   * @param {Node} node - The node to insert.
   */
  insertNodeRecursively(root, node) {
    if (node.val === root.val) return undefined;

    if (node.val < root.val) {
      if (root.left) {
        this.insertNodeRecursively(root.left, node);
      } else {
        root.left = node;
      }
    } else if (node.val > root.val) {
      if (root.right) {
        this.insertNodeRecursively(root.right, node);
      } else {
        root.right = node;
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
    if (value !== null) {
      tree.insert(value);
    }
  }

  return tree.root;
};

// Example 1 Input
const root1 = root.bind({}, [3, 1, 4, null, 2]);
const k1 = 1;

// Example 2 Input
const root2 = root.bind({}, [5, 3, 6, 2, 4, null, null, 1]);
const k2 = 3;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Kth smallest element : ", kthSmallestSolution1(root1(), k1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Kth smallest element : ", kthSmallestSolution1(root2(), k2));

// # Time Complexity: O(H)
// The time complexity of this function is O(N), where N is the number of nodes in the BST. This is because in-order traversal visits each node exactly once.

// # Space Complexity: O(H)
// The space complexity is O(H), where H is the height of the BST. This is due to the recursive call stack, which can go as deep as the height of the tree.

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Kth smallest element : ", kthSmallestSolution2(root1(), k1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Kth smallest element : ", kthSmallestSolution2(root2(), k2));

// # Time Complexity: O(N)
// The algorithm performs an in-order traversal of the BST, visiting each node exactly once.

// # Space Complexity: O(H)
// The space complexity is determined by the stack, which stores nodes up to the height of the tree (H).
