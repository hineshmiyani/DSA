/**
 * @article  : https://algo.monster/liteproblems/23
 * @article  : https://takeuforward.org/linked-list/merge-k-sorted-linked-lists
 * @question : https://leetcode.com/problems/merge-k-sorted-lists
 * @question : https://neetcode.io/problems/merge-k-sorted-linked-lists
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/*
  ✅ Problem Statement: 

  You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

  Merge all the linked-lists into one sorted linked-list and return it.

  Example 1:
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6

  Example 2:
  Input: lists = []
  Output: []

  Example 2:
  Input: lists = [[]]
  Output: []
  
*/

// # Brute-force Solution

/*
  # Step-by-step approach:

  1. `mergeTwoSortedLinkedLists` Function:
     - This function takes two sorted linked lists (`list1` and `list2`) and merges them into a single sorted linked list.
     - We use a dummy node to simplify the merging process. The `current` pointer is used to build the new merged list.
     - We iterate through both lists, comparing the current nodes of `list1` and `list2`. The smaller node is appended to the merged list, and we move the pointer of the list from which the node was taken.
     - After the loop, if there are remaining nodes in either `list1` or `list2`, we append them to the merged list.
     - Finally, we return the merged list starting from `dummy.next`.

  2. `mergeKListsSolution1` Function:
     - This function takes an array of k sorted linked lists (`lists`) and merges them into a single sorted linked list.
     - If the input array is empty, we return `null`.
     - If the input array contains only one list, we return that list.
     - We initialize `mergedListHead` with the first list in the array.
     - We iterate through the remaining lists in the array, merging each one with `mergedListHead` using the `mergeTwoSortedLinkedLists` function.
     - After processing all lists, `mergedListHead` will point to the fully merged sorted linked list.
     - We return `mergedListHead` as the result.

  This approach ensures that we merge the k sorted linked lists efficiently by leveraging the helper function to merge two lists at a time.

*/

/**
 * Merges two sorted linked lists into one sorted linked list.
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @returns {ListNode} - The head of the merged sorted linked list.
 */
const mergeTwoSortedLinkedLists = (list1, list2) => {
  // Create a dummy node to act as the starting point of the merged list.
  let dummy = new ListNode(-1);

  // Pointer to the current node in the merged list.
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

    // Move to the next node in the merged list.
    current = current.next;
  }

  // If there are remaining nodes in list1, append them to the merged list.
  if (list1 !== null) {
    current.next = list1;
  }

  // If there are remaining nodes in list2, append them to the merged list.
  if (list2 !== null) {
    current.next = list2;
  }

  // Return the head of the merged list, which is the next node of the dummy.
  return dummy.next;
};

/**
 * Merges an array of k sorted linked lists into one sorted linked list.
 * @param {ListNode[]} lists - An array of ListNode objects, each representing the head of a sorted linked list.
 * @returns {ListNode} - The head of the merged sorted linked list.
 */
const mergeKListsSolution1 = (lists) => {
  // If the input list is empty, return null.
  if (lists.length === 0) {
    return null;
  }

  // If there is only one list, return it directly.
  if (lists.length === 1) {
    return lists[0] === null ? null : lists[0];
  }

  // Initialize the merged list with the first list in the array.
  let mergedListHead = lists[0];

  // Iterate through the remaining lists and merge them one by one.
  for (let i = 1; i < lists.length; i++) {
    mergedListHead = mergeTwoSortedLinkedLists(mergedListHead, lists[i]);
  }

  // Return the head of the fully merged list.
  return mergedListHead;
};

// # Optimal Solution

/*
  The `mergeKListsSolution2` function merges k sorted linked lists into one sorted linked list.

  # Step-by-step approach:

  1. Priority Queue Initialization:
     - We initialize a `MinPriorityQueue` with a priority function that uses the `val` property of the nodes.
     - This ensures that the node with the smallest value is always at the front of the queue.

  2. Enqueue Initial Nodes:
     - Iterate through each linked list's head node in the `lists` array.
     - If the head node is not null, enqueue it into the priority queue.

  3. Merge Process:
     - Create a dummy node to serve as the starting point of the merged linked list.
     - Maintain a `current` pointer to build the new list.

  4. Dequeue and Enqueue:
     - While the priority queue is not empty:
       - Dequeue the node with the smallest value.
       - Append the dequeued node to the merged list by setting `current.next` to this node.
       - Move the `current` pointer to the newly added node.
       - If this node has a next node, enqueue the next node into the priority queue.

  5. Return the Merged List:
     - The merged linked list starts from `dummy.next` (since `dummy` is a placeholder).

  This approach ensures that we always add the smallest available node to the merged list, maintaining the sorted order.
*/

/**
 * Merges k sorted linked lists into one sorted linked list.
 * This function uses a MinPriorityQueue to efficiently merge the lists.
 *
 * @param {ListNode[]} lists - An array of ListNode objects, each representing the head of a sorted linked list.
 * @returns {ListNode} - The head of the merged sorted linked list.
 */
const mergeKListsSolution2 = (lists) => {
  // Initialize a MinPriorityQueue with a priority function that uses the node's value.
  const priorityQueue = new MinPriorityQueue({ priority: (node) => node.val });

  // Enqueue the head of each non-null list into the priority queue.
  for (let head of lists) {
    if (head) {
      priorityQueue.enqueue(head);
    }
  }

  // Create a dummy node to serve as the starting point of the merged list.
  let dummy = new ListNode(-1);
  let current = dummy;

  // Process the priority queue until it is empty.
  while (!priorityQueue.isEmpty()) {
    // Dequeue the node with the smallest value.
    const node = priorityQueue.dequeue().element;

    // Append the dequeued node to the merged list.
    current.next = node;
    current = current.next;

    // If the dequeued node has a next node, enqueue it into the priority queue.
    if (node.next) {
      priorityQueue.enqueue(node.next);
    }
  }

  // Return the head of the merged list, which is the next node of the dummy node.
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
const lists1 = () => {
  const values1 = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];

  if (values1.length === 0) {
    return [];
  }

  const lists = [];

  for (const list of values1) {
    let linkedList = new LinkedList();

    for (const value of list) {
      linkedList.push(value);
    }

    lists.push(linkedList.head);
  }

  return lists;
};

// Example 2 Input
const lists2 = () => {
  const values2 = [];

  if (values2.length === 0) {
    return [];
  }

  const lists = [];

  for (const list of values2) {
    let linkedList = new LinkedList();

    for (const value of list) {
      linkedList.push(value);
    }

    lists.push(linkedList.head);
  }

  return lists;
};

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Merged Linked List: ",
  JSON.stringify(mergeKListsSolution1(lists1()), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Merged Linked List: ",
  JSON.stringify(mergeKListsSolution1(lists2()), null, 4)
);

// # Time Complexity: O(N * (k(k+1)/2)) ~= O(N * (k^2))
// Every time two lists are merged the time complexity is proportional to the sum of the number of nodes in them as we iterate over all nodes and merge according to the data values in them.

// Assume the length of each list to be N1, N2, N3 and so on.
// - In the first iteration, when merging the first two lists (N1 and N2), the time complexity is N1 + N2.
// - In the second iteration, when merging the result of the first iteration with the third list (N3), the time complexity becomes (N1 + N2) + N3.
// - In the third iteration, merging the result of the second iteration with the fourth list (N4), the time complexity becomes ((N1 + N2) + N3) + N4.
// - This pattern continues until all K lists are merged.
// - The total time complexity can be expressed as:

// T = (N1 + N2) + (N1 + N2 + N3) + .... + (N1 + N2 + N3 + .... + Nk)

// For simplification let's assume the length of each linked list to be proportional to N,

// T = N + 2N + 3N + 4N + 5N + .... + kN

// T = N (1 + 2 + 3 + 4 + ... + k)

// The sum of lengths of the lists can be calculated using the formula for the sum of the first N natural numbers:
// T = N (k(k+1))/2

// Hence, the time complexity is O(N * (k(k+1)/2)) ~ O(N*(k^2)))

// # Space Complexity: O(1)
// As no additional data structures or space is allocated for storing data, only a constant space for pointers to maintain for traversing the linked list and merging them in place.

console.log("\n\n ------------Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Merged Linked List: ",
  JSON.stringify(mergeKListsSolution2(lists1()), null, 4)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Merged Linked List: ",
  JSON.stringify(mergeKListsSolution2(lists2()), null, 4)
);

// # Time Complexity: O(N * K * log K).
// - Initializing the priority queue takes O(1).
// - Enqueuing the head of each list into the priority queue takes O(k log k), where k is the number of linked lists.
//   This is because each insertion into the priority queue takes O(log k) time, and we do this for each of the k lists.
// - The while loop runs until the priority queue is empty. In the worst case, we process all nodes from all lists.
//   If there are a total of N nodes across all lists, the while loop will run N times.
//   Each dequeue operation takes O(log k) time, and each enqueue operation (for the next node) also takes O(log k) time.
//   Therefore, the total time complexity for the while loop is O(N * K * log K).

// # Space Complexity: O(k), where K is the number of linked lists.
// - The priority queue can hold at most k nodes at any time, so the space complexity for the priority queue is O(k).
// - The dummy node and the merged list use O(1) additional space.
// - Therefore, the overall space complexity is O(k).
