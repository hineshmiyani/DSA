/**
 * Class representing a node in a linked list.
 */
class ListNode {
  /**
   * Create a node.
   * @param {*} value - The value to store in the node.
   */
  constructor(value) {
    this.value = value; // The value stored in the node.
    this.next = null; // Pointer to the next node in the list.
  }
}

// Example usage of ListNode class
// const first = new ListNode(1);
// first.next = new ListNode(2);
// first.next.next = new ListNode(3);
// first.next.next.next = new ListNode(4);

// console.log(JSON.stringify(first, null, 4));

/**
 * Class representing a linked list.
 */
class LinkedList {
  /**
   * Create a linked list.
   */
  constructor() {
    this.head = null; // Pointer to the first node in the list.
    this.tail = null; // Pointer to the last node in the list.
    this.length = 0; // The number of nodes in the list.
  }

  /**
   * Add a node to the end of the list.
   * @param {*} value - The value to add to the list.
   * @returns {LinkedList} The linked list instance.
   */
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

    this.length = this.length + 1; // Increment the length of the list.

    return this; // Return the linked list instance.
  }

  /**
   * Add a node to the beginning of the list.
   * @param {*} value - The value to add to the list.
   * @returns {LinkedList} The linked list instance.
   */
  unshift(value) {
    const newNode = new ListNode(value); // Create a new node with the given value.
    newNode.next = this.head; // Link the new node to the current head.
    this.head = newNode; // Update the head to the new node.

    this.length = this.length + 1; // Increment the length of the list.

    return this; // Return the linked list instance.
  }

  /**
   * Insert a node at a specific index in the list.
   * @param {*} value - The value to add to the list.
   * @param {number} index - The index at which to insert the new node.
   * @returns {LinkedList|void} The linked list instance or void if index is invalid.
   */
  insertAt(value, index) {
    if (index === undefined || index < 0 || index > this.length) {
      return console.error("Please enter a valid index."); // Validate the index.
    }

    if (index === 0) {
      return this.unshift(value); // If index is 0, use unshift to add to the beginning.
    }

    if (index === this.length - 1) {
      return this.push(value); // If index is at the end, use push to add to the end.
    }

    let currentNode = this.head; // Start from the head.
    const newNode = new ListNode(value); // Create a new node with the given value.

    let i = 0;

    while (i < index - 1) {
      // Traverse to the node just before the target index.
      currentNode = currentNode.next;
      i = i + 1;
    }

    newNode.next = currentNode.next; // Link the new node to the next node.
    currentNode.next = newNode; // Link the current node to the new node.

    this.length = this.length + 1; // Increment the length of the list.

    return this; // Return the linked list instance.
  }

  /**
   * Remove the first node from the list.
   * @returns {ListNode|void} The removed node or void if the list is empty.
   */
  shift() {
    if (this.length === 0) {
      return console.error("Error: Linked List is empty!"); // Check if the list is empty.
    }

    this.head = this.head.next; // Update the head to the next node.
    this.length = this.length - 1; // Decrement the length of the list.

    return this.head; // Return the new head.
  }

  /**
   * Remove the last node from the list.
   * @returns {ListNode|void} The removed node or void if the list is empty.
   */
  pop() {
    if (this.length === 0) {
      return console.error("Error: Linked List is empty!"); // Check if the list is empty.
    }

    let currentNode = this.head; // Start from the head.

    let i = 1;
    while (i < this.length - 1) {
      // Traverse to the node just before the last node.
      currentNode = currentNode.next;
      i = i + 1;
    }

    let returnValue = { ...currentNode.next }; // Store the last node to return.

    currentNode.next = null; // Remove the last node.
    this.tail = currentNode; // Update the tail to the current node.

    this.length = this.length - 1; // Decrement the length of the list.

    return returnValue; // Return the removed node.
  }

  /**
   * Remove a node at a specific index in the list.
   * @param {number} index - The index of the node to remove.
   * @returns {ListNode|void} The removed node or void if index is invalid.
   */
  removeAt(index) {
    if (index === undefined || index < 0 || index > this.length) {
      return console.error("Please enter a valid index."); // Validate the index.
    }

    if (index === 0) {
      return this.shift(); // If index is 0, use shift to remove the first node.
    }

    if (index === this.length - 1) {
      return this.pop(); // If index is at the end, use pop to remove the last node.
    }

    let currentNode = this.head; // Start from the head.

    let i = 1;
    while (i < index) {
      // Traverse to the node just before the target index.
      currentNode = currentNode.next;
      i = i + 1;
    }

    currentNode.next = currentNode.next.next; // Link the current node to the node after the target node.

    this.length = this.length - 1; // Decrement the length of the list.
  }

  /**
   * Print the values of all nodes in the list.
   */
  printList() {
    let currentNode = this.head; // Start from the head.

    while (currentNode) {
      // Traverse through the list.
      console.log(currentNode.value); // Print the value of the current node.
      currentNode = currentNode.next; // Move to the next node.
    }
  }
}

// Example usage of LinkedList class
const linkedList = new LinkedList();

linkedList.push(2); // Add 2 to the end of the list.
linkedList.push(4); // Add 4 to the end of the list.
linkedList.push(5); // Add 5 to the end of the list.

linkedList.unshift(1); // Add 1 to the beginning of the list.
linkedList.unshift(0); // Add 0 to the beginning of the list.

linkedList.insertAt(3, 3); // Insert 3 at index 3.

linkedList.removeAt(4); // Remove the node at index 4.

linkedList.shift(); // Remove the first node.

linkedList.pop(); // Remove the last node.

linkedList.printList(); // Print all values in the list.

console.log(JSON.stringify(linkedList, null, 4)); // Print the entire linked list as a JSON string.
