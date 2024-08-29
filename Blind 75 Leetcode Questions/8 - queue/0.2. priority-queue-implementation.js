/**
 * @article  : https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
 * @article  : https://www.tutorialspoint.com/the-priority-queue-in-javascript
 */

/**
 * Class representing a Priority Queue, implemented using a Min-Heap.
 * The priority queue allows for efficient insertion and removal of elements based on priority.
 */
class PriorityQueue {
  constructor() {
    // Initialize an empty array to represent the heap.
    this.heap = [];
  }

  /**
   * Swaps two elements in the heap.
   * @param {number} i - Index of the first element.
   * @param {number} j - Index of the second element.
   */
  swap(i, j) {
    // Swap the elements at indices i and j using array destructuring.
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * Gets the index of the parent node of a given node.
   * @param {number} i - Index of the child node.
   * @returns {number} - Index of the parent node.
   */
  parentIndex(i) {
    // Formula to calculate the parent index in a binary heap.
    return Math.floor((i - 1) / 2);
  }

  /**
   * Gets the index of the left child of a given node.
   * @param {number} i - Index of the parent node.
   * @returns {number} - Index of the left child.
   */
  leftChildIndex(i) {
    // Formula to calculate the left child index in a binary heap.
    return 2 * i + 1;
  }

  /**
   * Gets the index of the right child of a given node.
   * @param {number} i - Index of the parent node.
   * @returns {number} - Index of the right child.
   */
  rightChildIndex(i) {
    // Formula to calculate the right child index in a binary heap.
    return 2 * i + 2;
  }

  /**
   * Inserts an element into the priority queue with a given priority.
   * @param {any} element - The element to be added to the priority queue.
   * @param {number} priority - The priority associated with the element.
   */
  enqueue(element, priority) {
    // Create an object to represent the node with the element and its priority.
    const node = { element, priority };

    // Push the new node onto the heap array.
    this.heap.push(node);

    // Restore the heap property by moving the node upwards if necessary.
    this.heapifyUp();
  }

  /**
   * Removes and returns the element with the highest priority (lowest priority value in a min-heap).
   * @returns {any} - The element with the highest priority.
   */
  dequeue() {
    // If the heap is empty, return null.
    if (this.size() === 0) {
      return null;
    }

    // If the heap has only one element, simply pop and return it.
    if (this.size() === 1) {
      return this.heap.pop().element;
    }

    // Store the root element (highest priority element) to return later.
    const root = this.heap[0];

    // Replace the root with the last element in the heap.
    this.heap[0] = this.heap.pop();

    // Restore the heap property by moving the root element downwards if necessary.
    this.heapifyDown();

    // Return the element with the highest priority.
    return root.element;
  }

  /**
   * Restores the heap property by moving the last inserted element upwards
   * until it is in the correct position.
   */
  heapifyUp() {
    // Start at the last element in the heap (the newly inserted element).
    let index = this.heap.length - 1;

    // Continue swapping the element with its parent as long as it is smaller than its parent.
    while (
      index > 0 &&
      this.heap[index].priority < this.heap[this.parentIndex(index)].priority
    ) {
      // Swap the current element with its parent.
      this.swap(index, this.parentIndex(index));

      // Move up to the parent's index.
      index = this.parentIndex(index);
    }
  }

  /**
   * Restores the heap property by moving the root element downwards
   * until it is in the correct position.
   */
  heapifyDown() {
    // Start at the root element (index 0).
    let index = 0;

    // Continue looping as long as the current element has at least one child.
    while (this.leftChildIndex(index) < this.size()) {
      // Assume the left child is the smaller child (for a min-heap).
      let smallerChildIndex = this.leftChildIndex(index);

      // If the right child exists and is smaller than the left child, choose the right child.
      if (
        this.rightChildIndex(index) < this.size() &&
        this.heap[this.rightChildIndex(index)].priority <
          this.heap[smallerChildIndex].priority
      ) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      // If the current element is smaller than or equal to the smaller child, stop.
      if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) {
        break;
      }

      // Otherwise, swap the current element with the smaller child.
      this.swap(index, smallerChildIndex);

      // Move down to the smaller child's index.
      index = smallerChildIndex;
    }
  }

  /**
   * Returns the number of elements in the priority queue.
   * @returns {number} - The size of the priority queue.
   */
  size() {
    return this.heap.length;
  }

  /**
   * Returns the element with the highest priority without removing it from the queue.
   * @returns {any} - The element with the highest priority.
   */
  peek() {
    // If the heap is empty, return null.
    return this.size() === 0 ? null : this.heap[0].element;
  }

  /**
   * Checks whether the priority queue is empty.
   * @returns {boolean} - True if the priority queue is empty, false otherwise.
   */
  isEmpty() {
    return this.size() === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("Task 1", 2); // Add "Task 1" with priority 2
pq.enqueue("Task 2", 1); // Add "Task 2" with priority 1
pq.enqueue("Task 3", 3); // Add "Task 3" with priority 3

console.log(pq.dequeue()); // Task 2 (highest priority, since 1 < 2)
console.log(pq.peek()); // Task 1 (next highest priority)
console.log(pq.dequeue()); // Task 1
console.log(pq.dequeue()); // Task 3
