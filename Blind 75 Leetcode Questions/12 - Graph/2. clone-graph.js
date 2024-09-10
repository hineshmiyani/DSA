/**
 * @article  : https://algo.monster/liteproblems/133
 * @article  : https://www.geeksforgeeks.org/clone-an-undirected-graph/
 * @question : https://leetcode.com/problems/clone-graph
 * @question : https://neetcode.io/problems/clone-graph
 */

/*
  ✅ Problem Statement: 

  Given a reference of a node in a connected undirected graph.
  Return a deep copy (clone) of the graph.

  Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
  class Node {
    public int val;
    public List<Node> neighbors;
  }

  Test case format:

  For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. 
  The graph is represented in the test case using an adjacency list.

  An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

  The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 
  Example 1:
  Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
  Output: [[2,4],[1,3],[2,4],[1,3]]
  Explanation: There are 4 nodes in the graph.
  1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
  2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
  3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
  4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

  Example 2:
  Input: adjList = [[]]
  Output: [[]]
  Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

*/

// # Optimal Solution

/*

  # Step-by-step approach:
  
  1. Base Case: If the input `node` is null, return null immediately as there is nothing to clone.
  
  2. Initialization:
     - Create a `visitedMap` using the `Map` interface to keep track of all the nodes that have been cloned.
     - Add the initial node to the `visitedMap` with a new `Node` instance that has the same value as the original node.
     - Initialize a `queue` with the input node to perform a Breadth-First Search (BFS).
  
  3. BFS Traversal:
     - While the `queue` is not empty, perform the following steps:
       - Dequeue the first node from the `queue` and assign it to `currentNode`.
       - Iterate over each neighbor of `currentNode` (if `neighbors` is not null or undefined):
         - If the neighbor has not been visited (i.e., not present in `visitedMap`):
           - Enqueue the neighbor to the `queue`.
           - Clone the neighbor by creating a new `Node` instance with the same value and add it to the `visitedMap`.
         - Retrieve the cloned version of `currentNode` from `visitedMap`.
         - Add the cloned neighbor to the `neighbors` list of the cloned `currentNode`.
  
  4. Return the Cloned Graph:
     - After the BFS traversal is complete, return the cloned version of the input node from `visitedMap`.
  
  This approach ensures that each node and its connections are cloned exactly once, maintaining the structure of the original graph.

*/

/**
 * Definition for a Node.
 * @param {number} val - The value of the node.
 * @param {Node[]} neighbors - The neighbors of the node.
 */
class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors ? neighbors : [];
  }
}

/**
 * Clones an undirected graph using Breadth-First Search (BFS).
 *
 * @param {Node} node - The starting node of the graph to be cloned.
 * @returns {Node|null} - The cloned graph's starting node or null if the input node is null.
 */
const cloneGraph = (node) => {
  // If the input node is null, return null as there is nothing to clone.
  if (!node) return null;

  // A map to keep track of all the visited nodes and their corresponding clones.
  const visitedMap = new Map();

  // Clone the root node and add it to the visited map.
  visitedMap.set(node, new Node(node.val));

  // Initialize the queue for BFS with the root node.
  const queue = [node];

  // Perform BFS traversal.
  // Continue processing nodes in the queue until it is empty.
  while (queue.length > 0) {
    // Dequeue the first node in the queue.
    const currentNode = queue.shift();

    // Iterate through all the neighbors of the current node.
    for (let neighbor of currentNode.neighbors || []) {
      // If the neighbor hasn't been visited yet, clone it and add it to the queue.
      if (!visitedMap.has(neighbor)) {
        // Add the neighbor to the queue for future processing.
        queue.push(neighbor);

        // Clone the neighbor node and store it in the visited map.
        visitedMap.set(neighbor, new Node(neighbor.val));
      }

      // Retrieve the cloned current node from the visited map.
      const clonedCurrentNode = visitedMap.get(currentNode);

      // Retrieve the cloned neighbor node from the visited map and add it to the neighbors of the cloned current node.
      clonedCurrentNode.neighbors.push(visitedMap.get(neighbor));
    }
  }

  // Return the cloned root node.
  return visitedMap.get(node);
};

// Example 1 Input
const input1 = () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.neighbors.push(node2, node4);
  node2.neighbors.push(node1, node3);
  node3.neighbors.push(node2, node4);
  node4.neighbors.push(node1, node3);

  return node1;
};

// Example 2 Input
const input2 = () => {
  const node1 = new Node(1);

  return node1;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Clone Graph is : ", cloneGraph(input1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Clone Graph is : ", cloneGraph(input2));

// # Time Complexity: O(V + E)
// The time complexity of this algorithm is O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.
// - Each node is processed once when it is dequeued.
// - Each edge is processed once when iterating through the neighbors of a node.
// Therefore, the total time complexity is O(V + E).

// # Space Complexity: O(V)
// The space complexity of this algorithm is O(V).
// - The `visitedMap` stores a clone for each node, which requires O(V) space.
// - The `queue` can store up to O(V) nodes in the worst case.
// Therefore, the total space complexity is O(V).
