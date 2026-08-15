/**
 * Represents a node in a binary search tree.
 */
class Node {
  /**
   * Creates a new node.
   * @param {number} value - The value of the node.
   * @param {Node|null} left - The left child node.
   * @param {Node|null} right - The right child node.
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * Represents a binary search tree.
 */
class BinarySearchTree {
  /**
   * Creates a new binary search tree.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Checks if the tree is empty.
   * @returns {boolean} True if the tree is empty, false otherwise.
   */
  isEmpty() {
    return this.root === null ? true : false;
  }

  /**
   * Inserts a value into the binary search tree.
   * @param {number} value - The value to insert.
   * @returns {BinarySearchTree} The binary search tree instance.
   */
  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNodeRecursively(this.root, node);
      // this.insertNodeIteratively(this.root, node); // Alternative iterative method
    }

    return this;
  }

  /**
   * Recursively inserts a node into the tree.
   * @param {Node} root - The root node of the tree.
   * @param {Node} node - The node to insert.
   */
  insertNodeRecursively(root, node) {
    if (node.value === root.value) return undefined;

    if (node.value < root.value) {
      if (root.left) {
        this.insertNodeRecursively(root.left, node);
      } else {
        root.left = node;
      }
    } else if (node.value > root.value) {
      if (root.right) {
        this.insertNodeRecursively(root.right, node);
      } else {
        root.right = node;
      }
    }
  }

  /**
   * Iteratively inserts a node into the tree.
   * @param {Node} root - The root node of the tree.
   * @param {Node} node - The node to insert.
   */
  insertNodeIteratively(root, node) {
    let current = root;

    while (true) {
      if (node.value === current.value) return undefined;

      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (node.value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /**
   * Searches for a value in the binary search tree.
   * @param {number} value - The value to search for.
   * @returns {Node|null} The found node or null if not found.
   */
  search(value) {
    if (this.isEmpty()) {
      return false;
    }

    const targetNode = new Node(value);

    const foundNode = this.searchRecursively(this.root, targetNode);

    return foundNode;
  }

  /**
   * Recursively searches for a node in the tree.
   * @param {Node} root - The root node of the tree.
   * @param {Node} targetNode - The node to search for.
   * @returns {Node|null} The found node or null if not found.
   */
  searchRecursively(root, targetNode) {
    if (targetNode.value === root.value) {
      return root;
    }

    if (targetNode.value < root.value) {
      if (root.left === null) {
        return null;
      } else {
        return this.searchRecursively(root.left, targetNode);
      }
    } else if (targetNode.value > root.value) {
      if (root.right === null) {
        return null;
      } else {
        return this.searchRecursively(root.right, targetNode);
      }
    }
  }

  /**
   * Performs a breadth-first search (BFS) on the tree.
   * @returns {number[]} An array of node values in BFS order.
   */
  BFS() {
    const queue = [];
    const data = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();
      data.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return data;
  }

  /**
   * Performs a depth-first search (DFS) in pre-order on the tree.
   * @returns {number[]} An array of node values in pre-order.
   */
  DFSPreOrder() {
    const data = [];

    let current = this.root;

    this.traversePreOrder(current, data);

    return data;
  }

  /**
   * Helper method to traverse the tree in pre-order.
   * @param {Node} node - The current node.
   * @param {number[]} data - The array to store node values.
   */
  traversePreOrder(node, data) {
    if (node) {
      data.push(node.value);

      if (node.left) {
        this.traversePreOrder(node.left, data);
      }

      if (node.right) {
        this.traversePreOrder(node.right, data);
      }
    }
  }

  /**
   * Performs a depth-first search (DFS) in in-order on the tree.
   * @returns {number[]} An array of node values in in-order.
   */
  DFSInOrder() {
    const data = [];

    let current = this.root;

    this.traverseInOrder(current, data);

    return data;
  }

  /**
   * Helper method to traverse the tree in in-order.
   * @param {Node} node - The current node.
   * @param {number[]} data - The array to store node values.
   */
  traverseInOrder(node, data) {
    if (node) {
      if (node.left) {
        this.traverseInOrder(node.left, data);
      }

      data.push(node.value);

      if (node.right) {
        this.traverseInOrder(node.right, data);
      }
    }
  }

  /**
   * Performs a depth-first search (DFS) in post-order on the tree.
   * @returns {number[]} An array of node values in post-order.
   */
  DFSPostOrder() {
    const data = [];

    let current = this.root;

    this.traversePostOrder(current, data);

    return data;
  }

  /**
   * Helper method to traverse the tree in post-order.
   * @param {Node} node - The current node.
   * @param {number[]} data - The array to store node values.
   */
  traversePostOrder(node, data) {
    if (node) {
      if (node.left) {
        this.traversePostOrder(node.left, data);
      }

      if (node.right) {
        this.traversePostOrder(node.right, data);
      }

      data.push(node.value);
    }
  }

  /**
   * Finds the minimum value in the tree.
   * @param {Node} [root=this.root] - The root node to start the search from.
   * @returns {number} The minimum value in the tree.
   */
  minimumValue(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minimumValue(root.left);
    }
  }

  /**
   * Finds the maximum value in the tree.
   * @param {Node} [root=this.root] - The root node to start the search from.
   * @returns {number} The maximum value in the tree.
   */
  maximumValue(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maximumValue(root.right);
    }
  }

  /**
   * Deletes a node with the given value from the tree.
   * @param {number} value - The value of the node to delete.
   */
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  /**
   * Recursively deletes a node from the tree.
   * @param {Node} root - The root node of the tree.
   * @param {number} value - The value of the node to delete.
   * @returns {Node|null} The new root node of the tree.
   */
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node has no children
      if (!root.left && !root.right) {
        return null;
      }

      // Node has one child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // Node has two children
      root.value = this.minimumValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

// Example usage of the BinarySearchTree class
let tree = new BinarySearchTree();
// tree.root = new Node(15);
// tree.root.right = new Node(20);
// tree.root.left = new Node(10);
// tree.root.left.left = new Node(7);

tree.insert(15);
tree.insert(20);
tree.insert(10);
tree.insert(7);
tree.insert(12);
tree.insert(25);
tree.insert(17);

console.log("------------------- Tree -------------------");
console.log(JSON.stringify(tree, null, 2));

console.log("Found node: ", tree.search(20));

console.log("Breadth First Search : ", tree.BFS());

console.log("Depth First Search - PreOrder : ", tree.DFSPreOrder());
console.log("Depth First Search - InOrder : ", tree.DFSInOrder());
console.log("Depth First Search - PostOrder : ", tree.DFSPostOrder());

console.log("Minimum value is : ", tree.minimumValue(tree.root));
console.log("Maximum value is : ", tree.maximumValue(tree.root));

tree.delete(20);
console.log("Tree after delete node");
console.log("Breadth First Search : ", tree.BFS());

/*  
         15
       /    \
     10      20
    /  \    /  \
   7   12  17   25
*/
