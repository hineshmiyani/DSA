/**
 * @article  : https://algo.monster/liteproblems/297
 * @article  : https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/
 * @article  : https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/
 * @question : https://leetcode.com/problems/serialize-and-deserialize-binary-tree
 * @question : https://neetcode.io/problems/serialize-and-deserialize-binary-tree
 */

/*
  ✅ Problem Statement: 

  Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

  Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

  Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

  Example 1:
  Input: root = [1,2,3,null,null,4,5]
  Output: [1,2,3,null,null,4,5]

  Example 2:
  Input: root = []
  Output: []

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Serialization:
     - The `serialize` method converts a binary tree into a string representation.
     - It uses a helper function `serializeHelper` to perform a pre-order traversal (root, left, right) of the tree.
     - For each node, it appends the node's value followed by a comma to the `serializedString`.
     - If a node is `null`, it appends a special character `#` followed by a comma to represent a null node.
     - The final string is returned as the serialized representation of the tree.

  2. Deserialization:
     - The `deserialize` method converts the string representation back into a binary tree.
     - It splits the input string by commas to get an array of values.
     - It uses a helper function `deserializeHelper` to reconstruct the tree.
     - The helper function reads values from the array and creates nodes accordingly.
     - If the current value is `#`, it returns `null` indicating a null node.
     - Otherwise, it creates a new `TreeNode` with the current value and recursively constructs its left and right children.
     - The root of the reconstructed tree is returned.

  This approach ensures that the tree structure is preserved during serialization and deserialization.
  The use of pre-order traversal helps in maintaining the order of nodes, and the special character `#` helps in identifying null nodes.
  
*/

class Codec {
  /**
   * Serializes a binary tree to a single string.
   *
   * This function converts a binary tree into a string representation
   * where each node's value is separated by a comma. Null nodes are
   * represented by the character '#'.
   *
   * @param {TreeNode} root - The root node of the binary tree.
   * @return {string} - The serialized string representation of the binary tree.
   */
  serialize(root) {
    // Initialize an empty string to store the serialized tree.
    let serializedString = "";

    // Helper function to perform pre-order traversal of the tree.
    // This function appends the value of each node to the serialized string.
    // If a node is null, it appends '#,' to represent the null node.
    const serializeHelper = (node) => {
      // If the current node is null, append '#,' to the serialized string.
      if (node === null) {
        serializedString = serializedString + "#,";
        return;
      }

      // Append the current node's value followed by a comma.
      serializedString = serializedString + node.val + ",";

      // Recursively serialize the left subtree.
      serializeHelper(node.left);

      // Recursively serialize the right subtree.
      serializeHelper(node.right);
    };

    // Start the serialization process from the root node.
    serializeHelper(root);

    // Return the complete serialized string.
    return serializedString;
  }

  /**
   * Deserializes a string representation of a binary tree into a TreeNode structure.
   * The string is assumed to be a comma-separated list of node values in pre-order traversal.
   * A '#' character represents a null node.
   *
   * @param {string} data - The string representation of the binary tree.
   * @returns {TreeNode|null} - The root node of the deserialized binary tree.
   */
  deserialize(data) {
    // Split the input string by commas to get an array of node values.
    const values = data.split(",");

    // Initialize an index to keep track of the current position in the values array.
    let index = 0;

    // Helper function to recursively build the tree.
    const deserializeHelper = () => {
      // If the current value is '#', it represents a null node.
      if (values[index] === "#") {
        index = index + 1; // Move to the next value in the array.
        return null; // Return null for this node.
      }

      // Create a new TreeNode with the current value.
      const node = new TreeNode(Number(values[index]));
      index = index + 1; // Move to the next value in the array.

      // Recursively build the left and right subtrees.
      node.left = deserializeHelper();
      node.right = deserializeHelper();

      // Return the constructed node.
      return node;
    };

    // Start the deserialization process from the root.
    const root = deserializeHelper();

    // Return the root of the deserialized tree.
    return root;
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
    const node = new TreeNode(val);

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
const root1 = root.bind({}, [1, 2, 3, null, null, 4, 5]);

// Example 2 Input
const root2 = root.bind({}, []);

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");

const tree = new Codec();

const encodedTree1 = tree.serialize(root1());
const decodedTree1 = tree.deserialize(encodedTree1);

console.log("The encoded and decoded trees are: ", {
  encodedTree1,
  decodedTree1,
});

const encodedTree2 = tree.serialize(root2());
const decodedTree2 = tree.deserialize(encodedTree2);

console.log("\n ------------- Example 2: ------------- \n");
console.log("The encoded and decoded trees are: ", {
  encodedTree2,
  decodedTree2,
});

//  # Time Complexity:
//  - serialize: O(n), where n is the number of nodes in the tree. Each node is visited once.
//  - deserialize: O(n), where n is the number of nodes in the tree. Each node is processed once.

//  # Space Complexity:
//  - serialize: O(n), where n is the number of nodes in the tree. The space is used for the output string.
//  - deserialize: O(n), where n is the number of nodes in the tree. The space is used for the recursion stack and the values array.
