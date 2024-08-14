/**
 * @article  : https://algo.monster/liteproblems/19
 * @article  : https://takeuforward.org/data-structure/remove-n-th-node-from-the-end-of-a-linked-list/
 * @question : https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * @question : https://neetcode.io/problems/remove-node-from-end-of-linked-list
 */

/*
  ✅ Problem Statement: 

  Given the head of a linked list, remove the nth node from the end of the list and return its head.

  Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

  Example 2:
  Input: head = [1], n = 1
  Output: []

*/

// # Brute-force Solution

/*
  # Step-by-step approach:
  
  1. Edge Case Handling:
     - If the list is empty (`head` is null) or has only one node (`head.next` is null), return null.
  
  2. Calculate the Length of the List:
     - Initialize `currentNode` to `head`.
     - Traverse the list to count the total number of nodes (`listLength`).
  
  3. Check if the Node to Remove is the Head:
     - If `listLength` is equal to `n`, it means the node to remove is the head of the list.
     - Return `head.next` to remove the head node.
  
  4. Calculate the Position of the Node to Delete:
     - Compute the index of the node to delete (`targetIndex`) as `listLength - n`.
  
  5. Traverse to the Node Before the Target Node:
     - Reset `currentNode` to `head`.
     - Traverse the list until `targetIndex` is 1, which means `currentNode` is the node just before the target node.
  
  6. Remove the Target Node:
     - Set `currentNode.next` to `currentNode.next.next` to bypass the target node.
  
  7. Return the Modified List:
     - Return the modified `head` of the list.
*/

/**
 * Removes the nth node from the end of a linked list.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end of the list of the node to remove.
 * @returns {ListNode} - The head of the modified linked list.
 */
const removeNthFromEndSolution1 = (head, n) => {
  // If the list is empty or has only one node, return null as the result.
  if (!head || !head.next) {
    return null;
  }

  let currentNode = head;
  let listLength = 0;

  // Calculate the total length of the linked list.
  while (currentNode) {
    currentNode = currentNode.next;
    listLength = listLength + 1;
  }

  // If the node to remove is the head of the list, return the next node as the new head.
  if (listLength === n) {
    return head.next;
  }

  // Calculate the position of the node to delete (targetIndex).
  let targetIndex = listLength - n;
  currentNode = head;

  // Traverse the list to find the node just before the target node.
  while (currentNode) {
    targetIndex = targetIndex - 1;
    if (targetIndex === 0) {
      break;
    }
    currentNode = currentNode.next;
  }

  // Remove the target node by changing the next pointer of the previous node.
  currentNode.next = currentNode.next.next;

  // Return the head of the modified list.
  return head;
};

// # Optimal Solution

/*
  This function removes the nth node from the end of a linked list.
  The approach used here is the two-pointer technique, which involves a slow and a fast pointer.

  # Step-by-step approach:

  1. Check if the list is empty or has only one node. If so, return null as there is nothing to remove.
  2. Initialize two pointers, `slow` and `fast`, both pointing to the head of the list.
  3. Move the `fast` pointer `n` steps ahead in the list.
  4. If `fast` becomes null after moving `n` steps, it means we need to remove the head node. Return `head.next` as the new head.
  5. Traverse the list with both `slow` and `fast` pointers until `fast` reaches the end of the list.
  6. At this point, `slow` will be pointing to the node just before the node to be removed.
  7. Adjust the `next` pointer of the `slow` node to skip the node to be removed.
  8. Return the head of the modified list.
*/

/**
 * Removes the nth node from the end of a linked list.
 *
 * This function uses a two-pointer technique to efficiently remove the nth node from the end of the list.
 * The `fast` pointer is moved `n` steps ahead of the `slow` pointer. Then, both pointers are moved
 * simultaneously until `fast` reaches the end of the list. At this point, `slow` will be just before
 * the node to be removed.
 *
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end of the list of the node to remove.
 * @returns {ListNode} - The head of the modified linked list.
 */
const removeNthFromEndSolution2 = (head, n) => {
  // If the list is empty or has only one node, return null as there is nothing to remove
  if (!head || !head.next) {
    return null;
  }

  // Initialize two pointers, slow and fast, both starting at the head of the list
  let slow = head;
  let fast = head;

  // Move the fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If fast pointer reaches the end, it means we need to remove the head node
  if (!fast) {
    return head.next;
  }

  // Move both pointers until the fast pointer reaches the end of the list
  // This will position the slow pointer just before the node to be removed
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip the node to be removed by changing the next pointer of the slow node
  slow.next = slow.next.next;

  // Return the head of the modified list
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
  const values1 = [1, 2, 3, 4, 5];
  let linkedList1 = new LinkedList();
  for (const value of values1) {
    linkedList1.push(value);
  }

  return linkedList1.head;
};
const n1 = 2;

// Example 2 Input
const head2 = () => {
  const values2 = [1];
  let linkedList2 = new LinkedList();
  for (const value of values2) {
    linkedList2.push(value);
  }
  return linkedList2.head;
};
const n2 = 1;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(removeNthFromEndSolution1(head1(), n1), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(removeNthFromEndSolution1(head2(), n2), null, 4)
);

// # Time Complexity: O(L), where L is the length of the linked list.
// This is because we traverse the list twice: once to calculate the length and once to find the node to remove.

// # Space Complexity: O(1)
// This is because we are using a constant amount of extra space regardless of the input size.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(removeNthFromEndSolution2(head1(), n1), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The reordered linked list: ",
  JSON.stringify(removeNthFromEndSolution2(head2(), n2), null, 4)
);

// # Time Complexity: O(L), where L is the length of the linked list.
// This is because we traverse the list twice: once to move the fast pointer n steps ahead and once to move both pointers until the fast pointer reaches the end.

// # Space Complexity: O(1)
// As we are using only a constant amount of extra space for the two pointers (slow and fast).
