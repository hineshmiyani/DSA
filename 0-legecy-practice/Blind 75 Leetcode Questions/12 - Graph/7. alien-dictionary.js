/**
 * @article  : https://algo.monster/liteproblems/269
 * @article  : https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26/
 * @article  : https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
 * @question : https://leetcode.com/problems/alien-dictionary
 * @question : https://neetcode.io/problems/foreign-dictionary
 */

/*
  ✅ Problem Statement: 

  There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.

  You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically based on the rules of this new language.

  Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return any of them.

  A string a is lexicographically smaller than a string b if either of the following is true:
  - The first letter where they differ is smaller in a than in b.
  - There is no index i such that a[i] != b[i] and a.length < b.length.

  Example 1:
  Input: ["z","o"]
  Output: "zo"
  Explanation:
  From "z" and "o", we know 'z' < 'o', so return "zo".

  Example 2:
  Input: ["hrn","hrf","er","enn","rfnn"]
  Output: "hernf"
  Explanation:
  from "hrn" and "hrf", we know 'n' < 'f'
  from "hrf" and "er", we know 'h' < 'e'
  from "er" and "enn", we know get 'r' < 'n'
  from "enn" and "rfnn" we know 'e'<'r'
  so one possible solution is "hernf"

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Graph Initialization:
     - Create an empty graph `graph` to represent the adjacency list of characters.
     - Create an `indegree` object to keep track of the number of incoming edges for each character.
     - Iterate through each word in the `words` list and each character in the word.
     - Initialize each character in the `graph` with an empty array and set its `indegree` to 0 if it hasn't been initialized yet.

  2. Build the Graph:
     - Iterate through the `words` list in pairs (i.e., `words[i]` and `words[i + 1]`).
     - For each pair of words, compare characters one by one until a mismatch is found or one of the words is exhausted.
     - If a mismatch is found, add a directed edge from the mismatched character in the first word to the mismatched character in the second word in the `graph`.
     - Increment the `indegree` of the character in the second word.
     - If the first word is a prefix of the second word, continue to the next pair.

  3. Topological Sort:
     - Initialize a queue and add all characters with `indegree` of 0 (i.e., no incoming edges).
     - Initialize an empty list `topoSort` to store the topologically sorted characters.
     - While the queue is not empty:
       - Remove a character from the queue and add it to `topoSort`.
       - For each neighbor of the current character in the `graph`, decrement its `indegree`.
       - If a neighbor's `indegree` becomes 0, add it to the queue.

  4. Result:
     - If the length of `topoSort` is equal to the number of unique characters, return the characters joined as a string.
     - If not, return an empty string indicating that a valid order is not possible.

*/

/**
 * Determines the order of characters in an alien language given a sorted dictionary of words.
 * @param {string[]} words - An array of words sorted lexicographically by the rules of the alien language.
 * @returns {string} - A string representing the characters in the correct order. Returns an empty string if no valid order exists.
 */
const alienOrder = (words) => {
  // Initialize graph and indegree map
  const graph = {}; // Adjacency list representation of the graph
  const indegree = {}; // Map to keep track of the number of incoming edges for each node

  // Build the graph and indegree map with all unique characters
  for (const word of words) {
    for (const char of word) {
      if (!(char in graph)) {
        graph[char] = []; // Initialize adjacency list for the character
        indegree[char] = 0; // Initialize indegree for the character
      }
    }
  }

  // Build the graph edges and update indegree based on the order of characters in the words
  for (let i = 0; i < words.length - 1; i++) {
    const string1 = words[i]; // Current word
    const string2 = words[i + 1]; // Next word

    let j = 0;
    let k = 0;

    // Find the first differing character between string1 and string2
    while (
      j < string1.length &&
      k < string2.length &&
      string1[j] === string2[k]
    ) {
      j = j + 1;
      k = k + 1;
    }

    // If string2 is a prefix of string1, continue to the next pair
    if (k === string1.length) {
      continue;
    }

    // Add an edge from string1[j] to string2[k] and update indegree of string2[k]
    // This indicates that string1[j] comes before string2[k] in the alien dictionary
    graph[string1[j]].push(string2[k]);
    indegree[string2[k]] = indegree[string2[k]] + 1;
  }

  // Initialize the queue with nodes having zero indegree
  // The queue will be used to perform a topological sort
  const queue = [];

  // Iterate over each node in the indegree object
  for (const node in indegree) {
    // Check if the node has an indegree of zero
    if (indegree[node] === 0) {
      // If true, add the node to the queue
      queue.push(node);
    }
  }

  // Initialize an array to store the topological sort order
  const topoSort = [];

  // Process nodes in the queue until it is empty
  while (queue.length > 0) {
    // Dequeue a node with zero indegree
    const current = queue.shift();

    // Add the dequeued node to the topological sort order
    topoSort.push(current);

    // Iterate over all neighbors of the current node
    for (const neighbor of graph[current] || []) {
      // Decrease the indegree of the neighbor by 1
      indegree[neighbor] = indegree[neighbor] - 1;

      // If the neighbor's indegree becomes zero, enqueue it
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If the topological sort includes all characters, return the order as a string
  // Otherwise, return an empty string indicating no valid order exists
  return topoSort.length === Object.keys(indegree).length
    ? topoSort.join("")
    : "";
};

// Example 1 Input
const words1 = ["z", "o"];

// Example 2 Input
const words2 = ["hrn", "hrf", "er", "enn", "rfnn"];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Valid order of letters is : ", alienOrder(words1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Valid order of letters is : ", alienOrder(words2));

/*
  # Time Complexity:
  - Building the graph and indegree map: O(C), where C is the total number of characters in all words.
  - Building the graph edges and updating indegree: O(V + E), where V is the number of unique characters and E is the number of edges (relationships between characters).
  - Topological sort (Kahn's algorithm): O(V + E).

  Overall time complexity: O(C + V + E).
*/

/*
  # Space Complexity:
  - Graph storage: O(V + E), where V is the number of unique characters and E is the number of edges.
  - Indegree map: O(V), where V is the number of unique characters.
  - Queue and topoSort storage: O(V), where V is the number of unique characters.

  Overall space complexity: O(V + E).
*/
