/**
 * @article  : https://algo.monster/liteproblems/21
 * @article  : https://takeuforward.org/data-structure/merge-two-sorted-linked-lists/
 * @question : https://leetcode.com/problems/merge-two-sorted-lists/
 * @question : https://neetcode.io/problems/merge-two-sorted-linked-lists
 */

/*
  ✅ Problem Statement: 

  Given the head of a singly linked list, reverse the list, and return the reversed list.

  Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

  Example 2:
  Input: list1 = [], list2 = []
  Output: []

  Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]

*/

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Create a dummy node to serve as the starting point of the merged list. This helps simplify edge cases.

  2. Initialize a pointer `current` to the dummy node. This pointer will be used to build the new list.

  3. Iterate through both input lists (`list1` and `list2`) until one of them is exhausted:
     - Compare the values of the current nodes of both lists.
     - Append the node with the smaller value to the merged list by setting `current.next` to that node.
     - Move the pointer of the list from which the node was taken to the next node.
     - Move the `current` pointer to the next node in the merged list.

  4. After the loop, one of the lists might still have remaining nodes. Append the remaining nodes to the merged list.

  5. Return the merged list starting from `dummy.next` (skipping the dummy node).
  
  This approach ensures that the merged list is sorted and combines the two input lists efficiently.
  
*/

/**
 * Merges two sorted linked lists into one sorted linked list.
 *
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @returns {ListNode} - The head of the merged sorted linked list.
 */
const mergeTwoLists = (list1, list2) => {
  // Create a dummy node to serve as the starting point of the merged list.
  let dummy = new ListNode(-1);

  // Initialize a pointer to build the new list.
  let current = dummy;

  // Traverse both lists until one of them is exhausted.
  while (list1 && list2) {
    // Compare the values of the current nodes of both lists.
    if (list1.val <= list2.val) {
      // If list1's value is smaller or equal, append it to the merged list.
      current.next = list1;

      // Move to the next node in list1.
      list1 = list1.next;
    } else {
      // If list2's value is smaller, append it to the merged list.
      current.next = list2;

      // Move to the next node in list2.
      list2 = list2.next;
    }

    // Move the pointer to the next node in the merged list.
    current = current.next;
  }

  // If there are remaining nodes in list1, append them to the merged list.
  if (list1) {
    current.next = list1;
  }

  // If there are remaining nodes in list2, append them to the merged list.
  if (list2) {
    current.next = list2;
  }

  // Return the head of the merged list, which is the next node of the dummy.
  return dummy.next;
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
const values1 = [1, 2, 4];
const values2 = [1, 3, 4];

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

for (const value of values1) {
  linkedList1.push(value);
}

for (const value of values2) {
  linkedList2.push(value);
}

const list1 = linkedList1.head;
const list2 = linkedList2.head;

// Example 2 Input
const values3 = [];
const values4 = [];

let linkedList3 = new LinkedList();
let linkedList4 = new LinkedList();

for (const value of values3) {
  linkedList2.push(value);
}

for (const value of values4) {
  linkedList2.push(value);
}

const list3 = linkedList3.head;
const list4 = linkedList4.head;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Merged sorted linked list: ",
  JSON.stringify(mergeTwoLists(list1, list2), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Merged sorted linked list: ",
  JSON.stringify(mergeTwoLists(list3, list4), null, 4)
);

// # Time Complexity: O(n + m)
// This is because, We traverse each node of both lists exactly once, where n and m are the lengths of list1 and list2 respectively.

// # Space Complexity: O(1)
// This is because, We only use a few extra pointers (dummy and current), so the space complexity is constant.
