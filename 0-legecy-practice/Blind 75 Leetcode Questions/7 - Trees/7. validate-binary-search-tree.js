/**
 * @article  : https://algo.monster/liteproblems/98
 * @article  : https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
 * @article  : https://takeuforward.org/data-structure/check-if-binary-tree-is-bst/
 * @question : https://leetcode.com/problems/validate-binary-search-tree/
 * @question : https://neetcode.io/problems/valid-binary-search-tree
 */

/*
  ✅ Problem Statement: 

  Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:
  - The left subtree of a node contains only nodes with keys less than the node's key.
  - The right subtree of a node contains only nodes with keys greater than the node's key.
  - Both the left and right subtrees must also be binary search trees.
 
  Example 1:
  Input: root = [2,1,3]
  Output: true

  Example 2:
  Input: root = [5,1,4,null,null,3,6]
  Output: false
  Explanation: The root node's value is 5 but its right child's value is 4.

*/

// # Optimal Solution - 1

/*
  # Step-by-step approach:

  1. The goal is to determine if a given binary tree is a valid Binary Search Tree (BST).

  2. A BST is defined as a binary tree in which for every node, the values of all nodes in its left subtree are less than the node's value,
     and the values of all nodes in its right subtree are greater than the node's value.

  3. The `collectInOrderValues` function performs an in-order traversal of the binary tree:
     - It recursively visits the left subtree, the current node, and then the right subtree.
     - During this traversal, it collects the values of the nodes in an array `values`.
     - In-order traversal of a BST should yield a sorted array of values.

  4. The `isValidBSTSolution1` function:
     - Initializes an empty array `values` to store the in-order traversal values.
     - Calls `collectInOrderValues` to fill the `values` array with the in-order traversal of the tree.
     - Iterates through the `values` array to check if each value is less than the next value.
     - If any value is not less than the next value, it returns `false`, indicating the tree is not a valid BST.
     - If all values are in ascending order, it returns `true`, indicating the tree is a valid BST.

  This approach ensures that the tree satisfies the BST property by leveraging the sorted nature of in-order traversal for BSTs.

*/

/**
 * Helper function to collect the values of a binary tree in in-order traversal.
 * In-order traversal visits nodes in the order: left subtree, root, right subtree.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number[]} values - An array to store the values of the nodes in in-order.
 * @returns {null} - This function does not return a value.
 */
const collectInOrderValues = (root, values) => {
  // Base case: if the current node is null, return.
  if (!root) return null;

  // Recursively traverse the left subtree.
  collectInOrderValues(root.left, values);

  // Add the value of the current node to the values array.
  values.push(root.val);

  // Recursively traverse the right subtree.
  collectInOrderValues(root.right, values);
};

/**
 * Function to validate if a binary tree is a binary search tree (BST).
 * A BST is defined as a binary tree in which for every node, the values in the left subtree are less than the node's value,
 * and the values in the right subtree are greater than the node's value.
 *
 * This function uses in-order traversal to collect the values of the nodes in a sorted array,
 * and then checks if the array is strictly increasing.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {boolean} - Returns true if the binary tree is a valid BST, otherwise false.
 */
const isValidBSTSolution1 = (root) => {
  // Array to store the values of the nodes in in-order traversal.
  const values = [];

  // Collect the values of the nodes in in-order traversal.
  collectInOrderValues(root, values);

  // Check if the values array is strictly increasing.
  for (let i = 0; i < values.length - 1; i++) {
    // If any value is not less than the next value, the tree is not a valid BST.
    if (!(values[i] < values[i + 1])) {
      return false;
    }
  }

  // If all values are in strictly increasing order, the tree is a valid BST.
  return true;
};

// # Optimal Solution - 2

/*
  # Step-by-step approach:

  1. The function `isValidBSTSolution2` is designed to determine if a binary tree is a valid Binary Search Tree (BST).

  2. It uses a helper function `validate` to recursively check each node in the tree.

  3. The `validate` function takes three parameters: 
     - the current node (`root`), the minimum value (`minValue`), and the maximum value (`maxValue`) that the current node's value must be between.

  4. The initial call to `validate` is made with the root of the tree and the range `-Infinity` to `Infinity`, ensuring that the root node can have any value.

  5. Inside `validate`:
     - If the current node is `null`, it means we've reached a leaf node, and the subtree is valid, so it returns `true`.
     - If the current node's value is not within the range defined by `minValue` and `maxValue`, it returns `false`, indicating the tree is not a valid BST.
     - Otherwise, it recursively checks the left and right subtrees:
       - The left subtree must have all values less than the current node's value, so it calls `validate` with the left child, `minValue`, and the current node's value.
       - The right subtree must have all values greater than the current node's value, so it calls `validate` with the right child, the current node's value, and `maxValue`.

  6. The function returns `true` only if both the left and right subtrees are valid BSTs.

  This approach ensures that each node in the tree satisfies the BST property by maintaining and updating the valid range for each node's value as we traverse the tree.
*/

/**
 * Checks if a binary tree is a valid Binary Search Tree (BST).
 * A BST is valid if for every node, all nodes in its left subtree are smaller,
 * and all nodes in its right subtree are larger.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {boolean} - Returns true if the binary tree is a valid BST, otherwise false.
 */
const isValidBSTSolution2 = (root) => {
  // Start the validation process with the entire range of possible values.
  return validate(root, -Infinity, Infinity);
};

/**
 * Recursively validates the binary tree.
 *
 * @param {TreeNode} root - The current node being validated.
 * @param {number} minValue - The minimum value that the current node's value must be greater than.
 * @param {number} maxValue - The maximum value that the current node's value must be less than.
 * @returns {boolean} - Returns true if the subtree rooted at the current node is a valid BST, otherwise false.
 */
const validate = (root, minValue, maxValue) => {
  // An empty tree is a valid BST.
  if (root === null) {
    return true;
  }

  // The current node's value must be within the range defined by minValue and maxValue.
  if (!(root.val > minValue && root.val < maxValue)) {
    return false;
  }

  // Recursively validate the left and right subtrees with updated ranges.
  return (
    validate(root.left, minValue, root.val) && // Left subtree must be less than the current node's value.
    validate(root.right, root.val, maxValue) // Right subtree must be greater than the current node's value.
  );
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
const root1 = root.bind({}, [2, 1, 3]);

// Example 2 Input
const root2 = root.bind({}, [5, 1, 4, null, null, 3, 6]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid BST ? : ", isValidBSTSolution1(root1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid BST ? : ", isValidBSTSolution1(root2()));

// # Time Complexity: O(n)
// The time complexity of `collectInOrderValues` is O(n), where n is the number of nodes in the binary tree,
// because it visits each node exactly once. The time complexity of `isValidBSTSolution1` is also O(n) due to the
// in-order traversal and the subsequent linear scan to check if the array is strictly increasing.
// Therefore, the overall time complexity is O(n).

// # Space Complexity:  O(n)
// The space complexity of `collectInOrderValues` is O(n) due to the recursion stack in the worst case (for a skewed tree)
// and the array `values` that stores the node values. The space complexity of `isValidBSTSolution1` is also O(n) because
// of the array `values`. Therefore, the overall space complexity is O(n).

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid BST ? : ", isValidBSTSolution2(root1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid BST ? : ", isValidBSTSolution2(root2()));

// # Time Complexity:
// The time complexity of the `isValidBSTSolution2` function is O(n), where n is the number of nodes in the binary tree.
// This is because each node is visited exactly once during the recursive traversal.

// # Space Complexity:
// The space complexity is O(h), where h is the height of the binary tree.
// This is due to the recursion stack, which can go as deep as the height of the tree.
// In the worst case (unbalanced tree), the height can be O(n), and in the best case (balanced tree), it can be O(log n).
