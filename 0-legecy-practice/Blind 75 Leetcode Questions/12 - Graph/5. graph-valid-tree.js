/**
 * @article  : https://algo.monster/liteproblems/261
 * @article  : https://www.geeksforgeeks.org/check-given-graph-tree/
 * @question : https://leetcode.com/problems/graph-valid-tree
 * @question : https://neetcode.io/problems/valid-tree
 */

/*
  ✅ Problem Statement: 

  Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

  Example 1:
  Input: n = 5
  edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
  Output: true

  Example 2:
  Input: n = 5
  edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
  Output: false

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Graph Representation:
     - We start by representing the given edges as an adjacency list. This is done using the `buildGraph` function.
     - The `buildGraph` function takes the edges and constructs a graph where each node points to its neighbors.

  2. Depth-First Search (DFS):
     - We use DFS to traverse the graph and check for cycles and connectivity.
     - The `dfs` function is used to perform the traversal. It takes the current node, the previous node, a set of visited nodes, and the graph as arguments.
     - If a node is revisited (i.e., it is already in the `visited` set), it indicates a cycle, and we return `false`.
     - Otherwise, we add the node to the `visited` set and continue the traversal for its neighbors.
     - If a neighbor is the previous node (the one we came from), we skip it to avoid trivial cycles.
     - If any recursive DFS call returns `false`, it means a cycle is detected, and we propagate this result up the call stack.

  3. Cycle Detection and Connectivity Check:
     - We start the DFS from node `0` with an initial previous node of `-1` (indicating no previous node).
     - If the DFS returns `false`, it means there is a cycle in the graph, and hence it cannot be a valid tree.
     - After the DFS completes, we check if the number of visited nodes is equal to `n` (the total number of nodes). If not, it means the graph is not fully connected.

  4. Final Decision:
     - If the DFS completes without detecting a cycle and all nodes are visited, we return `true`, indicating the graph is a valid tree.
     - Otherwise, we return `false`.

  This approach ensures that we correctly identify whether the given graph is a valid tree by checking for both cycles and connectivity.
*/

/**
 * Determines if the given edges form a valid tree with `n` nodes.
 * A valid tree must be fully connected and contain no cycles.
 *
 * @param {number} n - The number of nodes in the graph.
 * @param {Array<Array<number>>} edges - The edges of the graph, where each edge is represented as a pair of nodes [a, b].
 * @returns {boolean} - Returns true if the edges form a valid tree, otherwise false.
 */
const validTree = (n, edges) => {
  // Build the graph representation from the edges
  const graph = buildGraph(edges);

  // Set to keep track of visited nodes
  const visited = new Set();

  // Perform DFS starting from node 0
  // If DFS returns false, it means there's a cycle or disconnected component
  if (!dfs(0, -1, visited, graph)) {
    return false;
  }

  // Check if all nodes are visited
  // If the number of visited nodes is equal to n, the graph is fully connected
  return n === visited.size;
};

/**
 * Depth-First Search (DFS) function to determine if a graph is a valid tree.
 *
 * @param {number} current - The current node being visited.
 * @param {number} previous - The previous node visited (to avoid revisiting the parent node).
 * @param {Set<number>} visited - A set of visited nodes to keep track of nodes that have been visited.
 * @param {Object} graph - The adjacency list representation of the graph.
 * @returns {boolean} - Returns true if the graph is a valid tree, otherwise false.
 */
const dfs = (current, previous, visited, graph) => {
  // If the current node has already been visited, a cycle is detected, hence not a valid tree.
  if (visited.has(current)) return false;

  // Mark the current node as visited.
  visited.add(current);

  // Iterate through all the neighbors of the current node.
  for (const neighbor of graph[current] || []) {
    // Skip the previous node to avoid revisiting the parent node.
    if (neighbor === previous) continue;

    // Recursively perform DFS on the neighbor. If a cycle is detected in any of the recursive calls, return false.
    if (!dfs(neighbor, current, visited, graph)) {
      return false;
    }
  }

  // If no cycles are detected, return true.
  return true;
};

/**
 * Builds an undirected graph from a list of edges.
 *
 * @param {Array<Array<number>>} edges - An array of edges, where each edge is represented as a pair of nodes [a, b].
 * @returns {Object} - An adjacency list representation of the graph.
 */
const buildGraph = (edges) => {
  // Initialize an empty object to store the graph
  const graph = {};

  // Iterate over each edge in the edges array
  for (const edge of edges) {
    // Destructure the edge into nodes a and b
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

// Example 1 Input
const n1 = 5;
const edges1 = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];

// Example 2 Input
const n2 = 5;
const edges2 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid tree : ", validTree(n1, edges1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid tree : ", validTree(n2, edges2));

/*
  # Time Complexity: O(V + E)
  - The `validTree` function involves three main operations:
    1. Building the graph using `buildGraph(edges)`.
    2. Performing Depth-First Search (DFS) using `dfs(0, -1, visited, graph)`.
    3. Checking if all nodes are visited.

  1. Building the graph:
     - Iterates over each edge once.
     - For each edge, it performs constant-time operations (adding nodes and edges to the graph).
     - Therefore, the time complexity for building the graph is O(E), where E is the number of edges.

  2. Performing DFS:
     - In the worst case, DFS visits each node and each edge once.
     - Therefore, the time complexity for DFS is O(V + E), where V is the number of nodes and E is the number of edges.

  3. Checking if all nodes are visited:
     - This is a constant-time operation, O(1), since it only involves comparing the size of the visited set to the number of nodes.

  Combining these, the overall time complexity of the `validTree` function is O(V + E).
*/

/* 
  # Space Complexity: O(V + E)
  - The space complexity involves the space required to store the graph, the visited set, and the call stack for DFS.

  1. Storing the graph:
     - The graph is stored as an adjacency list.
     - In the worst case, each node has edges to every other node, resulting in O(V + E) space.

  2. Storing the visited set:
     - The visited set stores each node once.
     - Therefore, the space complexity for the visited set is O(V).

  3. Call stack for DFS:
     - In the worst case, the call stack can grow to the size of the number of nodes, O(V).

  Combining these, the overall space complexity of the `validTree` function is O(V + E).
*/
