/**
 * @article  : https://algo.monster/liteproblems/105
 * @article  : https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/
 * @article  : https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/
 * @question : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 * @question : https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal
 */

/*
  ✅ Problem Statement: 

  Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

  Example 1:
  Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  Output: [3,9,20,null,null,15,7]

  Example 2:
  Input: preorder = [-1], inorder = [-1]
  Output: [-1]

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// # Brute-force Solution

/*
  # Step-by-step approach:

  1. Define a recursive function `buildTreeSolution1` that takes `preorder` and `inorder` arrays as input.
  2. Check if either `preorder` or `inorder` arrays are empty, return null as the tree cannot be constructed.
  3. Create a new `TreeNode` instance with the value of the first element in the `preorder` array as the root.
  4. Find the index of the root value in the `inorder` array to determine the left and right subtrees.
  5. Recursively call `buildTreeSolution1` for the left subtree by passing:
     - `preorder` slice from index 1 to `rootIndex + 1`
     - `inorder` slice from index 0 to `rootIndex`
  6. Recursively call `buildTreeSolution1` for the right subtree by passing:
     - `preorder` slice from index `rootIndex + 1` to the end
     - `inorder` slice from index `rootIndex + 1` to the end
  7. Assign the left and right subtrees to the `root.left` and `root.right` respectively.
  8. Return the constructed binary tree rooted at `root`.
*/

/**
 * Constructs a binary tree from preorder and inorder traversal arrays.
 * @param {number[]} preorder - The preorder traversal array.
 * @param {number[]} inorder - The inorder traversal array.
 * @returns {TreeNode} - The root node of the constructed binary tree.
 */
const buildTreeSolution1 = (preorder, inorder) => {
  // Base case: if either array is empty, return null
  if (preorder.length === 0 || inorder.length === 0) return null;

  // Create a new TreeNode with the value of the first element in preorder array
  const root = new TreeNode(preorder[0]);

  // Find the index of the root value in the inorder array
  const rootIndex = inorder.indexOf(root.val);

  // Recursively build the left subtree using slices of preorder and inorder arrays
  root.left = buildTreeSolution1(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );

  // Recursively build the right subtree using slices of preorder and inorder arrays
  root.right = buildTreeSolution1(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  // Return the root of the constructed binary tree
  return root;
};

// # Optimal Solution

/*
  # Step-by-step approach:

  This approach uses a recursive algorithm to build a binary tree based on the preorder and inorder traversal sequences of the tree nodes.

  1. Create a function `buildTreeSolution2` that takes `preorder` and `inorder` arrays as input.

  2. Initialize an empty `inorderMap` using the `Map` interface to store the index of each element in the `inorder` array.

  3. Populate the `inorderMap` by iterating over the `inorder` array and setting the key as the element and the value as its index.

  4. Call the `buildSubTree` function with the necessary parameters to build the binary tree.

  5. In the `buildSubTree` function:
     - Check if the `preStart` is greater than `preEnd` or `inStart` is greater than `inEnd`, return null.
     - Create a new `TreeNode` with the value at index `preStart` of the `preorder` array as the root.
     - Find the index of the root value in the `inorderMap`.
     - Calculate the size of the left subtree by subtracting `inStart` from the root index.
     - Recursively build the left subtree by calling `buildSubTree` with updated parameters.
     - Recursively build the right subtree by calling `buildSubTree` with updated parameters.
     - Assign the left and right subtrees to the root node.
     - Return the root node.

  6. The `buildTreeSolution2` function returns the root of the binary tree constructed using preorder and inorder traversal arrays.
*/

/**
 * Builds a binary tree using preorder and inorder traversal arrays.
 * @param {Array} preorder - The preorder traversal array.
 * @param {Array} inorder - The inorder traversal array.
 * @returns {TreeNode} The root of the binary tree.
 */
const buildTreeSolution2 = (preorder, inorder) => {
  // Create a Map to store the index of each element in the inorder array
  const inorderMap = new Map();

  // Populate the inorderMap with elements and their indices
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  // Call the recursive function to build the binary tree
  return buildSubTree(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    inorderMap
  );
};

/**
 * Recursive function to build the subtree of the binary tree.
 * @param {Array} preorder - The preorder traversal array.
 * @param {number} preStart - The starting index of the preorder array.
 * @param {number} preEnd - The ending index of the preorder array.
 * @param {Array} inorder - The inorder traversal array.
 * @param {number} inStart - The starting index of the inorder array.
 * @param {number} inEnd - The ending index of the inorder array.
 * @param {Map} inorderMap - A Map containing elements and their indices from the inorder array.
 * @returns {TreeNode} The root of the subtree.
 */
const buildSubTree = (
  preorder,
  preStart,
  preEnd,
  inorder,
  inStart,
  inEnd,
  inorderMap
) => {
  // Base case: if either of the traversal arrays is empty, return null
  if (preStart > preEnd || inStart > inEnd) return null;

  // Create a new TreeNode with the value from the preorder array
  const root = new TreeNode(preorder[preStart]);

  // Find the index of the root value in the inorder array
  const rootIndex = inorderMap.get(root.val);

  // Calculate the size of the left subtree
  const leftSubTreeSize = rootIndex - inStart;

  // Recursively build the left subtree
  root.left = buildSubTree(
    preorder,
    preStart + 1,
    preStart + leftSubTreeSize,
    inorder,
    inStart,
    rootIndex - 1,
    inorderMap
  );

  // Recursively build the right subtree
  root.right = buildSubTree(
    preorder,
    preStart + leftSubTreeSize + 1,
    preEnd,
    inorder,
    rootIndex + 1,
    inEnd,
    inorderMap
  );

  // Return the root of the subtree
  return root;
};

// Example 1 Input
const preorder1 = [3, 9, 20, 15, 7];
const inorder1 = [9, 3, 15, 20, 7];

// Example 2 Input
const preorder2 = [-1];
const inorder2 = [-1];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Constructed Tree : ",
  JSON.stringify(buildTreeSolution1(preorder1, inorder1), null, 2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Constructed Tree : ",
  JSON.stringify(buildTreeSolution1(preorder2, inorder2), null, 2)
);

// # Time Complexity : O(n^2)
// The time complexity of buildTreeSolution1 function is O(n^2) in the worst case scenario, where 'n' is the number of nodes in the binary tree.
// This is because for each node, we potentially search for its index in the inorder array which takes O(n) time, and this search is done for each node.

// # Space Complexity : O(n)
// The space complexity of buildTreeSolution1 function is O(n) in the worst case scenario, where 'n' is the number of nodes in the binary tree.
// This is because the function uses recursive calls that consume memory on the call stack proportional to the height of the binary tree, which can be O(n) in the worst case for a skewed tree.

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Constructed Tree : ",
  JSON.stringify(buildTreeSolution2(preorder1, inorder1), null, 2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Constructed Tree : ",
  JSON.stringify(buildTreeSolution2(preorder2, inorder2), null, 2)
);

// # Time Complexity : O(n)
// - The time complexity of building the inorderMap in the `buildTreeSolution2` function is O(n), where n is the number of elements in the inorder array.
// - The time complexity of building the binary tree in the `buildSubTree` function is O(n), where n is the number of elements in the tree.
//   - Each node in the tree is visited exactly once.
//   - At each node, the algorithm performs constant time operations.
// - Therefore, the overall time complexity of the `buildTreeSolution2` function is O(n) + O(n) = O(n), where n is the number of elements in the inorder array.

// # Space Complexity : O(n)
// - The space complexity of the `buildTreeSolution2` function is O(n), where n is the number of elements in the inorder array.
//   - This is due to the space used by the inorderMap to store the indices of elements.
// - The space complexity of the `buildSubTree` function is O(n), where n is the height of the binary tree.
//   - This is because the recursive calls consume space on the call stack proportional to the height of the tree.
// - Therefore, the overall space complexity of the `buildTreeSolution2` function is O(n) + O(n) = O(n), where n is the number of elements in the inorder array.
