/**
 * @article  : https://algo.monster/liteproblems/206
 * @article  : https://takeuforward.org/data-structure/reverse-a-linked-list/
 * @question : https://leetcode.com/problems/reverse-linked-list/
 * @question : https://neetcode.io/problems/reverse-a-linked-list
 */

/*
  ✅ Problem Statement: 

  Given the head of a singly linked list, reverse the list, and return the reversed list.

  Example 1:
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

  Example 2:
  Input: head = [1,2]
  Output: [2,1]

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Initialize three pointers:
     - `previousNode` to keep track of the previous node in the list, initially set to `null`.
     - `currentNode` to traverse the list, initially set to the head of the list.
     - `nextNode` to temporarily store the next node in the list during traversal.
  
  2. Iterate through the linked list using a `while` loop until `currentNode` becomes `null`:
     - Store the next node in `nextNode` to keep track of the remaining list.
     - Reverse the `currentNode`'s `next` pointer to point to `previousNode`.
     - Move the `previousNode` pointer to the current node.
     - Move the `currentNode` pointer to the next node (`nextNode`).
  
  3. Once the loop completes, `previousNode` will be pointing to the new head of the reversed list.
  
  4. Return `previousNode` as the new head of the reversed linked list.
*/

/**
 * Reverses a singly linked list.
 *
 * @param {ListNode} head - The head node of the linked list to be reversed.
 * @returns {ListNode} - The new head node of the reversed linked list.
 */
const reverseList = (head) => {
  // Initialize previousNode to null as the new tail of the reversed list will point to null
  let previousNode = null;

  // Initialize currentNode to the head of the list to start the reversal process
  let currentNode = head;

  // Declare nextNode to temporarily store the next node in the list during iteration
  let nextNode;

  // Iterate through the list until currentNode is null (end of the list)
  while (currentNode) {
    // Store the next node before changing the current node's next pointer
    nextNode = currentNode.next;

    // Reverse the current node's next pointer to point to the previous node
    currentNode.next = previousNode;

    // Move the previousNode and currentNode one step forward in the list
    previousNode = currentNode;
    currentNode = nextNode;
  }

  // Return the new head of the reversed list, which is the previousNode
  return previousNode;
};

class ListNode {
  constructor(value) {
    this.value = value; // The value stored in the node.
    this.next = null; // Pointer to the next node in the list.
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
const values1 = [1, 2, 3, 4, 5];

let linkedList1 = new LinkedList();

for (const value of values1) {
  linkedList1.push(value);
}

const head1 = linkedList1.head;

// Example 2 Input
const values2 = [1, 2];

let linkedList2 = new LinkedList();

for (const value of values2) {
  linkedList2.push(value);
}

const head2 = linkedList2.head;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Reversed Linked List: ", reverseList(head1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Reversed Linked List: ", reverseList(head2));

// #Time Complexity: O(n)
// The time complexity of the reverseList function is O(n), where n is the number of nodes in the linked list.
// This is because the function iterates through each node exactly once.

// # Space Complexity: O(1)
// The space complexity of the reverseList function is O(1).
// This is because the function uses a constant amount of extra space for the previousNode, currentNode, and nextNode variables, regardless of the size of the input linked list.
