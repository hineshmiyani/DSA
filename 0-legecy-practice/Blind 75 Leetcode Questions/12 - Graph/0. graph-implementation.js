/**
 * @article  : https://www.geeksforgeeks.org/implementation-graph-javascript/
 * @article  : https://javascripttoday.com/blog/graph-data-structure-in-javascript/
 * @article  : https://dev.to/niemet0502/how-to-implement-a-graph-adjacency-list-and-matrix-in-javascript-2i6g
 * @article  : https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
 */

/*
  Graph Visualization:

  Nodes: a, b, c, d, e, f

  Edges:
  a -> b
  a -> c
  b -> d
  c -> e
  d -> f

  Graph Structure:
  a
  | \
  b   c
  |    \
  d     e
  |
  f

*/
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstSearchIterative = (graph, source) => {
  const stack = [];
  const result = [];

  stack.push(source);

  while (stack.length > 0) {
    const current = stack.pop();

    result.push(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return result;
};

const depthFirstSearchRecursive = (graph, source) => {
  const result = [];

  traverse(graph, source, result);

  return result;
};

const traverse = (graph, source, result) => {
  result.push(source);

  for (const neighbor of graph[source]) {
    traverse(graph, neighbor, result);
  }
};

const breadthFirstSearch = (graph, source) => {
  const queue = [];
  const result = [];

  queue.push(source);

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current);

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return result;
};

const DFSIterative = depthFirstSearchIterative(graph, "a");
const DFSRecursive = depthFirstSearchRecursive(graph, "a");

const BFS = breadthFirstSearch(graph, "a");

console.log("DFS Iterative: ", DFSIterative);
console.log("DFS Recursive: ", DFSRecursive);

console.log("BFS: ", BFS);
