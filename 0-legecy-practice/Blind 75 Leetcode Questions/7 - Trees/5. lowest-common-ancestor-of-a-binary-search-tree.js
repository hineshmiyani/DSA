/**
 * @article  : https://algo.monster/liteproblems/236
 * @article  : https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/
 * @article  : https://takeuforward.org/binary-search-tree/lca-in-binary-search-tree/
 * @question : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @question : https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree
 */

/*
  ✅ Problem Statement: 

  Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

  According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in T that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).”

  Example 1:
  Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
  Output: 6
  Explanation: The LCA of nodes 2 and 8 is 6.

  Example 2:
  Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
  Output: 2
  Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

*/

// # Optimal Solution - 1

/*
  This function finds the lowest common ancestor (LCA) of two nodes in a Binary Search Tree (BST).
  The LCA of two nodes p and q in a BST is defined as the deepest node that has both p and q as descendants.

  # Step-by-step approach:

  1. Start from the root node of the BST.

  2. If the root is null, return null as there is no tree to traverse.

  3. Compare the values of nodes p and q with the value of the current root node:
     - If both p and q have values less than the current root's value, then the LCA must be in the left subtree.
       Recursively call the function with the left child of the current root.
     - If both p and q have values greater than the current root's value, then the LCA must be in the right subtree.
       Recursively call the function with the right child of the current root.
     - If p and q are on different sides of the current root (one is less and the other is greater),
       or if one of them is equal to the current root's value, then the current root is the LCA.

  4. Return the current root as the LCA.

  This approach leverages the properties of a BST where the left subtree contains nodes with values less than the root, and the right subtree contains nodes with values greater than the root. 
  This allows us to efficiently find the LCA by narrowing down the search space in each recursive step.
*/

/**
 * Function to find the lowest common ancestor (LCA) of two nodes in a Binary Search Tree (BST).
 *
 * @param {TreeNode} root - The root node of the BST.
 * @param {TreeNode} p - The first node for which the LCA is to be found.
 * @param {TreeNode} q - The second node for which the LCA is to be found.
 * @returns {TreeNode|null} - The LCA node if both nodes are found, otherwise null.
 */
const lowestCommonAncestorSolution1 = (root, p, q) => {
  // If the root is null, there is no tree to search, return null.
  if (!root) return null;

  // Get the value of the current root node.
  const currentValue = root.val;

  // If both p and q are less than the current node's value,
  // then the LCA must be in the left subtree.
  if (p.val < currentValue && q.val < currentValue) {
    return lowestCommonAncestorSolution1(root.left, p, q);
  }
  // If both p and q are greater than the current node's value,
  // then the LCA must be in the right subtree.
  else if (p.val > currentValue && q.val > currentValue) {
    return lowestCommonAncestorSolution1(root.right, p, q);
  }

  // If neither of the above conditions are true,
  // it means we have found the split point, i.e., the LCA node.
  return root;
};

// # Optimal Solution - 2

/*
  Approach to solve the problem of finding the lowest common ancestor (LCA) of a binary search tree (BST):

  1. Initial Check:
     - If the `root` is null, return null immediately as there is no tree to traverse.

  2. Iterative Traversal:
     - Use a `while` loop to traverse the tree starting from the `root`.
     - At each node, compare the values of `p` and `q` with the current node's value (`currentValue`).

  3. Decision Making:
     - If both `p` and `q` have values less than `currentValue`, it means both nodes are in the left subtree. Move to the left child (`root.left`).
     - If both `p` and `q` have values greater than `currentValue`, it means both nodes are in the right subtree. Move to the right child (`root.right`).
     - If neither of the above conditions is true, it means the current node is the split point where `p` and `q` diverge, making it the LCA.

  4. Return the LCA:
     - Once the loop breaks, the current `root` node is the LCA of nodes `p` and `q`.
     - Return this node as the result.

  This approach leverages the properties of a BST where the left subtree contains nodes with values less than the root, and the right subtree contains nodes with values greater than the root. 
  This allows us to efficiently find the LCA by narrowing down the search space at each step.

*/

/**
 * Function to find the lowest common ancestor (LCA) of two nodes in a Binary Search Tree (BST).
 *
 * @param {TreeNode} root - The root node of the BST.
 * @param {TreeNode} p - The first node for which the LCA is to be found.
 * @param {TreeNode} q - The second node for which the LCA is to be found.
 * @returns {TreeNode|null} - The LCA node or null if the root is null.
 */
const lowestCommonAncestorSolution2 = (root, p, q) => {
  // If the root is null, there is no tree to search, so return null.
  if (!root) return null;

  // Traverse the tree starting from the root.
  while (root) {
    const currentValue = root.val; // Get the value of the current node.

    // If both p and q are smaller than the current node's value,
    // then the LCA must be in the left subtree.
    if (p.val < currentValue && q.val < currentValue) {
      root = root.left;
    }
    // If both p and q are greater than the current node's value,
    // then the LCA must be in the right subtree.
    else if (p.val > currentValue && q.val > currentValue) {
      root = root.right;
    }
    // If p and q are on different sides of the current node,
    // or one of them is equal to the current node, then the current node is the LCA.
    else {
      break;
    }
  }

  // Return the LCA node.
  return root;
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
    tree.insert(value);
  }

  return tree.root;
};

// Example 1 Input
const root1 = root.bind({}, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const p1 = root([2]);
const q1 = root([8]);

// Example 2 Input
const root2 = root.bind({}, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const p2 = root([2]);
const q2 = root([4]);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Lowest Common Ancestor of given nodes is : ",
  lowestCommonAncestorSolution1(root1(), p1, q1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Lowest Common Ancestor of given nodes is : ",
  lowestCommonAncestorSolution1(root2(), p2, q2)
);

// # Time Complexity: O(h)
// The time complexity of this function is O(h), where h is the height of the BST.
// In the worst case, the height of the tree can be O(n) for a skewed tree, and in the best case, it is O(log n) for a balanced tree.

// # Space Complexity: O(h)
// The space complexity is O(h) due to the recursive call stack. Similar to time complexity, in the worst case, it can be O(n) and in the best case, it is O(log n).

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Lowest Common Ancestor of given nodes is : ",
  lowestCommonAncestorSolution2(root1(), p1, q1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Lowest Common Ancestor of given nodes is : ",
  lowestCommonAncestorSolution2(root2(), p2, q2)
);

// # Time Complexity: O(h)
// The function traverses the tree from the root to a leaf node in the worst case, where h is the height of the tree.

// # Space Complexity: O(1)
// The function uses a constant amount of space regardless of the input size, as it only uses a few variables.
