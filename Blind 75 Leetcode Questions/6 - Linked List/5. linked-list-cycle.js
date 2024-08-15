/**
 * @article  : https://algo.monster/liteproblems/141
 * @article  : https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/
 * @question : https://leetcode.com/problems/linked-list-cycle
 * @question : https://neetcode.io/problems/linked-list-cycle-detection
 */

/*
  ✅ Problem Statement: 

  Given head, the head of a linked list, determine if the linked list has a cycle in it.
  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
  !Note that pos is not passed as a parameter.
  Return true if there is a cycle in the linked list. Otherwise, return false.

  Example 1:
  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
  
  Example 2:
  Input: head = [1], pos = -1
  Output: false
  Explanation: There is no cycle in the linked list.
  
  Example 3:
  Input: head = [1,2], pos = 0
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

*/

// # Brute-force Solution

/*
  # Step-by-step approach:

  1. Initialize a `Set` to keep track of visited nodes. This `Set` will help us
     determine if we have encountered a node more than once.

  2. Start traversing the linked list from the `head` node.

  3. For each node, check if it already exists in the `Set`:
     - If it does, this means we have encountered a cycle, so return `true`.
     - If it does not, add the current node to the `Set` and move to the next node.

  4. Continue this process until we either find a cycle or reach the end of the list.

  5. If we reach the end of the list (i.e., `currentNode` becomes `null`), it means
     there is no cycle in the linked list, so return `false`.

  This approach uses a `Set` to store references to the nodes we have visited.

*/

/**
 * Determines if a linked list has a cycle using a Set to track visited nodes.
 *
 * @param {ListNode} head - The head node of the linked list.
 * @returns {boolean} - Returns true if a cycle is detected, otherwise false.
 */
const hasCycleSolution1 = (head) => {
  // Initialize a Set to keep track of visited nodes
  const visitedNodes = new Set();

  // Start with the head node
  let currentNode = head;

  // Traverse the linked list
  while (currentNode) {
    // If the current node has already been visited, a cycle is detected
    if (visitedNodes.has(currentNode)) {
      return true;
    } else {
      // Otherwise, add the current node to the Set of visited nodes
      visitedNodes.add(currentNode);
      // Move to the next node in the list
      currentNode = currentNode.next;
    }
  }

  // If the end of the list is reached without detecting a cycle, return false
  return false;
};

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Initial Check:
     - If the `head` is null or if there is only one node (`head.next` is null), 
       return `false` immediately as a cycle is not possible in these cases.

  2. Two-Pointer Technique:
     - Use two pointers, `slow` and `fast`, both initialized to the `head` of the linked list.
     - `slow` pointer moves one step at a time (`slow = slow.next`).
     - `fast` pointer moves two steps at a time (`fast = fast.next.next`).

  3. Cycle Detection:
     - Traverse the linked list using the two pointers.
     - In each iteration, check if `fast` can move two steps ahead (`fast.next` and `fast.next.next` are not null).
     - Move `slow` one step and `fast` two steps.
     - If at any point `slow` and `fast` pointers meet, it indicates that there is a cycle in the linked list, 
       so return `true`.

  4. No Cycle:
     - If the loop terminates without the `slow` and `fast` pointers meeting, it means the `fast` pointer 
       has reached the end of the list, and there is no cycle. Hence, return `false`.

*/

/**
 * Function to determine if a linked list has a cycle.
 * This implementation uses the Floyd's Tortoise and Hare algorithm.
 *
 * @param {ListNode} head - The head node of the linked list.
 * @returns {boolean} - Returns true if there is a cycle in the linked list, otherwise false.
 */
const hasCycleSolution2 = (head) => {
  // If the list is empty or has only one node, it cannot have a cycle.
  if (!head || !head.next) {
    return false;
  }

  // Initialize two pointers, slow and fast.
  let slow = head;
  let fast = head;

  // Traverse the list with two pointers.
  // Slow pointer moves one step at a time.
  // Fast pointer moves two steps at a time.
  while (fast.next && fast.next.next) {
    slow = slow.next; // Move slow pointer one step.
    fast = fast.next.next; // Move fast pointer two steps.

    // If slow and fast pointers meet, there is a cycle.
    if (slow === fast) {
      return true;
    }
  }

  // If we reach here, it means there is no cycle in the list.
  return false;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val; // The val stored in the node.
    this.next = next; // Pointer to the next node in the list.
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list.
    this.tail = null; // Pointer to the last node in the list.
    this.size = 0; // The number of nodes in the list.
  }

  push(value) {
    const newNode = new ListNode(value); // Create a new node with the given value.

    if (!this.head) {
      // If the list is empty,
      this.head = newNode; // set the new node as the head,
      this.tail = newNode; // and also as the tail.
    } else {
      this.tail.next = newNode; // Link the current tail to the new node.
      this.tail = newNode; // Update the tail to the new node.
    }

    this.size = this.size + 1; // Increment the size of the list.

    return this; // Return the linked list instance.
  }

  createCycle(pos) {
    if (pos < 0 || pos >= this.size) {
      return; // If pos is invalid, do nothing.
    }

    let cycleNode = this.head;
    for (let i = 0; i < pos; i++) {
      cycleNode = cycleNode.next; // Find the node at the given position.
    }

    this.tail.next = cycleNode; // Create the cycle by pointing the tail to the cycle node.
  }
}

// Example 1 Input
const head1 = () => {
  const values1 = [3, 2, 0, -4];
  const pos = 1;

  let linkedList1 = new LinkedList();
  for (const value of values1) {
    linkedList1.push(value);
  }

  linkedList1.createCycle(pos); // Create the cycle in the linked list.

  return linkedList1.head;
};

// Example 2 Input
const head2 = () => {
  const values2 = [1];
  const pos = -1;

  let linkedList2 = new LinkedList();

  for (const value of values2) {
    linkedList2.push(value);
  }

  linkedList2.createCycle(pos); // No cycle will be created as pos is -1.

  return linkedList2.head;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Cycle detected in the list? : ", hasCycleSolution1(head1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Cycle detected in the list? : ", hasCycleSolution1(head2()));

// # Time Complexity: O(n)
// The function traverses each node of the linked list once, where n is the number of nodes in the list.

// # Space Complexity: O(n)
// The Set stores each node reference, which in the worst case (no cycle) will store all n nodes.

console.log("\n\n ------------Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Cycle detected in the list? : ", hasCycleSolution2(head1()));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Cycle detected in the list? : ", hasCycleSolution2(head2()));

// # Time Complexity: O(n)
// The slow pointer traverses the list one node at a time, and the fast pointer traverses two nodes at a time.
// In the worst case, they will traverse the entire list, making the time complexity linear.

// # Space Complexity: O(1)
// The algorithm uses a constant amount of extra space, as it only uses two pointers regardless of the input size.
