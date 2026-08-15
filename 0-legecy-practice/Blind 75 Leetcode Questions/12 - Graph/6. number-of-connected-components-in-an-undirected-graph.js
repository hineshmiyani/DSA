/**
 * @article  : https://algo.monster/liteproblems/323
 * @article  : https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/
 * @question : https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
 * @question : https://neetcode.io/problems/count-connected-components
 */

/*
  ✅ Problem Statement: 

  There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

  The nodes are numbered from 0 to n - 1.

  Return the total number of connected components in that graph.

  Example 1:
  Input: n = 3, edges = [[0,1], [0,2]]
  Output: 1

  Example 2:
  Input: n = 6, edges = [[0,1], [1,2], [2,3], [4,5]]
  Output:2

*/

// # Brute-force Solution

/*

  # Step-by-step approach:

  The function `countComponentsSolution1` aims to count the number of connected components in an undirected graph.
  The graph is represented by `n` nodes and a list of edges.
 
  Approach:
  1. Edge Case Handling: If there are no edges, each node is its own component, so return `n`.
 
  2. Graph Construction:
     - Use the `buildGraph` function to convert the list of edges into an adjacency list representation of the graph.
     - The adjacency list is a dictionary where each key is a node, and the value is a list of its neighbors.
 
  3. Component Counting:
     - Initialize a `visited` set to keep track of visited nodes.
     - Initialize a `count` variable to zero to count the number of connected components.
     - Iterate over each node in the graph. For each node, perform a Depth-First Search (DFS) using the `dfs` function.
     - If the DFS returns `true`, it means a new component has been found, so increment the `count`.
 
  4. Depth-First Search (DFS) Function:
     - The `dfs` function takes the current node, the graph, and the visited set as arguments.
     - If the current node has already been visited, return `false`.
     - Mark the current node as visited.
     - Recursively visit all the neighbors of the current node.
     - Return `true` to indicate that a new component has been found.
 
  5. Return the Result:
     - After iterating through all nodes, return the `count` which represents the number of connected components in the graph.

*/

/**
 * Counts the number of connected components in an undirected graph.
 *
 * @param {number} n - The number of nodes in the graph.
 * @param {Array<Array<number>>} edges - The edges of the graph, where each edge is represented as a pair of nodes [u, v].
 * @returns {number} - The number of connected components in the graph.
 */
const countComponentsSolution1 = (n, edges) => {
  // If there are no edges, each node is its own component.
  if (edges.length === 0) return n;

  // Build the graph from the edges list.
  const graph = buildGraph(edges);

  // Set to keep track of visited nodes.
  const visited = new Set();

  // Initialize the count of connected components.
  let count = 0;

  // Iterate over each node in the graph.
  for (const node in graph) {
    // Perform a depth-first search (DFS) starting from the current node.
    const result = dfs(node, graph, visited);

    // If the DFS returns true, it means we found a new connected component.
    if (result) {
      count = count + 1;
    }
  }

  // Return the total number of connected components.
  return count;
};

/**
 * Performs a Depth-First Search (DFS) on a graph starting from the given node.
 *
 * @param {number|string} current - The current node being visited.
 * @param {Object} graph - The graph represented as an adjacency list, where keys are node identifiers and values are arrays of neighboring nodes.
 * @param {Set} visited - A set of nodes that have already been visited.
 * @returns {boolean} - Returns true if the node was successfully visited, false if it was already visited.
 */
const dfs = (current, graph, visited) => {
  // Convert the current node to a string and check if it has already been visited.
  if (visited.has(String(current))) return false;

  // Mark the current node as visited by adding it to the visited set.
  visited.add(String(current));

  // Iterate over each neighbor of the current node.
  for (const neighbor of graph[current]) {
    // Recursively perform DFS on each neighboring node.
    dfs(neighbor, graph, visited);
  }

  // Return true indicating the current node was successfully visited.
  return true;
};

/**
 * Builds an adjacency list representation of an undirected graph from a list of edges.
 *
 * @param {Array<Array<number>>} edges - An array of edges, where each edge is represented by a pair of nodes [a, b].
 * @returns {Object} - An adjacency list representation of the graph.
 */
const buildGraph = (edges) => {
  // Initialize an empty object to store the graph
  const graph = {};

  // Iterate over each edge in the edges array
  for (const edge of edges) {
    // Destructure the edge into two nodes, a and b
    const [a, b] = edge;

    // If node a is not already in the graph, add it with an empty array as its value
    if (!(a in graph)) graph[a] = [];
    // If node b is not already in the graph, add it with an empty array as its value
    if (!(b in graph)) graph[b] = [];

    // Add node b to the adjacency list of node a
    graph[a].push(b);
    // Add node a to the adjacency list of node b
    graph[b].push(a);
  }

  // Return the constructed graph
  return graph;
};

// # Optimal Solution

/*

  # Step-by-step approach:

  This function counts the number of connected components in an undirected graph.
  The graph is represented by `n` nodes and a list of edges.
 
  Approach:
  1. Initialization:
     - If there are no edges, each node is its own component, so return `n`.
     - Initialize two arrays: `parent` and `rank`.
       - `parent` keeps track of the parent of each node, initially set to the node itself.
       - `rank` keeps track of the depth of the tree for each node, initially set to 1.
 
  2. Find Function:
     - This function finds the root parent of a node using path compression.
     - If the node is not its own parent, recursively find the root parent and update the parent of the node.
 
  3. Union Function:
     - This function unites two nodes into the same component.
     - It first finds the root parents of both nodes.
     - If the root parents are the same, the nodes are already in the same component, so return 0.
     - Otherwise, unite the components by attaching the tree with the smaller rank to the tree with the larger rank.
     - Update the rank of the new root parent.
     - Return 1 to indicate that a union was performed.
 
  4. Count Components:
     - Initialize `count` to `n` (each node is initially its own component).
     - Iterate over each edge and perform a union operation on the nodes.
     - If a union is performed, decrement the `count` by 1.
 
  5. Return Result:
     - Return the final count of connected components.

*/

/**
 * Counts the number of connected components in an undirected graph.
 *
 * @param {number} n - The number of nodes in the graph.
 * @param {number[][]} edges - The edges of the graph, where each edge is represented as a pair of nodes [node1, node2].
 * @returns {number} - The number of connected components in the graph.
 */
const countComponentsSolution2 = (n, edges) => {
  // If there are no edges, each node is its own component.
  if (!(edges.length > 0)) return n;

  // Initialize the parent array where each node is its own parent.
  const parent = new Array(n).fill("").map((_, index) => index);
  // Initialize the rank array where each node has an initial rank of 1.
  const rank = new Array(n).fill(1);

  /**
   * Finds the root parent of a node with path compression.
   *
   * @param {number} node - The node to find the root parent for.
   * @returns {number} - The root parent of the node.
   */
  const find = (node) => {
    // If the node is not its own parent, recursively find the root parent.
    if (parent[node] !== node) {
      // Path compression: make the parent of the node point to the root parent.
      parent[node] = find(parent[node]);
    }

    // Return the root parent of the node.
    return parent[node];
  };

  /**
   * Unites two nodes into the same component using union by rank.
   *
   * @param {number} node1 - The first node.
   * @param {number} node2 - The second node.
   * @returns {number} - Returns 1 if the nodes were united, 0 if they were already in the same component.
   */
  const union = (node1, node2) => {
    // Find the root parent of the first node.
    let p1 = find(node1);
    // Find the root parent of the second node.
    let p2 = find(node2);

    // If both nodes have the same root parent, they are already in the same component.
    if (p1 === p2) {
      return 0;
    }

    // Union by rank: attach the smaller tree under the root of the larger tree.
    if (rank[p2] > rank[p1]) {
      // If the rank of the second node's root is greater, make it the parent of the first node's root.
      parent[p1] = p2;
      // Update the rank of the second node's root.
      rank[p2] = rank[p2] + rank[p1];
    } else {
      // Otherwise, make the first node's root the parent of the second node's root.
      parent[p2] = p1;
      // Update the rank of the first node's root.
      rank[p1] = rank[p1] + rank[p2];
    }

    // Return 1 to indicate that the nodes were united.
    return 1;
  };

  // Start with each node being its own component.
  let count = n;

  // Iterate through each edge and unite the nodes.
  for (const [node1, node2] of edges) {
    // If nodes were united, decrease the component count.
    if (union(node1, node2) === 1) {
      count = count - 1;
    }
  }

  // Return the number of connected components.
  return count;
};

// Example 1 Input
const n1 = 3;
const edges1 = [
  [0, 1],
  [0, 2],
];

// Example 2 Input
const n2 = 6;
const edges2 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Total number of connected components is : ",
  countComponentsSolution1(n1, edges1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Total number of connected components is : ",
  countComponentsSolution1(n2, edges2)
);

/*
  # Time Complexity: O(V + E)
 
  1. Building the graph:
     - The `buildGraph` function iterates over all edges once.
     - For each edge, it performs constant-time operations to add nodes and edges to the graph.
     - Therefore, the time complexity of building the graph is O(E), where E is the number of edges.
 
  2. Depth-First Search (DFS):
     - In the worst case, DFS visits all nodes and edges in the graph.
     - Each node is visited once, and each edge is traversed once.
     - Therefore, the time complexity of DFS is O(V + E), where V is the number of nodes and E is the number of edges.
 
  3. Counting connected components:
     - The main function iterates over all nodes in the graph.
     - For each node, it performs a DFS if the node has not been visited.
     - Therefore, the overall time complexity for counting connected components is O(V + E).
 
  Overall Time Complexity: O(V + E)
*/

/* 
  # Space Complexity: O(V + E)

  1. Graph Representation:
     - The adjacency list representation of the graph requires space proportional to the number of nodes and edges.
     - Therefore, the space complexity for the graph is O(V + E). 

  2. Visited Set:
     - The `visited` set stores all visited nodes.
     - In the worst case, all nodes are visited, so the space complexity for the visited set is O(V). 

  3. Call Stack for DFS:
     - The recursive DFS function uses the call stack to keep track of nodes being visited.
     - In the worst case, the depth of the recursion is equal to the number of nodes, so the space complexity for the call stack is O(V). 

  Overall Space Complexity: O(V + E)
*/

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Total number of connected components is : ",
  countComponentsSolution2(n1, edges1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Total number of connected components is : ",
  countComponentsSolution2(n2, edges2)
);

/*
  # Time Complexity: O((n + E) log n)

  1. Initialization:
     - Initializing the `parent` and `rank` arrays takes O(n) time.

  2. Union-Find Operations:
     - Each `find` operation can take up to O(log n) time due to path compression.
     - Each `union` operation can take up to O(log n) time due to union by rank and the `find` operations involved.

  3. Processing Edges:
     - For each edge, we perform a `union` operation, which involves two `find` operations. Therefore, processing all edges takes O(E * log n) time, where E is the number of edges.

  4. Counting Unique Roots:
     - Finding the root for each node takes O(n * log n) time in the worst case.

  Combining these, the overall time complexity is: O(n + E log n + n log n) = O((n + E) log n)
*/

/*

  # Space Complexity
  
  1. Union-Find Data Structures:
     - The `parent` and `rank` arrays each take O(n) space.
  
  2. Auxiliary Space:
     - Additional space used for storing the unique roots is O(n).
  
  Combining these, the overall space complexity is: O(n)

*/
