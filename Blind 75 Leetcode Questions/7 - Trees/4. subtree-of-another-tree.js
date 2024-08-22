/**
 * @article  : https://algo.monster/liteproblems/572
 * @article  : https://takeuforward.org/data-structure/subtree-of-another-tree/
 * @question : https://leetcode.com/problems/subtree-of-another-tree
 * @question : https://neetcode.io/problems/subtree-of-a-binary-tree
 */

/*
  ✅ Problem Statement: 

  Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.
  
  A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

  Example 1:
  Input: root = [3,4,5,1,2], subRoot = [4,1,2]
  Output: true


  Example 2:
  Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
  Output: false

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  The problem is to determine if one tree (`subRoot`) is a subtree of another tree (`root`).

  1. Base Cases:
     - If `subRoot` is `null`, it is considered a subtree of any tree, so return `true`.
     - If `root` is `null` but `subRoot` is not `null`, then `subRoot` cannot be a subtree, so return `false`.

  2. Check for Subtree:
     - Use a helper function `isSameTree` to check if the current `root` and `subRoot` are identical.
     - If `isSameTree` returns `true`, then `subRoot` is a subtree of `root`, so return `true`.

  3. Recursive Check:
     - Recursively check the left and right subtrees of `root` to see if `subRoot` is a subtree of either.
     - Return `true` if either recursive call returns `true`.

  The `isSameTree` function checks if two trees are identical:

  1. Base Cases:
     - If both `root` and `subRoot` are `null`, they are identical, so return `true`.
     - If one is `null` and the other is not, they are not identical, so return `false`.

  2. Check Node Values:
     - Compare the values of the current nodes of `root` and `subRoot`.
     - Recursively check the left and right subtrees to ensure they are also identical.

  This approach ensures that we check all possible subtrees of `root` to see if any of them match `subRoot`.
*/

/**
 * Determines if `subRoot` is a subtree of `root`.
 *
 * @param {TreeNode} root - The root node of the main tree.
 * @param {TreeNode} subRoot - The root node of the subtree to check.
 * @returns {boolean} - Returns true if `subRoot` is a subtree of `root`, otherwise false.
 */
const isSubtree = (root, subRoot) => {
  // If subRoot is null, it is considered a subtree of any tree.
  if (subRoot === null) {
    return true;
  }

  // If root is null but subRoot is not, subRoot cannot be a subtree.
  if (root === null) {
    return false;
  }

  // If the trees rooted at root and subRoot are identical, subRoot is a subtree.
  if (isSameTree(root, subRoot)) {
    return true;
  }

  // Recursively check if subRoot is a subtree of either the left or right subtree of root.
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Checks if two trees are identical.
 *
 * @param {TreeNode} root - The root node of the first tree.
 * @param {TreeNode} subRoot - The root node of the second tree.
 * @returns {boolean} - Returns true if the trees are identical, otherwise false.
 */
const isSameTree = (root, subRoot) => {
  // If both nodes are null, the trees are identical.
  if (root === null && subRoot === null) {
    return true;
  }

  // If one node is null and the other is not, the trees are not identical.
  if (root === null || subRoot === null) {
    return false;
  }

  // Check if the current nodes have the same value and recursively check their left and right subtrees.
  return (
    root.value === subRoot.value && // Compare the values of the current nodes
    isSameTree(root.left, subRoot.left) && // Recursively check the left subtrees
    isSameTree(root.right, subRoot.right) // Recursively check the right subtrees
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
const root1 = root.bind({}, [3, 4, 5, 1, 2]);
const subRoot1 = root.bind({}, [4, 1, 2]);

// Example 2 Input
const root2 = root.bind({}, [3, 4, 5, 1, 2, null, null, null, null, 0]);
const subRoot2 = root.bind({}, [4, 1, 2]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Is the subtree of another tree? : ",
  isSubtree(root1(), subRoot1())
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Is the subtree of another tree? : ",
  isSubtree(root2(), subRoot2())
);

// # Time Complexity:  O(m * n)
// The time complexity of `isSubtree` is O(m * n), where `m` is the number of nodes in the `root` tree and `n` is the number of nodes in the `subRoot` tree.
// This is because for each node in the `root` tree, we potentially compare it with all nodes in the `subRoot` tree using `isSameTree`.

// # Space Complexity:  O(h)
// The space complexity is O(h), where `h` is the height of the `root` tree.
// This is due to the recursion stack used in the `isSubtree` function, which can go as deep as the height of the `root` tree.
