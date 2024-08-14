/**
 * @article  : https://algo.monster/liteproblems/143
 * @article  : https://takeuforward.org/data-structure/reorder-list/
 * @article  : https://leetcode.com/problems/reorder-list/solutions/801883/python-3-steps-to-success-explained
 * @question : https://leetcode.com/problems/reorder-list/
 * @question : https://neetcode.io/problems/reorder-linked-list
 */

/*
  ✅ Problem Statement: 

  You are given the head of a singly linked-list. The list can be represented as:
  L0 → L1 → … → Ln - 1 → Ln

  Reorder the list to be on the following form:
  L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

  Example 1:
  Input: head = [1,2,3,4]
  Output: [1,4,2,3]

  Example 2:
  Input: head = [1,2,3,4,5]
  Output: [1,5,2,4,3]

*/

// # Brute-force Solution

/*
  The function `reorderListSolution1` reorders a singly linked list such that the nodes are rearranged in a specific pattern.

  The pattern is: the first node is followed by the last node, followed by the second node, followed by the second last node, and so on.

  # Step-by-step approach:

  1. Traverse the linked list and store the values of the nodes in an array `arr`.
  2. Determine the length `n` of the array and calculate the range for the reordering loop.
     - If the length is even, the range is `n / 2`.
     - If the length is odd, the range is `Math.ceil(n / 2)`.
  3. Reset the `currentNode` to the head of the linked list.
  4. Iterate through the first half of the array (up to the calculated range):
     - For each index `i`:
       - If `i` is the middle index (i.e., `i === n - i - 1`), set the value of the current node to `arr[i]` and move to the next node.
       - Otherwise, set the value of the current node to `arr[i]`, move to the next node, set the value of the next node to `arr[n - i - 1]`, and move to the next node.
  5. Return the modified head of the linked list.

  This approach ensures that the linked list is reordered in the desired pattern by leveraging an auxiliary array to store node values and then reassigning those values in the correct order.
*/

/**
 * Reorders a linked list such that the nodes are rearranged in a specific pattern.
 * The pattern is: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 *
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The head of the reordered linked list.
 */
const reorderListSolution1 = (head) => {
  // Initialize an array to store the values of the linked list nodes.
  const arr = [];

  // Initialize a pointer to traverse the linked list.
  let currentNode = head;

  // Traverse the linked list and store each node's value in the array.
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  // Determine the length of the array.
  const n = arr.length;

  // Calculate the range for the reordering process.
  // If the length is even, range is n / 2. If odd, range is Math.ceil(n / 2).
  const range = n % 2 === 0 ? n / 2 : Math.ceil(n / 2);

  // Reset the pointer to the head of the linked list.
  currentNode = head;

  // Reorder the linked list based on the values stored in the array.
  for (let i = 0; i < range; i++) {
    // If the current index is the middle of the list, set the value and move to the next node.
    if (i === n - i - 1) {
      currentNode.val = arr[i];
      currentNode = currentNode.next;
    } else {
      // Set the current node's value to the ith value from the start.
      currentNode.val = arr[i];
      currentNode = currentNode.next;

      // Set the next node's value to the ith value from the end.
      currentNode.val = arr[n - i - 1];
      currentNode = currentNode.next;
    }
  }

  // Return the head of the reordered linked list.
  return head;
};

// # Optimal Solution

/*
  This function reorders a linked list such that the nodes are rearranged in a specific pattern.
  The pattern is to take the first node, then the last node, then the second node, then the second last node, and so on.
  
  # Step-by-step approach:

  1. Edge Case Handling: If the list is empty or has only one node, return immediately as no reordering is needed.
  
  2. Find the Middle of the List: Use the slow and fast pointer technique to find the middle of the list.
     - Initialize two pointers, `slow` and `fast`, both starting at the head of the list.
     - Move `slow` one step at a time and `fast` two steps at a time.
     - When `fast` reaches the end of the list, `slow` will be at the middle.
  
  
  3. Reverse the Second Half of the List: Reverse the second half of the list starting from the node after the middle.
     - Initialize three pointers: `prev` (set to null), `current` (set to the node after `slow`), and `next` (set to null).
     - Iterate through the second half of the list, reversing the pointers.
     - Set `slow.next` to null to split the list into two parts.
  
  4. Merge the Two Halves:
     - Split the list into two halves: the first half starting from `head` to `slow`, and the second half being the reversed list.
     - Use two pointers, `first` starts from the head of the list, and `second` starts from the head of the reversed second half.
     - Iterate through both halves, alternating nodes from each half.
     - Adjust the `next` pointers to interleave the nodes from the two halves.
  
  5. Return the Reordered List:
     - The `head` now points to the reordered list.
  
  This approach ensures that the list is reordered in O(n) time complexity with O(1) extra space.
*/

/**
 * Reorders a linked list such that the nodes are rearranged in a specific pattern.
 * Given a singly linked list L: L0 → L1 → … → Ln-1 → Ln,
 * reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 *
 * @param {ListNode} head - The head of the singly linked list.
 * @returns {ListNode} The head of the reordered linked list.
 */
const reorderListSolution2 = (head) => {
  // If the list is empty or has only one node, no reordering is needed.
  if (head == null || head.next == null) {
    return;
  }

  // Initialize two pointers, slow and fast, to find the middle of the list.
  let slow = head;
  let fast = head;

  // Move slow pointer by one step and fast pointer by two steps until fast reaches the end.
  // This will place the slow pointer at the middle of the list.
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list starting from the node after the middle.
  let prev = null;
  let current = slow.next;
  let next = null;

  while (current) {
    next = current.next; // Store the next node.
    current.next = prev; // Reverse the current node's pointer.
    prev = current; // Move prev to the current node.
    current = next; // Move to the next node.
  }

  // Disconnect the first half from the second half.
  slow.next = null;

  // Initialize pointers for merging the two halves.
  let first = head;
  let second = prev;

  // Merge the two halves by alternating nodes from each half.
  while (second) {
    const temp1 = first.next; // Store the next node of the first half.
    const temp2 = second.next; // Store the next node of the reversed second half.

    first.next = second; // Link the current node of the first half to the current node of the second half.
    second.next = temp1; // Link the current node of the second half to the next node of the first half.

    first = temp1; // Move to the next node in the first half.
    second = temp2; // Move to the next node in the reversed second half.
  }

  // Return the head of the reordered list.
  return head;
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
}

// Example 1 Input
const head1 = () => {
  const values1 = [1, 2, 3, 4];
  let linkedList1 = new LinkedList();
  for (const value of values1) {
    linkedList1.push(value);
  }

  return linkedList1.head;
};

// Example 2 Input
const head2 = () => {
  const values2 = [1, 2, 3, 4, 5];
  let linkedList2 = new LinkedList();
  for (const value of values2) {
    linkedList2.push(value);
  }
  return linkedList2.head;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(reorderListSolution1(head1()), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(reorderListSolution1(head2()), null, 4)
);

// # Time Complexity: O(n)
// The algorithm traverses the linked list twice (once to fill the array and once to reorder the list), resulting in linear time complexity.

// # Space Complexity: O(n)
// The algorithm uses an array to store the values of the linked list nodes, which requires additional space proportional to the number of nodes in the list.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(reorderListSolution2(head1()), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(reorderListSolution2(head2()), null, 4)
);

// # Time Complexity: O(n)
// The algorithm involves three main steps: finding the middle of the list (O(n)), reversing the second half (O(n)), and merging the two halves (O(n)). Thus, the overall time complexity is O(n).

// # Space Complexity: O(1)
// The algorithm uses a constant amount of extra space for pointers (slow, fast, prev, current, next, first, second), making the space complexity O(1).
