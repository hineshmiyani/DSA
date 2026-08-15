/**
 * @article  : https://algo.monster/liteproblems/207
 * @article  : https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/
 * @question : https://leetcode.com/problems/course-schedule
 * @question : https://neetcode.io/problems/course-schedule
 */

/*
  ✅ Problem Statement: 

  There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
  You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

  For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

  Return true if you can finish all courses. Otherwise, return false.

  Example 1:
  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: true
  Explanation: There are a total of 2 courses to take. 
  To take course 1 you should have finished course 0. So it is possible.

  Example 2:
  Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
  Output: false
  Explanation: There are a total of 2 courses to take. 
  To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

*/

// # Optimal Solution

/*
  
  # Step-by-step approach:

  The function `canFinish` determines if it is possible to finish all courses given the prerequisites.
  This problem can be approached using topological sorting of a directed graph.
  
  Steps:

  1. Initialize Data Structures:
     - Create an `adjacencyList` to represent the graph where each course points to the courses that depend on it.
     - Create an `indegreeArr` to keep track of the number of prerequisites (incoming edges) for each course.
  
  2. Build the Graph:
     - Iterate through the `prerequisites` array.
     - For each pair `[course, pre]`, add `course` to the adjacency list of `pre`.
     - Increment the in-degree of `course` by 1.
  
  3. Initialize the Queue:
     - Create a queue to store all nodes (courses) with an in-degree of 0 (i.e., no prerequisites).
     - Iterate through the `indegreeArr` and push all nodes with an in-degree of 0 to the queue.
  
  4. Topological Sort:
     - Initialize an empty array `topoSort` to store the topologically sorted order of courses.
     - While the queue is not empty:
       - Dequeue a node `current` from the queue.
       - Add `current` to the `topoSort` array.
       - For each neighbor of `current` in the adjacency list:
         - Decrement the in-degree of the neighbor by 1.
         - If the in-degree of the neighbor becomes 0, enqueue the neighbor.
  
  5. Check Completion:
     - If the length of `topoSort` is equal to `numCourses`, it means all courses can be completed.
     - Return `true` if all courses can be completed, otherwise return `false`.
  
  This approach ensures that we can detect cycles in the graph. If there is a cycle, not all courses
  will be added to the `topoSort` array, and the function will return `false`.

*/

/**
 * Determines if all courses can be finished given the prerequisites.
 * This function uses Kahn's algorithm for topological sorting to detect cycles in a directed graph.
 * If a cycle is detected, it means not all courses can be finished.
 *
 * @param {number} numCourses - The total number of courses.
 * @param {number[][]} prerequisites - A list of prerequisite pairs where each pair [a, b] indicates that course a depends on course b.
 * @returns {boolean} - Returns true if all courses can be finished, otherwise false.
 */
const canFinish = (numCourses, prerequisites) => {
  // Create an adjacency list to represent the graph
  const adjacencyList = {};

  // Create an array to keep track of the in-degrees of each node
  const indegreeArr = new Array(numCourses).fill(0);

  // Iterate over each pair in the prerequisites array
  for (const [course, pre] of prerequisites) {
    // If the prerequisite course is not already in the adjacency list, add it with an empty array
    if (!(pre in adjacencyList)) {
      adjacencyList[pre] = [];
    }

    // Add the current course to the list of courses dependent on the prerequisite
    adjacencyList[pre].push(course);

    // Increment the in-degree of the current course, indicating one more prerequisite it depends on
    indegreeArr[course] = indegreeArr[course] + 1;
  }

  // Initialize a queue to keep track of nodes with in-degree of 0
  const queue = [];

  // Add all nodes with in-degree of 0 to the queue
  for (let i = 0; i < indegreeArr.length; i++) {
    if (indegreeArr[i] === 0) {
      queue.push(i);
    }
  }

  // Array to store the topological sort order
  const topoSort = [];

  // Process nodes in the queue
  while (queue.length > 0) {
    // Remove the first node from the queue
    const current = queue.shift();

    // Add the current node to the topological sort order
    topoSort.push(current);

    // Iterate over all neighbors of the current node
    for (const neighbor of adjacencyList[current] || []) {
      // Decrease the in-degree of the neighbor by 1
      indegreeArr[neighbor] = indegreeArr[neighbor] - 1;

      // If the in-degree of the neighbor becomes 0, add it to the queue
      if (indegreeArr[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If the topological sort order contains all courses, return true
  return numCourses === topoSort.length;
};

// Example 1 Input
const numCourses1 = 2;
const prerequisites1 = [[1, 0]];

// Example 2 Input
const numCourses2 = 2;
const prerequisites2 = [
  [1, 0],
  [0, 1],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Can finish all the courses : ",
  canFinish(numCourses1, prerequisites1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Can finish all the courses : ",
  canFinish(numCourses2, prerequisites2)
);

//  # Time Complexity: O(V + E)
//  - Building the adjacency list and indegree array takes O(E) time, where E is the number of edges (prerequisites).
//  - Initializing the queue with nodes of in-degree 0 takes O(V) time, where V is the number of vertices (courses).
//  - Processing each node in the queue and updating the in-degrees of its neighbors takes O(V + E) time.
//  Therefore, the overall time complexity is O(V + E).

//  # Space Complexity: O(V + E)
//  - The adjacency list requires O(E) space to store the edges.
//  - The indegree array requires O(V) space to store the in-degrees of the nodes.
//  - The queue and topoSort array each require O(V) space.
//  Therefore, the overall space complexity is O(V + E).
